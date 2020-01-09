<template>
 <div class="main-mine">
     <s-Header>
         <h4>我的{{info.phone}}</h4>
     </s-Header>
     <div class="head">
         <setHead></setHead>
         <myOrder></myOrder>
         <myCard></myCard>
     </div>
 </div>
</template>

<script>
import setHead from './components/set-head'
import myOrder from './components/my-order'
import myCard from './components/my-card'
import { mapState } from 'vuex'
export default {
  components: {
    setHead,
    myOrder,
    myCard
  },
  computed: {
    ...mapState('user', ['info'])
  }
}
</script>

<style lang="scss" scoped>
.main-mine{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.head{
    width: 100%;
    height: 264px;
    background:rgba(254,49,19,1);
box-shadow:0px 1px 1px 0px rgba(255,64,54,0.2);
}
</style>
