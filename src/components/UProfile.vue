<template>
  <div class="user-profile">
        <h1 class="user-profile-title">个人资料</h1>
        <div id="user-profile-wrap">
            <div class="user-profile-usernqme">
                <span>用户名：</span>
                <input type="text" required placeholder="请输入新用户名" ref="userName" v-bind:value="username"/>
                <span class="update-username-ok" v-on:click="updateName">确认修改</span>
            </div>
            <div class="user-profile-password">
                <div class="update-password-wrap">
                    <p><label>旧密码：</label><input type="password" placeholder="请输入旧密码"/></p>
                    <p><label>新密码：</label><input type="password" placeholder="请输入新密码"></p>
                    <p><label>确认密码：</label><input type="password" placeholder="请确认新密码"/></p>
                </div>
                <span class="update-password-ok">确认修改</span>
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
                if(data.data.success){
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
.update-password-wrap{
    display: inline-block;
}
.update-username-ok,.update-password-ok{
    float: right;
    vertical-align: middle;
    cursor: pointer;
}
</style>
