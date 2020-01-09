<template>
  <div class="main-list">
      <ul>
          <li v-for='(item,index) in list' :key="index">
              <h4>{{item.name}}</h4>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.main-list{
    width: 100%;
    height: 100%;
    ul{
        li{
            line-height: 80px;
            font-size: 24px;
            width: 100%;
            text-align: left;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>
