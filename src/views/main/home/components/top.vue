<template>
  <div class="main-top">
     <ul>
         <li v-for="(item,index) in topList" :key="index" :class='{active:ind==index}' @click="tabChange(index,item.id)">
          {{item.title}}
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    topList: {
      type: Array,
      default: () => []
    },
    ind: {
      type: Number,
      default: 0
    }
  },
  // data (){
  //   return {
  //     ind: 0
  //   }
  // },
  methods: {
    tabChange (index, id){
      // this.ind=index;
      this.$emit('changeList', index, id)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-top{
    width: 100%;
    height: 98px;
    line-height: 98px;
    border: 1px solid #ccc;
}
ul{
   width: 100%;
    height: 98px;
        line-height: 98px;

  display: flex;
  align-items: center;
  justify-content: center;
  li{
    flex: 1;
    text-align: center;
    height: 100%;
   font-size: 20px;
  &.active{
    color: #f56;
    font-size: 30px;
  }
  }
}
</style>
