<template>
  <div class="main-top">
         <ul>
                <li v-for="(item,index) in list" :key='index'>
                  {{item.title}}
          </li>
         </ul>

  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  created (){
  }
}
</script>

<style lang="scss" scoped>
.main-top{
    flex: 1;

    ul{
          display: flex;
          flex-wrap: nowrap;
    }

        li{
            flex-shrink: 0;
            width: 30%;
            font-size: 20px;

        }

}
</style>
