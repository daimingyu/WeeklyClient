<template>
	<div class="navigation">
		<div class="guide-login">
			<p><span v-on:click="showLoginPop">登录</span> · <span>注册</span></p>
		</div>
		<ul class="navigation-wrap">
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/weekly">周报</router-link></li>
			<li><router-link to="/draft">草稿</router-link></li>
			<li><router-link to="/profile">资料</router-link></li>
		</ul>
		<LoginPop ref="loginPop"/>
	</div>
</template>
<script>
import LoginPop from '../pop/LoginPop';
export default {
	name: 'Navigation',
	components: { LoginPop },
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {
		showLoginPop () {
			this.$refs.loginPop.startPop();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation{
	width: 240px;
	float: left;
	margin: 0;
	padding: 0;
	margin-top: 20px;
}
.guide-login{
	width: 100%;
	height: 84px;
	text-align: center;
	line-height: 84px;
	background: black;
}
.guide-login p{
	color: #ffffff;
}
.guide-login p span{
	cursor: pointer;
}
.navigation-wrap{
	margin-top: 20px;
	background-color: #ffffff;
}
.navigation-wrap li{
	width: 100%;
	height: 50px;
	line-height: 50px;
	cursor: pointer;
}
.navigation-wrap li a{
	display: inline-block;
	width: 100%;
	height: 50px;
}
.navigation-wrap li:hover{
	background-color: #eff0f3;
}
</style>
