<template>
   <svg :style="style">
    <use :xlink:href="'#' + type"></use>
  </svg>
</template>

<script>
export default {
  // 有了name 可以所使用的递归组件，可以自己调用自己
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: ''
    }

  },
  computed: {
    style (){
      return {
        color: 'rgb(0, 86, 152)',
        width: this.size+'px',
        height: this.size+'px'
      }
    }

  }
}
</script>

<style>
.ivon{
  color: #f56;
}
</style>
