<template>
  <div class="login-pop" style="display:none" ref="LPop">
        <p>登录</p>
        <p>
            <input 
                type="text" 
                name="username" 
                id="username" 
                v-on:blur.prevent="userNameBlur" 
                placeholder="请输入用户名"
                ref="username"/>
            <span class="username-tips" ref="uTips"></span>
        </p>
        <p>
            <input 
                type="password" 
                name="password" 
                id="password" 
                v-on:blur.prevent="passwordBlur" 
                placeholder="请输入密码"
                ref="password"/>
            <span class="password-tips" ref="pTips"></span>
        </p>
        <p>
            <span class="login-button" v-on:click="login">登录</span>
            <span class="cancel-button" v-on:click="cancelPop">取消</span>
            <span class="clearfix"></span>
        </p>
  </div>
</template>

<script>
import API from '../api/api.vue';
import Cookie from '../utils/cookie.vue';
export default {
    name: 'LoginPop',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        /**
         * 用户名input失去焦点时事件处理函数
         */
        userNameBlur(){
            if(this.$refs.username.value.trim() !== ""){
                this.$refs.uTips.innerHTML = '';
            }else{
                this.$refs.uTips.innerHTML = "*请输入用户名";
            }
        },
        /**
         * 密码input失去焦点时事件处理函数
         */
        passwordBlur(){
            if(this.$refs.password.value.trim() !== ""){
                this.$refs.pTips.innerHTML = '';
            }else{
                this.$refs.pTips.innerHTML = "*请输入密码";
            }
        },
        /**
         * 判断用户名是否存在
         * @param [username] 用户名
         * @param [callback] 当用户名存在时的回调函数
         */
        checkHasUser(username, callback){
            let path = API.root + API.checkHasUser;
            let params = {
                username: username,
                callbackQuery: "callback",
                callbackName: "jsonpCallback"
            };
            this.$jsonp(path, params).then((data) =>{

                var data = API.mode === 'node' ? data : data.data ;

                if(data.hasUser){
                    callback.apply(this);
                }else{
                    this.$refs.uTips.innerHTML = "*不存在该用户名";
                }
            });
        },
        /**
         * 用户登录处理函数
         */
        login(){

            let oUserName = encodeURIComponent(this.$refs.username.value.trim());
            let oPassword = this.$refs.password.value.trim();

            if(oUserName === ""){
                this.$refs.uTips.innerHTML = "*请输入用户名";
                return;
            }

            if(oPassword === ""){
                this.$refs.pTips.innerHTML = "*请输入密码";
                return;
            }

            this.checkHasUser(oUserName, function(){
                let path = API.root + API.checkUserLogin;
                let params = {
                    username: oUserName,
                    password: oPassword,
                    callbackQuery: "callback",
                    callbackName: "jsonpCallback"
                };
                this.$jsonp(path, params).then((data) =>{

                    if(data.data.loginFlag){
                        alert("登陆成功");
                        this.setCookie(data.data);
                        window.location.reload();
                    }else{
                        this.$refs.pTips.innerHTML = "*密码错误";
                    }
                });
            });
        },
        /**
         * 将用户名写入cookie
         */
        setCookie(obj){
            Cookie.set("PPU", JSON.stringify(obj));
        },
        /**
         * 弹出用户登录窗
         */
        startPop(){
            var oMask = document.createElement('div');
            oMask.className = 'mask';
            document.getElementsByTagName('body')[0].appendChild(oMask);
            document.getElementsByClassName('login-pop')[0].style.display = 'block';
        },
        /**
         * 取消用户登陆窗
         */
        cancelPop(){
            document.getElementsByClassName('mask')[0].remove();
            document.getElementsByClassName('login-pop')[0].style.display = 'none';
            this.clearPopContent();
        },
        /**
         * 重置输入框
         */
        clearPopContent(){
            this.$refs.username.value = "";
            this.$refs.password.value = "";
            this.$refs.pTips.innerHTML = "";
            this.$refs.uTips.innerHTML = "";
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
.username-tips, .password-tips{
    display: block;
    text-align: right;
    font-size: 12px;
    color: red;
    margin-top: 5px;
}
</style>
