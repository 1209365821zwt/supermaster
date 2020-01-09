<template>
  <div class="main-search">
      <form action="">
         <img src="../../../../assets/icon/search.png" alt=""> <input type="text" placeholder="搜索校园超市商品">
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-search{
    width: 100%;
    height: 98px;
    form{
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            width: 45px;
            height: 45px;
            position: absolute;
            left: 50px;
            top: 25px;

        }
        input{
            width:694px;
     height:64px;
background:rgba(246,246,246,1);
border-radius:32px;
border: none;
padding-left: 78px;
font-size: 12px;
        }
    }
}
</style>
