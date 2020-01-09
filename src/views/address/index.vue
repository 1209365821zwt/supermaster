<template>
  <div>
     <!-- <s-Header>
         <h4>
             校园超市
         </h4>
     </s-Header>
     <s-Search></s-Search> -->
   正在定位....
  </div>
</template>

<script>
import map from '../../until/map'
export default {
  name: 'Adress',
  mounted (){
    map.mapLocation().then((data) => {
      // eslint-disable-next-line no-undef
      this.$store.commit('user/setALocation', {
        name: data.formattedAddress,
        adress: data.addressComponent.township,
        district: data.addressComponent.province+data.addressComponent.district,
        position: data.position })
      console.log(data)
      const path=this.$route.query.redirect || '/main';
      this.$router.replace(path)
    }).catch(() => {
      // eslint-disable-next-line no-undef
      alert('失败,手动选择位置')
      console.log('')
    })
  }

}
</script>

<style>

</style>
