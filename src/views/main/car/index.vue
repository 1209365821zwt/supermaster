<template>
  <div class="main-car">
      <s-Header>
        <h4>购物车</h4>
      </s-Header>
      <div class="list">

        <Item :carlist='carlist'></Item>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Item from './components/item'
import { mapState } from 'vuex'
import Footer from './components/footer'
export default {
  components: {
    Item,
    Footer
  },
  created (){
    this.init();
    console.log(this.carlist)
    // console.log(this.$store.state.car('carlist'))
  },
  methods: {
    // ...mapActions('car', ['fetchCarlist']),
    init (){
      this.$store.dispatch('car/fetchCarlist')
      // this.fetchCarlist()
    }

  },
  computed: {
    ...mapState('car', ['carlist'])
  }
}
</script>

<style lang="scss" scoped>
.main-car{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list{
  flex: 1;
  width: 100%;
}
.main-footer{
width:750px;
height:99px;
background:rgba(255,255,255,1);
border-radius:0px 0px 12px 12px;
border:1px solid rgba(237,237,237,1);
}
</style>
