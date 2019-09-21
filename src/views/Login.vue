
<template>
  <div id="Login">
    <div id="Login_title">
      <div class="flex-item">
        <div class="bbb">
          <span>
            <img src="../assets/favicon.jpg" alt="favicon" />
          </span>
          <h3>智学无以后台系统</h3>
          <p>做最有态度、责任、良心的IT教育</p>
        </div>
      </div>

      <!-- 中间那一条渐变线 -->
      <div class="flex"></div>

      <div class="flex-item">
        <div class="bbb">
             <el-form
            :model="ruleForm2"
            :rules="rules2"
            status-icon
            ref="ruleForm2"
            label-position="left"
            label-width="0px"
            class="demo-ruleForm login-page"
          >
            <el-form-item prop="username">
              <el-input
                type="text"
                 style="width:80%;"
                v-model="ruleForm2.username"
                auto-complete="off"
                placeholder="用户名"
              ></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
               style="width:80%;"
                type="password"
                v-model="ruleForm2.password"
                auto-complete="off"
                placeholder="密码"
              ></el-input>
            </el-form-item>

            <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>

            <el-form-item style="width:100%;">
              <el-button
                class="lg"
                type="primary"
                style="width:80%;"
                @click="handleSubmit"
                :loading="logining"
              >登录</el-button>
            </el-form-item>

          </el-form>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: "admin",
        password: "123456"
      },
      rules2: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "enter your password", trigger: "blur" }
        ]
      },
      checked: false
    }
   
  },
    methods: {
      handleSubmit(){
        this.$router.push({path:"/"}) 
      }
      
   }
};
</script>

<style>
#Login {
  width: 84rem;
  height: 40rem;
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-size: 84rem 40rem;
}

#Login_title {
  /* 给父盒子一个弹性盒子 */
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 500px;
  height: 250px;
  background-color: #d8ecf5;
  box-shadow: 0 0 25px #cac6c6;

  /* 居中在屏幕中间 */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -200px;
}
.bbb {
  position: relative;
  top: 2rem;
}
.bbb img {
  background-color: #fff;
  border-radius: 5rem;
}
h3 {
  color: #109288;
}
p {
  color: #666;
}

/* 子盒子设置宽高 */
.flex-item {
  text-align: center;
  background-color: #d8ecf5;
  width: 49%;
  height: 100%;
}


/* 渐变 */
.flex {
  width: 2px;
  height: 100%;
  background: linear-gradient(#d8ecf5, #7ab900, #d8ecf5);
}

/* 记住密码 */
.rememberme{
margin-left: -7rem
}

/* 登录按钮变绿色 */
.lg{
  background-color: #109288
}
</style>