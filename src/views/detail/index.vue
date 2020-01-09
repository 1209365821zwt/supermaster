<template>
  <div class="main-detail">
     <div class="pic">
         <div class="swiper-container">
    <div class="swiper-wrapper">
     <div class="swiper-slide" v-for="(item,index) in imglist" :key="index">
     <img :src="item" alt="">
     </div>
     <div class="swiper-pagination"></div>
    </div>
  </div>
     </div>
     <div class="cont">
       <h4>
           {{$route.query.name}}
       </h4>
       <span>￥{{$route.query.price}}元</span>
       <div class='btn'>
         <button>加入购物车</button>
       </div>
     </div>
     <div class="footer">

     </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
export default {
  name: 'Detail',
  data (){
    return {
      imglist: []
    }
  },
  created (){
    this.init();
    this.$nextTick(() => {
      // eslint-disable-next-line no-new
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        click: true,
        pagination: {
          el: '.swiper-pagination'
        }

      });
    })
  },
  methods: {
    init (){
      this.imglist=JSON.parse(this.$route.query.images);
      console.log(this.imglist)
    }
  }
}
</script>

<style lang='scss' scoped>
.main-detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pic{
    width: 100%;
   height: 400px;
   .swiper-container,.swiper-wrapper,.swiper-slide{
       width: 100%;
       height: 100%;
       img{
           width: 100%;
           height: 100%;
       }
   }
}
.cont{
    width: 100%;
    flex:1;
    text-align: left;
    padding-left: 30px;
    h4{
      font-size: 30px;
      width: 100%;
      height: 100px;
      line-height: 100px;
    }
    span{
      display: inline-block;
      width: 200px;
      font-size: 35px;
      color: #f56;
    }
}
.btn{
  width: 200px;
  height: 80px;
  margin-top: 30px;
  button{
    width: 100%;
    height: 100%;
    border: 0;
    background:#f90;
    color: #fff;
  }
}
.footer{
    width: 100%;
    height: 100px;
    line-height: 100px;
    border-top: 1px solid #ccc;
}

</style>
