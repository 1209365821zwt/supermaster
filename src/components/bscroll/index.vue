<template>
  <div class="content">
     <div class="content-1" :class="{scrollX:scrollY==false}">
         <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'BScroll',
  props: {
    scrollY: {
      type: Boolean
    }
  },
  mounted (){
    this.init();
    console.log(this.scrollY)
  },
  methods: {
    init (){
      let bs=new BScroll('.content', {
        scrollY: this.scrollY,
        scrollX: !this.scrollY,
        probeType: 3,
        click: true
      });
      bs.on('scroll', this.throttle(this.onScroll.bind(this, bs), 300));
      bs.on('scrollEnd', this.onScrollEnd.bind(this, bs))
    },
    onScroll (bs){
      this.$emit('bsScroll', bs)
    },
    onScrollEnd (bs){
      bs.refresh()
    },
    // 设置一个过期时间
    throttle (func, delay) {
      let prev=Date.now();
      return function (){
        let now=Date.now();
        if (now-prev>=delay){
          func();
          prev=Date.now()
        }
      }
    }
  }
}
</script>

<style>

</style>
