<template>
  <div class="main-left">
      <ul>
        <li v-for="(item,index) in leftList" :key="index" :class='{active:ind==index}' @click="change(index,item)">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopLeft',
  props: {
    leftList: {
      type: Array,
      default: () => []
    },
    ind: {
      type: Number,
      default: 0
    }

  },

  methods: {
    change (index, item){
      this.$emit('changelist', index, item)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-left{
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul{
    width: 100%;
    li{
      line-height: 100px;
      font-size: 20px;
      &.active{
        color: #f90;
        font-weight: bold;
        background: #dff;
      }
    }
  }
}
</style>
