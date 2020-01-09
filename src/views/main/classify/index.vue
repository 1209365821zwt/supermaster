<template>
  <div class="main-class">
    <s-Header>
      <h4>校园超市</h4>
    </s-Header>
    <div class="ipt">
      <Search></Search>
    </div>
    <div class="content1">
      <shopLeft  :leftList="leftList" :ind="ind" @changelist="change">

      </shopLeft>
      <div class="right">
        <div class="top">
          <div class="top-1">
        <Top v-if='leftList.length>0' :list='leftList[ind].children'></Top>

          </div>

        </div>

      <s-BScroll @bsScroll="bsScroll" scrollY>
       <shopRight :list='list'>

      </shopRight>
            <span class="loading" v-show="loading">loading...</span>

      </s-BScroll>
      </div>

    </div>
  </div>
</template>

<script>
import Search from './components/search'
import shopLeft from './components/shop-left'
import shopRight from './components/shop-right'
import Top from './components/top'
import BScroll from 'better-scroll'
export default {
  components: {
    Search,
    shopLeft,
    shopRight,
    Top
  },
  data (){
    return {
      leftList: [],
      ind: 0,
      leftScroll: null,
      rightScroll: null,
      list: [],
      listData: {
        classify_id: 1,
        page: 0,
        pageSize: 5
      },
      flag: true,
      loading: false

    }
  },
  created (){
    this.init();
    this.$nextTick(() => {
      this.scrollChange()
    });
    this.$api.class.products({
      classify_id: this.listData.classify_id,
      page: this.listData.page,
      pageSize: this.listData.pageSize

    }).then(res => {
      this.list=res.data
    })
  },
  watch: {
    listData: {
      handler: 'getProducts',
      deep: true,
      immediate: true
    }
  },
  methods: {
    async  init (){
      const res=await this.$api.class.product();
      this.leftList=res.data
      console.log(res.data)
    },
    change (index, item){
      this.ind=index;
      this.listData.classify_id=item.id
    },
    scrollChange (){
      this.leftScroll=new BScroll('.main-left', {
        click: true

      });
      //   this.rightScroll=new BScroll('')
      // }
    },
    bsScroll (bs){
      // console.log(bs)
      if (this.flag){
        if (bs.y<bs.maxScrollY){
          this.loadMore();
        }
      }
    },
    loadMore () {
      console.log('滚到底啦');
      this.loading=true;
      this.listData.page +=1;
    },
    async getProducts () {
      console.log(this.listData)
      // eslint-disable-next-line camelcase
      const { classify_id, page, pageSize } = this.listData;
      const res = await this.$api.class.products({ classify_id, page, pageSize });
      if (page <= 0) {
        this.list = res.data;
      } else {
        this.list = [...this.list, ...res.data];
      }
      this.loading = false;
      if (res.data.length <= 0) this.flag = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-class{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content1{
  width: 100%;
  flex: 1;
  display: flex;
    overflow: hidden;

  .main-left{
    flex: 1;
    height: 100%;
    background:rgba(250,250,250,1);
  }
  .top{

    width: 100%;
    line-height: 100px;

    .top-1{
      line-height: 100px;
      display: flex;
      flex-wrap: nowrap;
    overflow-x: hidden;
    }
  }
  .right{
    flex: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main-top{
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #ccc;
    }
  }
}
.content{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content-1{
    width: 100%;

  }
}
</style>
