<template>
  <div class="register-pop" style="display:none" ref="LPop">
        <p>注册</p>
        <p>
            <input 
                type="text" 
                name="username" 
                id="username" 
                v-on:blur.prevent="userNameBlur" 
                placeholder="请输入用户名"
                ref="username"
                maxlength="10"/>
            <span class="username-tips" ref="uTips"></span>
        </p>
        <p>
            <input 
                type="password" 
                name="password" 
                id="password" 
                v-on:blur.prevent="passwordBlur" 
                placeholder="请输入密码"
                ref="password"
                maxlength="20"/>
            <span class="password-tips" ref="pTips"></span>
        </p>
        <p>
            <span class="register-button" v-on:click="register">注册</span>
            <span class="cancel-button" v-on:click="cancelPop">取消</span>
            <span class="clearfix"></span>
        </p>
  </div>
</template>

<script>
import API from '../api/api.vue';
export default {
    name: 'RegisterPop',
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
                    this.$refs.uTips.innerHTML = "*该用户名已被占用";
                }else{
                    callback.apply(this);
                }
            });
        },
        /**
         * 用户注册处理函数
         */
        register(){

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
                let path = API.root + API.insertUser;
                let params = {
                    username: oUserName,
                    password: oPassword,
                    callbackQuery: "callback",
                    callbackName: "jsonpCallback"
                };
                this.$jsonp(path, params).then((data) =>{

                    var data = API.mode === 'node' ? data : data.data ;

                    if(data.success){
                        alert("注册成功");
                        window.location.reload();
                    }else{
                        alert("注册失败");
                    }
                });
            });
        },
        /**
         * 弹出用户登录窗
         */
        startPop(){
            var oMask = document.createElement('div');
            oMask.className = 'mask';
            document.getElementsByTagName('body')[0].appendChild(oMask);
            document.getElementsByClassName('register-pop')[0].style.display = 'block';
        },
        /**
         * 取消用户登陆窗
         */
        cancelPop(){
            document.getElementsByClassName('mask')[0].remove();
            document.getElementsByClassName('register-pop')[0].style.display = 'none';
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
.register-pop{
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
.register-pop p{
    margin: 16px 0;
}
.register-pop input{
    padding: 10px;
    width: 100%;
    border: 1px solid #e9e9e9;
    outline: none;
    box-sizing: border-box;
}
.register-pop .register-button, .register-pop .cancel-button{
        display: inline-block;
        height: 35px;
        line-height: 35px;
        outline: none;
        cursor: pointer;
}
.register-pop .register-button{
    width: 130px;
    float: left;
    color: #fff;
    background-color: #007fff;
    border: 1px solid #007fff;
}
.register-pop .cancel-button{
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
