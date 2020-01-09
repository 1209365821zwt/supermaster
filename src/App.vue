<template>
  <div id="app">
   <keep-alive>
     <router-view v-if='$route.meta.keepAlive'/>
   </keep-alive>
     <router-view v-if='!$route.meta.keepAlive'></router-view>

  </div>
</template>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/normalize.css'
import '@/assets/css/animate.css'
export default {
  created () {
    if (this.$store.state.user.token){
      this.$store.dispatch('user/info')
    }
  }
}
</script>
<style lang="scss" scoped>

#app{
  width: 100%;
  height: 100%;
}
</style>
