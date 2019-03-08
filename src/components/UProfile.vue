<template>
  <div class="user-profile">
        <h1 class="user-profile-title">个人资料</h1>
        <div id="user-profile-wrap">
            <div class="user-profile-usernqme">
                <label>用户名：</label>
                <input type="text" required placeholder="请输入新用户名" ref="userName" v-bind:value="username"/>
                <span class="update-username-ok" v-on:click="updateName">确认修改</span>
            </div>
            <div class="user-profile-password">
                <div class="update-password-wrap">
                    <p><label>旧密码：</label><input type="password" ref="old" placeholder="请输入旧密码"/></p>
                    <p><label>新密码：</label><input type="password" ref="new" placeholder="请输入新密码"></p>
                    <p><label>确认密码：</label><input type="password" ref="confirm" placeholder="请确认新密码"/></p>
                </div>
                <span class="update-password-ok" v-on:click="updatePassword">确认修改</span>
            </div>
        </div>
  </div>
</template>

<script>
import Cookie from '../utils/cookie.vue';
import API from '../api/api.vue';
export default {
  name: 'UProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: JSON.parse(Cookie.get("PPU")).userName 
    }
  },
  methods: {
        updateName(){
            let path = API.root + API.updateUserName;
            let userId = JSON.parse(Cookie.get('PPU')).userId;
            let userName = encodeURIComponent(this.$refs.userName.value.trim());
            let params = {
                userid: userId,
                username: userName,
                callbackQuery: "callback",
                callbackName: "jsonpCallback"
            };
            this.$jsonp(path, params).then((data) =>{

                var data = API.mode === 'node' ? data : data.data ;

                if(data.success){
                    let obj = JSON.parse(Cookie.get('PPU'));
                    obj.userName = this.$refs.userName.value.trim();
                    Cookie.set('PPU', JSON.stringify(obj));
                    alert('修改姓名成功');
                    window.location.reload();
                }else{
                    alert('修改姓名失败');
                }
                console.log(data);
            });
        },
        checkUserPass(username, password, callback){
            let path = API.root + API.checkUserLogin;
            let params = {
                username: username,
                password: password,
                callbackQuery: "callback",
                callbackName: "jsonpCallback"
            };
            this.$jsonp(path, params).then((data) =>{

                if(data.data.loginFlag){
                    callback.apply(this);
                }else{
                    alert('旧密码输入错误');
                }
            });
        },
        updatePassword(){
            let oldPass = this.$refs.old.value.trim();
            let newPass = this.$refs.new.value.trim();
            let confirm = this.$refs.confirm.value.trim();
            let userName = encodeURIComponent(JSON.parse(Cookie.get("PPU")).userName);
            let userId = JSON.parse(Cookie.get("PPU")).userId;

            if(oldPass === ""){
                alert("旧密码不能为空");
                return ;
            }

            if(newPass === ""){
                alert("新密码不能为空");
                return ;
            }

            if(confirm === ""){
                alert("请重新确认密码");
                return ;
            }

            console.log(oldPass, newPass, confirm);
            this.checkUserPass(userName, oldPass, () => {
                if(newPass !== confirm){
                    alert('新密码不一样');
                    return;
                }

                if(newPass === oldPass){
                    alert('新密码不能与旧密码一样');
                    return;
                }

                let path = API.root + API.updateUserPass;
                let params = {
                    userId: userId,
                    password: newPass,
                    callbackQuery: "callback",
                    callbackName: "jsonpCallback"
                };
                this.$jsonp(path, params).then((data) =>{

                    var data = API.mode === 'node' ? data : data.data ;

                    if(data.success){
                        alert('修改成功');
                    }else{
                        alert('修改失败');
                    }
                });
            });
            
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-profile{
    width: 720px;
    height: 500px;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    margin-top: 20px;
}
.user-profile-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5fa;
    text-align: center;
    margin: 0 20px;
    font-size: 16px;
}
.user-profile-usernqme, .user-profile-password{
    text-align: left;
}
.user-profile-usernqme, .user-profile-password{
    border: 1px solid #f5f5fa;
    padding: 16px;
    box-sizing: border-box;
    margin: 16px 20px 0;
}
.user-profile-usernqme label{
    margin-left: 16px;
}
.update-password-wrap{
    display: inline-block;
}
.update-password-wrap p:nth-of-type(1){
    padding-left: 16px;
    margin-bottom: 16px;
}

.update-password-wrap p:nth-of-type(2){
    padding-left: 16px;
    margin-bottom: 16px;
}
.update-password-wrap input{
    margin-left: 3px;
}
.update-username-ok,.update-password-ok{
    float: right;
    vertical-align: middle;
    cursor: pointer;
}
</style>
