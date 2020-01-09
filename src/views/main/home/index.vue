<template>
  <div class="main-home">
       <S-Header>
           <h4>校园超市</h4>
       </S-Header>
         <Top :topList='topList' @changeList='change' v-if='tabBarSticky' ref="tabBar" :ind="activeInd"></Top>
       <s-BScroll @bsScroll="bsScroll" scrollY>
      <div class="nav">
         <p @click="haveposition"><img src="../../../assets/icon/search.png" alt=""><span>{{location.name}}</span></p>
       </div>
       <s-swiper :swiperlist='swiperlist'></s-swiper>
       <navIcon :iconlist="iconlist"></navIcon>
       <shopPic :imglist="imglist"></shopPic>
       <div class="tab">
         <Top :topList='topList' @changeList='change' v-if='!tabBarSticky' ref="tabBar" :ind="activeInd"></Top>
         <div class="list">
         <s-Dlist :productList="productList"></s-Dlist>
         </div>

         </div>
      <span class="loading" v-show="loading">loading...</span>
       </s-BScroll>

</div>
</template>

<script>
import navIcon from './components/nav-icon'
import shopPic from './components/shopPic'
import Top from './components/top'
import Swiper from 'swiper';
import { mapState } from 'vuex';
// import BScroll from 'better-scroll'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    navIcon,
    shopPic,
    Top
  },
  data (){
    return {
      activeInd: 0,
      swiperlist: [],
      iconlist: [],
      imglist: [
        'assets/image/m1.jpg',
        'assets/image/m2.jpg',
        'assets/image/m3.jpg'
      ],
      topList: [],
      formData: {
        type: 1,
        page: 0,
        pageSize: 3
      },
      productList: [],
      scrollHeight: null,
      scrollH: 0,
      flag: true,
      tabBarTop: 0,
      loading: false,
      tabBarSticky: false

    }
  },
  watch: {
    formData: {
      handler: 'getProducts',
      deep: true,
      immediate: true
    },
    tabBarTop (newValue){
      console.log(newValue)
    }
  },
  computed: {
    ...mapState('user', ['location'])
  },
  mounted (){
    this.getTabBarTop()
  },
  created (){
    this.$api.user.carouel().then(res => {
      this.swiperlist=res.message;
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          click: true
        });
        // this.scroll()
      })
    })
    this.$api.user.iconlist().then(res => {
      this.iconlist=res.message
    });
    // this.$api.home.product(this.formData).then(res => {
    //   this.productList=res.data
    // })
    this.init();
    console.log(this.tabBarSticky)
  },
  methods: {

    async haveposition (){
      this.$router.push('/location');
    },
    async init (){
      const res=await this.$api.home.menu();
      this.topList=res.data
    },
    async change (index, id){
      this.activeInd=index;
      this.formData.type=id;
      this.formData.page = 0;
      this.flag = true;
      console.log(this.formData)
    },
    async getProducts () {
      const { type, page, pageSize } = this.formData;
      const res = await this.$api.home.product({ type, page, pageSize });
      if (page <= 0) {
        this.productList = res.data;
      } else {
        this.productList = [...this.productList, ...res.data];
      }
      this.loading = false;
      if (res.data.length <= 0) this.flag = false;
    },
    bsScroll (bs){
      if (this.flag){
        if (bs.y<bs.maxScrollY){
          this.loadMore();
        }
      }
      if (bs.y < -this.tabBarTop) {
        this.tabBarSticky = true;
      } else {
        this.tabBarSticky = false;
      }
    },
    getTabBarTop () {
      const rect = this.$refs.tabBar.$el.getBoundingClientRect();
      console.log(rect)
      this.tabBarTop = rect.top;
    },
    loadMore () {
      console.log('滚到底啦');
      this.loading=true;
      this.formData.page +=1;
    }

  }

}
</script>

<style lang="scss" scoped>
.main-home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content{
 width: 100%;
 flex: 1;
overflow: hidden;
display: flex;
flex-direction: column;
}
.content-1{
  width: 100%;
}
.nav{
  @include wh(100%,98px);
  line-height: 98px;
  display: flex;
  font-size: 30px;
  p{
    img{
      width: 50px;
      height: 50px;
    }
    span{
      font-size: 20px;
    }
  }

}
.tab{
  flex: 1;
  width: 100%;
}
.list{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
