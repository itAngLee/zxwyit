<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">登录页面</router-link> 
      <router-link to="/Login">主页</router-link> -->
      <!-- <router-link to="">管理学生</router-link> |
      <router-link to="">老师管理</router-link>
      <router-link to="">班级管理</router-link> |
      <router-link to="">修改密码</router-link>
      <router-link to="">制作试卷</router-link> |
      <router-link to="">安排测试</router-link>
      <router-link to="">查看成绩</router-link> |
      <router-link to="">批阅试卷</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
      
    }
</script>>


<style lang="less">
html,body,#app{
  height: 100%;
  margin: 0;
  padding: 0;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
