<template>
    <div>
        <div class="weekly-detail-item" ref="item" v-bind:weeklyId="data.weeklyId"> 
            <h1 class="weekly-detail-title" ref="weeklyName">{{ data.weeklyName }}</h1>
            <div id="weekly-detail-wrap" >
                <div class="detail-row">
                    <span>工作内容<a href="javascript:void(0)" v-on:click="change($event)" fun="0">修改</a></span>
                    <span 
                        class="work-content" 
                        ref="workContent">
                        {{ data.workContent === "" ? "暂未填写" : data.workContent }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>解决问题<a href="javascript:void(0)" v-on:click="change($event)" fun="0">修改</a></span>
                    <span
                        class="solve-problems" 
                        ref="solveProblems">
                        {{ data.solveProblems === "" ? "暂未填写" : data.solveProblems }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>经验总结<a href="javascript:void(0)" v-on:click="change($event)" fun="0">修改</a></span>
                    <span
                        calss="summing-up-experience" 
                        ref="summingUpExperience">
                        {{ data.summingUpExperience === "" ? "暂未填写" : data.summingUpExperience }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>遗留问题<a href="javascript:void(0)" v-on:click="change($event)" fun="0">修改</a></span>
                    <span
                        class="remaining-problems" 
                        ref="remainingProblems">
                        {{ data.remainingProblems === "" ? "暂未填写" : data.remainingProblems }}
                    </span>
                </div>
                <div class="detail-row">
                    <span>下周计划<a href="javascript:void(0)" v-on:click="change($event)" fun="0">修改</a></span>
                    <span
                        class="next-work-plan" 
                        ref="nextWeekPlan">
                        {{ data.nextWeekPlan === "" ? "暂未填写" : data.nextWeekPlan }}
                    </span>
                </div>
                <div class="pubish-row-button">
                    <button class="item-save" v-on:click="save" v-bind:weeklyId="data.weeklyId">保存</button>
                    <button class="back" v-on:click="back">返回</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../api/api.vue';
import $ from 'jquery';
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
            
            var data = API.mode === 'node' ? data : data.data ;

            this.data = data.weekly;
        });
    },
    methods: {
        change(event){
            let type = event.target.getAttribute('fun');
            switch(type){
                case '0':
                    this.showTexarea(event);
                    break;
                case '1':
                    this.hideTextarea(event);
                    break;
            }
        },
        showTexarea(){
            event.target.setAttribute('fun','1');
            event.target.innerText = '完成';
            let oSpan = event.target.parentNode.nextElementSibling;
            let value = oSpan.innerText;
            oSpan.innerHTML = '<textarea maxlength="500" style="width:100%;height:112px;padding:5px;box-sizing:border-box;background:#f9f9f9;resize:none;overflow:auto;border:1px solid #ccc;">'+ value +'</textarea>';
        },
        hideTextarea(){
            event.target.setAttribute('fun','0');
            event.target.innerText = '修改';
            let oSpan = event.target.parentNode.nextElementSibling;
            let value = oSpan.getElementsByTagName('textarea')[0].value;
            oSpan.innerHTML = '<span class="work-content" ref="workContent">'+ (value===""?"暂未填写":value) +'</span>';
        },
        save(){
            let path = API.root + API.updateOneWeekly;
            let params = {
                weeklyName: encodeURIComponent(this.$refs.weeklyName.innerText.trim()),
                workContent: encodeURIComponent(this.$refs.workContent.innerText.trim()),
                solveProblems: encodeURIComponent(this.$refs.solveProblems.innerText.trim()),
                summingUpExperience: encodeURIComponent(this.$refs.summingUpExperience.innerText.trim()),
                remainingProblems: encodeURIComponent(this.$refs.remainingProblems.innerText.trim()),
                nextWeekPlan: encodeURIComponent(this.$refs.nextWeekPlan.innerText.trim()),
                userId: JSON.parse(Cookie.get("PPU")).userId,
                weeklyId: this.$refs.item.getAttribute('weeklyId'),
                callbackQuery: "callback",
                callbackName: "jsonpCallback"
            }
            console.log(params,path);
            $.ajax({
                type: 'POST',
                url: path,
                data: params,
                dataType: 'json',
                success: function(data){
                    console.log(data);

                    var data = API.mode === 'node' ? data : data.data ;

                    if(data.success){
                        alert("保存成功");
                        window.location.href =  '//' + window.location.href.split('/')[2] + "/weekly";
                    }else{
                        alert("保存失败");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    console.log(XMLHttpRequest);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        },
        back(){
            this.$router.back(-1);
        }
    }
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
    padding-bottom: 16px;
}
.weekly-detail-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5fa;
    text-align: center;
    margin: 0 20px;
    font-size: 16px;
}
.detail-row span:nth-child(1){
    width: 100%;
    display: inline-block;
    height: 30px;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.detail-row span:nth-child(1) a{
    margin-left: 5px;
    font-size: 14px;
}
.detail-row span:nth-child(2){
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
.item-save, .back{
    font-size: 12px;
    width: 80px;
    height: 28px;
    text-align: center;
    border: 1px solid #007fff;
    background: #007fff;
    color: white;
    cursor: pointer;
}

.item-save:hover, .back:hover{
    border: 1px solid #0079f1;
    background: #0079f1;
}
</style>
