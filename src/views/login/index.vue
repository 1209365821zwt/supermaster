<template>
  <div>
      <s-Header>
                   <h4>手机登录</h4>
      </s-Header>
      <s-form>
          <s-form-item type="text" placeholder="输入手机号码" v-model="phone">
            <button @click="sendCard" :disabled="disabled" class="btn" v-if="downTime==0">发送验证码</button>
            <button @click="sendCard" :disabled="disabled" class="btn" v-else>{{downTime}}s后发送验证码</button>
          </s-form-item>
          <s-form-item type="text" placeholder="输入验证码" v-model="number"></s-form-item>

      </s-form>
      <input type="button" class="ipt" value="登录" @click="sendMsg">
  </div>
</template>

<script>
export default {
  data (){
    return {
      phone: '',
      number: '',
      downTime: 0,
      setInterval: null
    }
  },
  computed: {
    disabled (){
      const reg=/^1[34578]\d{9}$/;
      return !reg.test(this.phone)
    }
  },
  methods: {
    sendCard (){
      this.$api.user.sendCode({
        phone: this.phone
      }).then(res => {
        console.log(res)
      })
      this.setTime()
    },
    async sendMsg (){
      // console.log(this.number, this.number)
      // await this.$api.user.login({
      //   phone: this.phone,
      //   msg_code: this.number
      // })
      // await this.$api.user.info()
      await this.$store.dispatch('user/login', {
        phone: this.phone,
        msg_code: this.number
      })
      const path=this.$route.query.redirect || '/main';
      this.$router.replace(path)
    },
    setTime (){
      this.downTime=20;
      this.setInterval=setInterval(() => {
        this.downTime-=1;
        if (this.downTime === 0){
          clearInterval(this.setInterval)
        }
      }, 1000)
    }

  }
}
</script>

<style lang="scss" scoped>
.ipt{
    width: 750px;
    height: 98px;
    border: 0;
    background: #f90;
    color: #fff;
    font-size: 30px;
    margin-top: 30px;
}
.btn{
  background: #f90;
  border: none;
  color: #fff;
}
</style>
