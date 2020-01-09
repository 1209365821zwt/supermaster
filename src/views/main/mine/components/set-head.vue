<template>
  <div class="main-head">
      <dl>
          <dt>
              <h2>我的昵称</h2>
              <p>开启美好的一天...</p>
          </dt>
          <dd>
              <img src="" alt="">
          </dd>
      </dl>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-head{
    width: 100%;
   dl{
       width: 100%;
       display: flex;
       margin-top:60px;
       dt{
           flex: 1;
         h2{
           width:160px;
height:56px;
font-size:40px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:56px;
-webkit-text-stroke:1px rgba(255,255,255,1);
// text-stroke:1px rgba(255,255,255,1)
         }
         p{
             width:192px;
height:30px;
font-size:24px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:40px;
         }
       }
       dd{
           width: 200px;
           height: 200px;
           text-align: center;
           img{
               width: 100px;
               height: 100px;
               border: 1px solid #ccc;
           }
       }
   }
}
</style>
