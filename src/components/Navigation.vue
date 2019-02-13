<template>
	<div class="navigation">
		<div class="guide-login">
			<template v-if="hasLogin">
				<p><span>{{ username }}</span> · <span v-on:click="logout">退出</span></p>
			</template> 
			<template v-else>
				<p><span v-on:click="showLoginPop">登录</span> · <span v-on:click="showRegisterPop">注册</span></p>
			</template> 
		</div>
		<ul class="navigation-wrap">
			<li v-for="(item, index) in tabContent" v-bind:key="{index}" v-bind:class="{active:index == curTab}" v-on:click="tabClick(index)">
				<router-link v-bind:to="item.path">
					<i v-bind:class="item.iconfont"></i>
					<span>{{ item.name }}</span>
				</router-link>
			</li>
		</ul>
		<LoginPop ref="loginPop"/>
		<RegisterPop ref="registerPop"/>
	</div>
</template>
<script>
import LoginPop from '../pop/LoginPop';
import RegisterPop from '../pop/RegisterPop';
import Cookie from '../utils/cookie';
export default {
	name: 'Navigation',
	components: { LoginPop, RegisterPop },
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			hasLogin: false,
			username: "用户名",
			curTab: 0,
			tabContent: [
				{
					path: '/',
					iconfont: 'iconfont icon-home',
					name: '首页'
				},
				{
					path: '/weekly',
					iconfont: 'iconfont icon-weekly',
					name: '我的总结'
				},
				{
					path: '/profile',
					iconfont: 'iconfont icon-shezhi',
					name: '个人中心'
				}
			]
		}
	},
	created(){
		//获取登陆态
		let PPU = Cookie.get('PPU');
		//设置登录状态
		if(PPU){
			this.hasLogin = true;
			this.username =  JSON.parse(PPU).userName;
		}else{
			this.hasLogin = false;
		}
		//设置导航状态
		let curPage = window.location.href.split('/')[3];
		console.log(curPage);
		switch(curPage){
			case 'weekly':
				this.curTab = 1;
				break;
			case 'profile':
				this.curTab = 2;
				break;
			default:
				this.curTab = 0;
		}
	},
	methods: {
		/**
		 * 展示登陆弹窗
		 */
		showLoginPop () {
			this.$refs.loginPop.startPop();
		},
		/**
		 * 展示注册弹窗
		 */
		showRegisterPop () {
			this.$refs.registerPop.startPop();
		},
		/**
		 * 退出
		 */
		logout(){
			Cookie.del('PPU');
			window.location.reload();
		},
		tabClick(index){
			console.log(index);
			this.curTab = index;
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
	box-sizing: border-box;
	border-left: 1px solid transparent;
}
.navigation-wrap li span{
	font-size: 14px;
}
.navigation-wrap li a{
	display: inline-block;
	width: 100%;
	height: 50px;
	color: #000000;
	text-align: left;
	padding-left: 16px;
	box-sizing: border-box;
}
.navigation-wrap li:hover{
	background-color: #eff0f3;
}
.active{
	border-left: 1px solid #007fff!important;
	background-color: #eff0f3;
}
</style>
