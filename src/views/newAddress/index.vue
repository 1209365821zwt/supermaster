<template>
  <div>
      <s-Header>
        <h4>编辑地址</h4>
      </s-Header>
     <Form></Form>
  </div>
</template>

<script>
import Form from './components/form'
export default {
  components: {
    Form
  },
  methods: {

    beforeRouterLeave (to, from, next){
      if (to.path==='/selectLocation'){
        from.meta.keepAlive=true
      } else {
        this.$destroy();
        from.meta.keepAlive=false;
      }
      next()
    }
  }
}
</script>

<style>

</style>
