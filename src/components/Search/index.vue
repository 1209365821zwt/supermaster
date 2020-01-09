<template>
  <div class="search-wrap">
      <div class="search-bar">
          <select>
              <option>北京</option>
          </select>
          <form action="">
                      <input type="text" placeholder="搜索地址" v-debounce='keyWord'>

          </form>
      </div>
      <div class="search-content">
          <ul>
              <li v-for="(item,index) in searchList" :key="index" @click="change(item)">
                  <h4>{{item.district}}</h4>
                  <p>{{item.name}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import map from '../../until/map'
export default {
  name: 'Search',
  props: {
    changeMain: {
      type: Boolean,
      default: false
    }
  },
  data (){
    return {
      keyWord: '',
      searchList: []
    }
  },
  watch: {
    keyWord (newValue){
      map.searchLocation(newValue).then((res) => {
        this.searchList=res.tips
      })
    }
  },
  methods: {
    change (item){
      this.keyWord=item.district+item.name;
      this.$emit('change', item);
      if (this.changeMain){
        this.$router.push('/main')
      } else {
        this.$router.push('/newAddress')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrap{
   display: flex;
   flex-direction: column;
    .search-bar{
        @include wh(100%,98px);
        background: #dff;
        display: flex;
        select{
          width: 200px;
          height: 40px;
          margin-top: 20px;
        }
        form{
          flex: 1;
          text-align: center;
          input{
            width: 80%;
            height: 40px;
            padding-left: 30px;
          }
        }
    }
    .search-content{
      flex: 1;
      width: 100%;
      background: #ccc;
      ul{
          width: 100%;
          height: 100%;
          li{
              height: 120px;
              border-bottom: 1px solid #f56;
              h4{
                  font-size: 30px;
                  line-height: 60px;
              }
              p{
                  font-size: 30px;
              }
          }
      }

    }
}
</style>
