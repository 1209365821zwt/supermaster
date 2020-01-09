<template>
  <div class="main-swiper">
 <div class="swiper-container">
    <div class="swiper-wrapper">
     <div class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
     <img :src="'/api/public/'+item.cimg" alt="">
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css'

export default {
  name: 'Swiper',
  props: {
    swiperlist: {
      type: Array,
      default: () => []
    }
  },
  created (){

  }
}
</script>

<style lang="scss" scoped>
.main-swiper{
    width: 100%;
    height: 308px;
}
.swiper-container,.swiper-wrapper,.swiper-slide{
  width: 100%;
  height: 308px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
