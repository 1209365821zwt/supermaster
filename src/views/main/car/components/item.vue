<template>
  <div class="main-item">
      <dl v-for="(item,index) in carlist" :key='index'>
          <form action="">
              <input type="checkbox" :checked='item.active ' @click='changeFlag(index,!item.active)'>
          </form>
          <dt>
              <img :src="item.cover" alt="">
          </dt>
          <dd>
              <h5>{{item.name}}</h5>
              <div>
                  <span>￥{{item.price}}</span>
                  <p>
                      <span @click='handClick(item,1,index)'>+</span>
                      {{item.num}}
                      <span @click='handDown(item,-1,index)'>-</span>
                  </p>
              </div>
          </dd>
      </dl>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Item',
  props: {
    carlist: {
      type: Array,
      default: () => []
    }
  },
  created (){
    console.log(this.carlist)
  },
  methods: {
    ...mapMutations('car', ['setActive', 'setNum']),
    async changeFlag (ind, flag){
      this.setActive({ ind, flag })
    },

    async handClick (item, num, index){
      console.log(item)
      this.$store.dispatch('car/addCar', {
        productId: item.productId,
        num
      });
      this.setNum()
    },
    handDown (item, num, index){
      this.$store.dispatch('car/addCar', {
        productId: item.productId,
        num
      })
      if (item.num<=1){
        this.$api.car.delete({
          id: item.id
        }).then(res => {
          console.log(res)
        });
        this.$api.car.list().then(res => {
          this.carlist=res.data
        });
      };
    }
  }

}
</script>

<style lang='scss' scoped>
.main-item{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
dl{
    width: 100%;
    height: 200px;
    display: flex;
    border-bottom: 1px solid #ccc;
    form{
        width: 80px;

        input{
            width: 48px;
            height: 48px;
            margin-top: 50px;
            margin-left: 28px;
        }
    }
    dt{
        flex: 1;
        img{
            width: 160px;
            height: 160px;
        }
    }
    dd{
        flex: 2;
        h5{
            width:273px;
height:34px;
font-size:28px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(17,17,17,1);
line-height:34px;
        }
        div{
            display: flex;
            margin-top: 40px;
            span{
                flex: 1;
                text-align: left;
font-size:24px;
font-family:PingFangSC-Semibold,PingFang SC;
font-weight:600;
color:rgba(254,49,19,1);
line-height:44px;
            }
            p{
                flex: 2;
                text-align: right;
                span{
                    display: inline-block;
                    width: 56px;
                    height: 56px;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 56px;
                    font-size: 50px;
                    color: #004;

                }
            }
        }
    }
}
</style>
