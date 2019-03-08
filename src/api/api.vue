<script>
// const API =  {
//     'mode': 'java',
//     //根目录
//     'root': '//10.252.189.116:8080/WeeklyServer',
//     //检查用户登录是否有效
//     'checkUserLogin': '/CheckUserLogin',
//     //检查用户是否存在
//     'checkHasUser': '/CheckHasUser',
//     //创建新用户
//     'insertUser': '/InsertUser',
//     //创建新周总结
//     'insertWeekly': '/InsertWeekly',
//     //查询所有属于该用户的周总结
//     'queryAllWeeklyByUserId': '/QueryAllWeeklyByUserId',
//     //删除一个周总结
//     'deleteWeekly': '/DeleteWeekly',
//     //查询一个周总结
//     'queryOneWeekly': '/QueryOneWeekly',
//     //更新一个周总结
//     'updateOneWeekly': '/UpdateOneWeekly',
//     //更新用户名
//     'updateUserName': '/UpdateUserName',
//     //更新用户密码
//     'updateUserPass': '/UpdateUserPass'
// }

const API =  {
    'mode': 'node',
    //根目录
    'root': '//10.252.189.116:3000',
    //检查用户登录是否有效
    'checkUserLogin': '/users/CheckUserLogin',
    //检查用户是否存在
    'checkHasUser': '/users/CheckHasUser',
    //创建新用户
    'insertUser': '/users/InsertUser',
    //创建新周总结
    'insertWeekly': '/weekly/InsertWeekly',
    //查询所有属于该用户的周总结
    'queryAllWeeklyByUserId': '/weekly/QueryAllWeeklyByUserId',
    //删除一个周总结
    'deleteWeekly': '/weekly/DeleteWeekly',
    //查询一个周总结
    'queryOneWeekly': '/weekly/QueryOneWeekly',
    //更新一个周总结
    'updateOneWeekly': '/weekly/UpdateOneWeekly',
    //更新用户名
    'updateUserName': '/users/UpdateUserName',
    //更新用户密码
    'updateUserPass': '/users/UpdateUserPass'
}

export default API;
</script>