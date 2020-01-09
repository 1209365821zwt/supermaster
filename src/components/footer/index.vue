<template>
  <div class="main-footer">
     <router-link tag="dl" v-for="(item,index) in navlist" :key="index" :to="item.path">
        <dt><img :src="require('../../assets/icon/'+item.icon)" alt=""></dt>
         <dd><span>{{item.title}}</span></dd>
     </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    navlist: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="scss" scoped>
.main-footer{
  width:750px;
height:98px;
background:rgba(255,255,255,1);
box-shadow:0px 2px 2px -6px rgba(0,0,0,0.03);
border:1px solid rgba(235,235,235,1);
display: flex;
overflow: hidden;
dl{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
align-items: center;
justify-content: center;
&.router-link-active{
  color: #f56;
}
  dt{
      margin-top: 10px;
      width: 52px;
      height: 52px;
    img{
      width: 52px;
      height: 52px;
    }
  }
  dd{
      margin-top: -15px;

   span{
      display: inline-block;

      font-size:6px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;

   }
  }
}
}
</style>
