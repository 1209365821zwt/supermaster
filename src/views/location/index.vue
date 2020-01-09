<template>
  <div class="main-location">
      <s-Header>
        <h4>北京超市</h4>
      </s-Header>
      <div class="nav">
       <s-Search @change='change' changeMain></s-Search>
      </div>
      <button @click="getLocation" class="btn">定位到当前位置</button>
      <div class="cont">

      </div>
      <!-- <s-loading></s-loading> -->
      <div class="footer" @click='changeTop'>
        <p>新增地址</p>
      </div>
      <div class="list">

      </div>
      <Dialog title="选择位置" :show.sync='isshow'>
        <List :list='list'></List>
      </Dialog>
  </div>
</template>

<script>
import map from '../../until/map'
import Dialog from './components/dialog'
import List from './components/list'
export default {
  components: {
    Dialog,
    List
  },
  data (){
    return {
      isshow: false,
      list: []
    }
  },
  created (){
    // this.$api.address.index().then(res => {
    //   console.log(res)
    // })
    console.log(this.$api.address)
  },
  methods: {
    change (item){
      console.log(item);
      this.$store.commit('user/setALocation', {
        name: item.name,
        adress: item.address,
        district: item.district
      })
      this.$router.push('/main')
    },
    getLocation (){
      this.$loading.show()
      map.mapLocation({
        extensions: 'all'
      }).then((res) => {
        this.$loading.hide();
        this.isshow=true
        this.list=res.pois
      }).catch(() => {
        console.log('定位错误');
        this.$loading.hide();
        this.isshow=false
      })
    },
    changeTop (){
      this.$router.push('/newAddress')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-location{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .btn{
    width: 200px;
    height: 40px;
    background: #eee;
    border: 0;
  }
}
.cont{
  width: 100%;
  flex: 1;
}
.footer{
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-top: 1px solid #ccc;
  background: #f90;
  text-align: center;
  p{
    font-size: 30px;
  }
}
</style>
