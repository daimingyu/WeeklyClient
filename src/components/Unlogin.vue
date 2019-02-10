<template>
  <div class="un-login">
      <p>您还未登录，<span v-on:click="showLoginPop">去登陆</span></p>
      <LoginPop ref="loginPop"/>
  </div>
</template>

<script>
import LoginPop from '../pop/LoginPop';
export default {
  name: 'Unlogin',
  components: { LoginPop },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    /**
		 * 展示登陆弹窗
		 */
		showLoginPop () {
      console.log(this.$refs);
			this.$refs.loginPop.startPop();
		},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.un-login{
    width: 720px;
    height: 500px;
    text-align: center;
    line-height: 500px;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    margin-top: 20px;
}
.un-login p span{
  color: #007fff;
  cursor: pointer;
}
</style>
