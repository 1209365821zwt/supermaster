<template>
  <div class="main-btn">
      <button @click="change" >
          <slot></slot>

      </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {

  },
  methods: {
    change (){
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-btn{
    button{
        background: #ff0;
        // outline: none;
        color: #fff;
        border: 0;
        height: 60px;
        margin-right: 20px;
    }

}
</style>
