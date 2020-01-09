<template>
  <div class="form-group">
    <h2 class="form-group-title">{{title}}</h2>
    <div class="form-group-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 20px;
  .form-group-title {
    font-size: 14px;
    color: #000;
  }
}
</style>
