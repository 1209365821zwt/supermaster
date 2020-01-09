<template>
<transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
    <div class="popup-wrap" v-show='show' @click="close">

        <transition leave-active-class="animated slideOutDown" enter-active-class="animated slideInUp">

    <div class="box" v-show='show'>
        <header>
            <h2>{{title}}</h2>
        </header>
        <div class="content">
            <slot></slot>
        </div>
    </div>
        </transition>
    </div>
</transition>

</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close (){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang='scss' scoped>
.popup-wrap{
    @include wh(100%,100%);
    top: 0;
    left: 0;
    z-index: 100;
    position: fixed;
    background: rgba(0,0,0,.2);
     .box{
         background: #fff;
         position: absolute;
         bottom: 0;
         left: 0;
         width: 100%;
         max-height: 400px;
         display: flex;
         flex-direction: column;
         overflow: auto;
        header{
          h2{
            width: 100%;
            height: 98px;
            line-height: 98px;
            text-align: center;
            font-size: 30px;
          }
        }
     }
}
</style>
