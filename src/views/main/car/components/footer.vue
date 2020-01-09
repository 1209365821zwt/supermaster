<template>
  <div class="main-footer">
      <form action="">
       <label><input type="checkbox" :checked='allFlag' @click='change(!allFlag)'><span>全选</span></label>
      </form>
      <p>合计：{{allPrice}}元</p>
      <button @click='account'>去结算</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapState('car', ['allFlag', 'allPrice', 'carlist'])
  },
  methods: {
    ...mapMutations('car', ['setAllflag', 'setOrderlist']),
    change (allflag){
      this.setAllflag(allflag)
    },
    account (){
      this.$router.push('/order');
      console.log(this.carlist);
      this.carlist.forEach(item => {
        if (item.active===true){
          this.setOrderlist(item)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.main-footer{
    display: flex;
    line-height: 100px;
    form{
        flex: 2;
        text-align: left;
        label{
           input{
               width: 45px;
               height: 45px;
           }
           span{
           font-size: 15px;
           padding-left: 20px;

           }
        }
    }
    p{
        flex: 2;
        font-size: 30px;

    }
    button{
        width:240px;
height:98px;
background:rgba(255,64,54,1);
box-shadow:0px 1px 1px 0px rgba(255,64,54,0.2);
border-radius:0px 0px 0px 12px;
border: none;
color: #fff;

    }
}
</style>
