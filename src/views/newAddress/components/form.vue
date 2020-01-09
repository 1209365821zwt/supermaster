<template>
  <div class="main-form">
      <div>
          <span>联系人</span>
          <input type="text" placeholder="请输入联系人" v-model='formData.name'>
      </div>
       <div>
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号" v-model='formData.phone'>
      </div>
       <div>
           <select name="" id="">
               <option value="">请选择</option>
              <option value="">北京</option>
              <option value="">上海</option>
           </select>
          <input type="text" placeholder="请选择街，口" v-model='formData.location.name' @click='changelist'>
      </div>
       <div>
          <span>详细地址</span>
          <input type="text" placeholder="请输入详细地址" v-model='formData.address'>
      </div>
      <div class="btn" @click='addAddress'>
          <input type="button" value="完成">
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Form',
  data (){
    return {
      formData: {
        name: '',
        phone: '',
        location: {},
        address: '',
        defaultActive: 0

      }
    }
  },
  computed: {
    ...mapState('user', ['location'])
  },
  mounted (){
    console.log(this.location);
    console.log(this.formData.location[name])
  },
  // 缓存后created就不会再执行啦
  created (){
    this.$root.$on('selectAddress', (item) => {
      this.formData.location=item
    })
  },
  methods: {
    addAddress (){
      this.$api.address.create({
        name: this.formData.name,
        phone: this.formData.phone,
        location: this.formData.location,
        adress: this.formData.address,
        defaultActive: this.formData.defaultActive
      }).then(res => {
        console.log(res)
      })
    },
    changelist (){
    //   this.$emit('change')
      this.$router.push('/selectLocation')
    }
  }

}
</script>

<style lang='scss' scoped>
.main-form{
    width: 100%;
    height: 100%;
    div{
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        margin-bottom: 20px;
        span{
            display: inline-block;
            width: 120px;
            text-align: left;
            font-size: 30px;
        }
        input{
           width: 80%;
           height: 60px;
           padding-left: 30px;
        }
    }
    .btn{
        input{
            width: 90%;
             border: 0;
       background: #ffe;
       color: #f56;
       height: 80px;
        }

    }
}
</style>
