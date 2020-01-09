<template>
  <div class="main-right">
    <dl v-for="(item,index) in list" :key='index'>
      <dt @click='detail(item)'>
        <img :src="item.cover" alt="">
      </dt>
      <dd>
        <h4>{{item.name}}</h4>
        <p>累计{{item.count}}分</p>
        <div>
          <p><b>￥</b> <span>{{item.price}}</span>元</p>
          <div class="icon" @click='add(item.id,1)'>
           <s-Icon type='shopcar' :size='30' ></s-Icon>

          </div>

        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Right',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  created (){
    console.log(this.list)
  },
  methods: {
    add (id, num){
      this.$store.dispatch('car/addCar', {
        productId: id,
        num
      })
      alert('加入成功')
    },
    detail (item){
      this.$router.push({
        path: '/detail',
        query: item
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.main-right{
  width: 100%;
  height: 100%;
 dl{
   width: 578px;
   height: 234px;
   display: flex;
   dt{
     img{
       width: 187px;
       height: 187px;
       padding: 24px;
     }

   }
 dd{
       h4{
         font-size:30px;
         font-weight: 600;
       }
       p{
         width:258px;
height:30px;
font-size:18px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(153,153,153,1);
line-height:30px;
       }
       div{
         display: flex;
         line-height: 100px;
         p{
           line-height: 100px;
          flex: 1;
           text-align: left;
           b{
             width:12px;
height:24px;
font-size:24px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(254,49,19,1);
line-height:30px;
display: inline-block;
           }
                  span{
           width:100px;
     height:35px;
          font-size:36px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
color:rgba(254,49,19,1);
line-height:44px;
         }
         display: inline-block;
         }
       .icon{
         line-height: 80px;;
          text-align: center;
          background: #f56;
          width: 80px;
          height: 80px;
          border-radius: 50%;
       }
       }
     }
 }
}
</style>
