<template>
  <div class="main">

      <div class="cont">
       <router-view></router-view>

      </div>
       <s-footer :navlist="navList"></s-footer>
  </div>
</template>

<script>
export default {
  data (){
    return {
      navList: [
        {
          path: '/main/home',
          title: '首页',
          icon: 'home.png'
        },
        {
          path: '/main/classify',
          title: '分类',
          icon: 'class.png'
        },
        {
          path: '/main/car',
          title: '购物车',
          icon: 'car.png'
        },
        {
          path: '/main/mine',
          title: '我的',
          icon: 'my.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction:column;
}
.cont{
    width: 100%;
    flex: 1;
    // overflow-y: auto;
        overflow-x: hidden;
        max-width: 750px;

}

</style>
