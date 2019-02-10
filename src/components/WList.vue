<template>
    <div>
        <div class="weekly-list-item"  v-for="(item, index) in data" v-bind:key="{index}">
                <h1 class="weekly-list-title">《{{ item.weeklyName }}》</h1>
                <div id="weekly-list-wrap">
                    <div class="list-row">
                        <span>工作内容：</span>
                        <span 
                            class="work-content" 
                            ref="workContent">
                            {{ item.workContent === "" ? "暂未填写" : item.workContent }}
                        </span>
                    </div>
                    <div class="list-row">
                        <span>解决问题：</span>
                        <span
                            class="solve-problems" 
                            ref="solveProblems">
                            {{ item.solveProblems === "" ? "暂未填写" : item.solveProblems }}
                        </span>
                    </div>
                    <div class="list-row">
                        <span>经验总结：</span>
                        <span
                            calss="summing-up-experience" 
                            ref="summingUpExperience">
                            {{ item.summingUpExperience === "" ? "暂未填写" : item.summingUpExperience }}
                        </span>
                    </div>
                    <div class="list-row">
                        <span>遗留问题：</span>
                        <span
                            class="remaining-problems" 
                            ref="remainingProblems">
                            {{ item.remainingProblems === "" ? "暂未填写" : item.remainingProblems }}
                        </span>
                    </div>
                    <div class="list-row">
                        <span>下周计划：</span>
                        <span
                            class="next-work-plan" 
                            ref="nextWorkPlan">
                            {{ item.nextWorkPlan === "" ? "暂未填写" : item.nextWorkPlan }}
                        </span>
                    </div>
                    <div class="pubish-row-button">
                        <button class="item-detail">查看详情</button>
                        <button class="item-update">修改</button>
                        <button class="item-delete">删除</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import API from '../api/api.vue';
import Cookie from '../utils/cookie.vue';
export default {
    name: 'WList',
	data () {
		return {
            msg: 'Welcome to Your Vue.js App',
            data: []
		}
    },
    created(){
        let path = API.root + API.queryAllWeeklyByUserId;
        let userId = JSON.parse(Cookie.get('PPU')).userId;
        let params = {
            userId: userId,
            callbackQuery: "callback",
            callbackName: "jsonpCallback"
        };
        this.$jsonp(path, params).then((data) =>{
            this.data = data.data.dataList;
        });
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weekly-list-item{
    width: 720px;
	margin: 0;
	padding: 0;
	background-color: #ffffff;
    margin-top: 20px;
}
.weekly-list-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5fa;
    text-align: center;
    margin: 0 20px;
    font-size: 16px;
}
.list-row span{
    width: 100%;
    display: inline-block;
    height: 30px;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list-row{
    text-align: left;
    padding:0 20px;
    box-sizing: border-box;
    margin: 16px 0;
}
.pubish-row-button{
    margin: 16px 0;
}
</style>
