<template>
  <div class="loading-wrap" v-show="isShow">
 <lottie
      :options="defaultOptions"
      :width="375"
      :height="375"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import lottie from 'vue-lottie';
import animationData from './data.json';
export default {
  name: 'Loading',
  components: {
    lottie: lottie
  },
  data () {
    return {
      isShow: false,
      defaultOptions: {
        container: '.loading-wrap',
        animationData: animationData,
        loop: true,
        autoplay: true
      },
      defaultAnim: ''
    }
  },
  methods: {
    show (){
      this.isShow=true
    },
    hide (){
      this.isShow=false
    },
    handleAnimation (anim) {
      this.defaultAnim = anim;
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrap{
   @include wh(100vw, 100vh);
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
