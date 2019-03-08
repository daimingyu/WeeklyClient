<template>
	<div class="weekly-publish">
        <h1 class="weekly-publish-title">添加总结</h1>
		<div id="weekly-publish-wrap">
            <div class="publish-row-title">
                <span>文章标题：</span>
                <textarea 
                    maxlength="20" 
                    name="weekly-name"
                    ref="weeklyName"
                    placeholder="请输入总结标题，限20个字符">
                </textarea>
            </div>
            <div class="publish-row">
                <span>工作内容：</span>
                <textarea 
                    maxlength="500" 
                    name="work-content" 
                    ref="workContent" 
                    placeholder="请输入工作内容（总结上期工作的成果或内容），限500个字符">
                </textarea>
            </div>
            <div class="publish-row">
                <span>解决问题：</span>
                <textarea
                    maxlength="500" 
                    name="solve-problems" 
                    ref="solveProblems"
                    placeholder="请输入解决问题（突出工作中解决的实际困难），限500个字符">
                </textarea>
            </div>
            <div class="publish-row">
                <span>经验总结：</span>
                <textarea 
                    maxlength="500" 
                    name="summing-up-experience" 
                    ref="summingUpExperience" 
                    placeholder="请输入经验总结（总结经验教训），限500个字符">
                </textarea>
            </div>
            <div class="publish-row">
                <span>遗留问题：</span>
                <textarea 
                    maxlength="500" 
                    name="remaining-problems" 
                    ref="remainingProblems"
                    placeholder="请输入遗留问题（遗留问题的解决办法及具体处理时间），限500个字符">
                </textarea>
            </div>
            <div class="publish-row">
                <span>下周计划：</span>
                <textarea 
                    maxlength="500" 
                    name="next-week-plan" 
                    ref="nextWeekPlan"
                    placeholder="请输入下周计划（下周工作开展思路），限500个字符">
                </textarea>
            </div>
            <div class="pubish-row-button">
                <button class="publish-save" v-on:click="saveWeekly">保存</button>
            </div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import API from '../api/api.vue';
import Cookie from '../utils/cookie.vue';
export default {
    name: 'WPublish',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
    },
    methods: {
        saveWeekly(){
            let path = API.root + API.insertWeekly;
            if(this.$refs.weeklyName.value.trim() === ''){
                alert('名称不能为空');
                return;
            }
            let params = {
                weeklyName: encodeURIComponent(this.$refs.weeklyName.value.trim()),
                workContent: encodeURIComponent(this.$refs.workContent.value.trim()),
                solveProblems: encodeURIComponent(this.$refs.solveProblems.value.trim()),
                summingUpExperience: encodeURIComponent(this.$refs.summingUpExperience.value.trim()),
                remainingProblems: encodeURIComponent(this.$refs.remainingProblems.value.trim()),
                nextWeekPlan: encodeURIComponent(this.$refs.nextWeekPlan.value.trim()),
                userId: JSON.parse(Cookie.get("PPU")).userId
            }
            console.log(params,path);
            $.ajax({
                type: 'POST',
                url: path,
                data: params,
                dataType: 'json',
                success: function(data){

                    var data = API.mode === 'node' ? data : data.data ;
                    
                    if(data.success){
                        alert("保存成功");
                        window.location.href = '//' + window.location.href.split('/')[2] + "/weekly";
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weekly-publish{
    width: 720px;
	margin-top: 20px;
	padding: 0;
	background-color: #ffffff;
    padding-bottom: 16px;
}
.weekly-publish-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5fa;
    text-align: center;
    margin: 0 20px;
    font-size: 16px;
}
.publish-row span{
    display: inline-block;
    height: 112px;
    vertical-align: top;
    font-size: 14px;
}
.publish-row textarea{
    width: 593px;
    height: 112px;
    padding: 5px;
    background: #f9f9f9;
    resize: none;
    overflow: auto;
    border: 1px solid #ccc;
}
.publish-row-title span{
    display: inline-block;
    height: 25px;
    line-height: 25px;
    vertical-align: top;
    font-size: 14px;
}
.publish-row-title textarea{
    width: 593px;
    height: 25px;
    line-height: 25px;
    padding: 5px;
    background: #f9f9f9;
    resize: none;
    overflow: auto;
    border: 1px solid #ccc;
}
.publish-row, .publish-row-title{
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    margin: 16px 0;
}
.publish-save{
    font-size: 14px;
    width: 100px;
    height: 35px;
    text-align: center;
    border: 1px solid #007fff;
    background: #007fff;
    color: white;
    cursor: pointer;
}
.publish-save:hover{
    border: 1px solid #0079f1;
    background: #0079f1;

}
</style>
