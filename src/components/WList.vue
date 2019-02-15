<template>
    <div>
        <template v-if="isNoContent">
            <NoContent />
        </template>
        <template v-else>
            <div class="weekly-list-item"  v-for="(item, index) in data" v-bind:key="{index}"> 
                <h1 class="weekly-list-title">{{ item.weeklyName }}</h1>
                <div id="weekly-list-wrap" >
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
                            {{ item.nextWeekPlan === "" ? "暂未填写" : item.nextWeekPlan }}
                        </span>
                    </div>
                    <div class="pubish-row-button">
                        <router-link class="item-detail" v-bind:to="'/weekly/detail/' + item.weeklyId">查看详情</router-link>
                        <a class="item-delete" href="javascript:void(0);" v-bind:weeklyId="item.weeklyId" v-on:click="itemDelete($event)">删除</a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import API from '../api/api.vue';
import Cookie from '../utils/cookie.vue';
import NoContent from './NoContent.vue';
export default {
    name: 'WList',
    components: { NoContent },
	data () {
		return {
            msg: 'Welcome to Your Vue.js App',
            isNoContent: true,
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
            this.isNoContent = data.data.dataList.length === 0 ? true : false;
        });
    },
    methods: {
        itemDelete(event){
            let path = API.root + API.deleteWeekly;
            let weeklyId = event.target.getAttribute('weeklyId');
            let params = {
               weeklyId: weeklyId
            };
            this.$jsonp(path, params).then((data) =>{
                if(data.data.success){
                    alert('删除成功');
                    window.location.href = "//localhost:8081/weekly";
                }else{
                    alert('删除失败');
                }
            });
        }
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
    padding-bottom: 16px;
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
.item-detail, .item-delete{
    display: inline-block;
    font-size: 12px;
    width: 80px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #007fff;
    background: #007fff;
    color: white;
    cursor: pointer;
}
.item-detail:hover, .item-delete:hover{
    border: 1px solid #0079f1;
    background: #0079f1;
}
</style>
