<template>
  <div class="main-pic">
     <div class="top">
       <h4>每日必购</h4> <span>大家都在卖</span>
     </div>
     <div class="pic">
        <ul>
            <li v-for="(item,index) in imglist" :key="index">
                <img :src="require('../../../../'+item)" alt="">
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    imglist: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.main-pic{
    width: 100%;
    height: 384px;
    border: 1px solid #f56;
    display: flex;
    flex-direction: column;
}
.top{
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    h4{
        font-size: 22px;
        padding:0 15px;
    }
    span{
        font-size: 15px;
    }
}
.pic{
   width: 100%;
   height: 300px;;
   ul{
       width: 100%;
       height: 100%;
       display: flex;
       li{
          flex: 1;
          height: 100%;
          img{
              width: 100%;
              height: 100%;
          }
       }
   }
}
</style>
