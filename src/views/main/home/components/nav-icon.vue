<template>
  <div class="nav-icon">
       <dl v-for="(item,index) in iconlist" :key="index">
           <dt><img :src="'/api/public/'+item.icon" alt=""></dt>
           <dd><span>{{item.title}}</span></dd>
       </dl>
  </div>
</template>

<script>
export default {
  props: {
    iconlist: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-icon{
    width: 100%;
    height: 312px;
    display: flex;
    flex-wrap: wrap;
    dl{
        flex-shrink: 0;
       width: 23%;
       text-align: center;
       margin: 1%;
       dt{
          width: 80px;
          height: 80px;
          margin: 0 auto;
          img{
              border-radius: 10px;
              width: 100%;
              height: 100%;
          }
       }
       dd{
           span{
               font-size: 6px;
           }
       }
    }
}
</style>
