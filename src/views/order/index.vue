<template>
  <div class="main-order">
     <s-Header>
         <h4>
             订单购买
         </h4>
     </s-Header>
     <div class="address">
         <p @click='handclick'>请输入你的详细地址</p>
     </div>
     <div class="sure">
       <span>请确认订单信息</span>
     </div>
      <div class="cont">
        <List :orderList='orderList'></List>
      </div>
      <div class="foot">
        <input type="button" value="点击购买">
      </div>
  </div>
</template>

<script>
import List from './components/List'
import { mapState } from 'vuex'
export default {
  methods: {
    handclick (){
      this.$router.push('/selectLocation')
    }
  },
  components: {
    List
  },
  computed: {
    ...mapState('car', ['orderList'])
  }
}
</script>

<style lang='scss' scoped>
.main-order{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.address{
  width: 100%;
  p{
   width: 100%;
   text-align: left;
   line-height: 100px;
   font-size: 30px;
   padding-left: 30px;
   border: 1px solid #ccc;
  }
}
.sure{
  text-align: left;
  padding-left: 30px;
  span{
    font-size: 30px;
  }
}
.cont{
  width: 100%;
  flex: 1;
}
.foot{
  width: 100%;
  height: 100px;
  line-height: 100px;
  input{
    width: 100%;
    height: 100%;
    border: 0;
    background: #f90;
    color: #fff;
    font-size: 35px;
  }
}
</style>
