<template>
  <div class="login-pop" style="display:none">
        <p>登录</p>
        <p><input type="text" placeholder="请输入用户名"/></p>
        <p><input type="password" placeholder="请输入密码"/></p>
        <p>
            <span class="login-button">登录</span>
            <span class="cancel-button" v-on:click="cancelPop">取消</span>
            <span class="clearfix"></span>
        </p>
  </div>
</template>

<script>
export default {
  name: 'LoginPop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      startPop(){
            var oMask = document.createElement('div');
            oMask.className = 'mask';
            document.getElementsByTagName('body')[0].appendChild(oMask);
            document.getElementsByClassName('login-pop')[0].style.display = 'block';
      },
      cancelPop(){
            document.getElementsByClassName('mask')[0].remove();
            document.getElementsByClassName('login-pop')[0].style.display = 'none';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-pop{
    width: 318px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 16px;
    box-sizing: border-box;
    transform: translate(-50%,-50%);
    z-index: 2;
	border-radius: 2px;
}
.login-pop p{
    margin: 16px 0;
}
.login-pop input{
    padding: 10px;
    width: 100%;
    border: 1px solid #e9e9e9;
    outline: none;
    box-sizing: border-box;
}
.login-pop .login-button, .login-pop .cancel-button{
        display: inline-block;
        height: 35px;
        line-height: 35px;
        outline: none;
        cursor: pointer;
}
.login-pop .login-button{
    width: 130px;
    float: left;
    color: #fff;
    background-color: #007fff;
    border: 1px solid #007fff;
}
.login-pop .cancel-button{
    width: 130px;
    float: right;
    color: #007fff;
    border: 1px solid #007fff;
}
</style>
