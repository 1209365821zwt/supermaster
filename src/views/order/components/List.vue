<template>
  <div class="main-on">
      <dl v-for='(item,index) in orderList' :key='index'>
        <dt>
          <img :src="item.cover" alt="">
        </dt>
        <dd>
          <h4>{{item.name}}</h4>
          <span>数量：{{item.num}}</span>
        </dd>
      </dl>

  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    orderList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss' scoped>
.main-on{
  width: 100%;
  height: 100%;
  dl{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #ccc;
    display: flex;
    dt{
      flex: 1;
      img{
        width: 100px;
        height: 100px;
      }
    }
    dd{
      flex: 2;
      h4{
        font-size: 30px;
      }
      span{
        font-size: 30px;
      }
    }
  }
}
</style>
