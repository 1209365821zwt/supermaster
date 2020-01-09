<template>
  <div class="main-header">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss'>
.main-header{
    @include wh(750px,128px);
    line-height: 128px;
    text-align: center;
    h4{
      font-size: 36px;
    }
}
</style>
