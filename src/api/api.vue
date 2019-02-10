<script>
const API =  {
    //根目录
    'root': '//192.168.0.109:8080/WeeklyServer',
    //检查用户登录是否有效
    'checkUserLogin': '/CheckUserLogin',
    //检查用户是否存在
    'checkHasUser': '/CheckHasUser',
    //创建新用户
    'insertUser': '/InsertUser',
    //创建新周总结
    'insertWeekly': '/InsertWeekly',
    //查询所有属于该用户的周总结
    'queryAllWeeklyByUserId': '/QueryAllWeeklyByUserId'
}
export default API;
</script>