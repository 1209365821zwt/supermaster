<template>

  <div>
       <s-Search @change='change' :changeMain='false'></s-Search>
  </div>
</template>

<script>
export default {
  name: 'SelectLocation',
  methods: {
    change (item){
      this.$root.$emit('selectAddress', item)
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
