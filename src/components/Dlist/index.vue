<template>
   <div class="main-list">
      <dl v-for="(item,index) in productList" :key="index">
          <dt><img :src="item.cover" alt=""></dt>
          <dd>
              <h4>{{item.name}}</h4>
              <p>已售出{{item.count}}</p>
              <span>￥{{item.price}}</span>
              <div class="icon" @click="add(item.id,1)">
                <s-Icon type='shopcar' :size='30'></s-Icon>
              </div>
          </dd>
      </dl>

   </div>
</template>

<script>
export default {
  name: 'Dlist',
  props: {
    productList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    add (id, num){
      this.$store.dispatch('car/addCar', {
        productId: id,
        num
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.main-list{
    width: 100%;
    dl{
        display: flex;
        width: 100%;
        height: 350px;
        border-bottom: 1px solid #ccc;
        dt{
          flex: 1;
          img{
              padding: 30px;
              width: 240px;
              height: 240px;
          }
        }
        dd{
          flex: 3;
          margin-left: 30px;
                  position: relative;

          h4{
              text-align: center;
              font-size: 30px;
              margin-top: 27px;
              margin-bottom: 12px;
          }
          p{
              width:251px;
height:30px;
font-size:24px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(153,153,153,1);
line-height:30px;
          }
          span{
           display: inline-block;
           width: 100%;
           text-align: left;

height:44px;
font-size:36px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(254,49,19,1);
line-height:44px;
          }
        }
    }
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 80px;
        background: tomato;
        position: absolute;
        top: 110px;
        left: 340px;
    }
}
</style>
