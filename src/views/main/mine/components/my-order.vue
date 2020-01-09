<template>
  <div class="main-order">
      <div class="top">
          <p>我的订单</p>
          <span>查看全部 > </span>
      </div>
      <div class="cont">
        <p class="p1">已支付</p>
        <p class="p2">待支付</p>
        <p class="p3">待收货</p>
        <p class="p4">待退款</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-order{
    width:690px;
height:299px;
background:rgba(255,255,255,1);
box-shadow:0px 33px 20px -20px rgba(0,0,0,0.11),0px 0px 17px -3px rgba(0,0,0,0.06);
border-radius:12px;
border:1px solid rgba(240,240,240,1);
position: relative;
top: -40px;
left:30px;
display: flex;
flex-direction: column;
}
.top{
display: flex;
width: 100%;
height: 64px;
line-height: 64px;
p{
    font-size: 32px;
    flex: 1;
    text-align: left;
    padding-left: 33px;

}
span{
    font-size: 20px;
    width: 130px;
}
}
.cont{
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top: 20px;
    .p1,.p2,.p3,.p4{
        font-size: 30px;
        height: 100px;
        line-height: 100px;
        font-weight: 600;

    }
    .p1{
        background: aqua;
    }
    .p2{
        background: bisque;
    }
    .p3{
        background: coral;
    }
    .p4{
        background: darkturquoise;
    }
}
</style>
