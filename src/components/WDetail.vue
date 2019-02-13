<template>
    <div>
        <div class="weekly-detail-item"> 
            <h1 class="weekly-detail-title">《{{ data.weeklyName }}》</h1>
            <div id="weekly-detail-wrap" >
                <div class="detail-row">
                    <span>工作内容：</span>
                    <span 
                        class="work-content" 
                        ref="workContent">
                        {{ data.workContent === "" ? "暂未填写" : data.workContent }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>解决问题：</span>
                    <span
                        class="solve-problems" 
                        ref="solveProblems">
                        {{ data.solveProblems === "" ? "暂未填写" : data.solveProblems }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>经验总结：</span>
                    <span
                        calss="summing-up-experience" 
                        ref="summingUpExperience">
                        {{ data.summingUpExperience === "" ? "暂未填写" : data.summingUpExperience }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>遗留问题：</span>
                    <span
                        class="remaining-problems" 
                        ref="remainingProblems">
                        {{ data.remainingProblems === "" ? "暂未填写" : data.remainingProblems }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>下周计划：</span>
                    <span
                        class="next-work-plan" 
                        ref="nextWorkPlan">
                        {{ data.nextWeekPlan === "" ? "暂未填写" : data.nextWeekPlan }}
                    </span>
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
    props: ['id'],
	data () {
		return {
            msg: 'Welcome to Your Vue.js App',
            isNoContent: true,
            data: {
                weeklyName: "",
                workContent: "",
                solveProblems: "",
                summingUpExperience: "",
                remainingProblems: "",
                nextWeekPlan: ""
            }
		}
    },
    created(){
        let path = API.root + API.queryOneWeekly;
        let weeklyId = this.id;
        let params = {
            weeklyId: weeklyId,
            callbackQuery: "callback",
            callbackName: "jsonpCallback"
        };
        this.$jsonp(path, params).then((data) =>{
            console.log(data);
            this.data = data.data.weekly;
        });
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weekly-detail-item{
    width: 720px;
	margin: 0;
	padding: 0;
	background-color: #ffffff;
    margin-top: 20px;
}
.weekly-detail-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5fa;
    text-align: center;
    margin: 0 20px;
    font-size: 16px;
}
.detail-row span{
    width: 100%;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
}
.detail-row{
    text-align: left;
    padding:0 20px;
    box-sizing: border-box;
    margin: 16px 0;
    overflow: hidden;
}
</style>
