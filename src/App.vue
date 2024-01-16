<template>

  <!-- 登录界面 -->
  <div class="login_container" v-if="!state.loggedIn">
    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form ref="loginForms" class="login_form" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <h2>欢迎来到USTC1010实验室人员管理系统</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" show-password />
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>


  <!-- 用户已登录界面 -->
  <div v-if="state.loggedIn">
    <div class="layout">
      <el-container v-if="state.showMenu" class="container">
        <el-aside class="aside">
          <div class="head">
            <div>
              <span>实验室人员管理系统</span>
            </div>
          </div>
          <div class="line"/>
          <el-menu
              :default-openeds="state.defaultOpen"
              background-color="#222832"
              text-color="#fff"
              :router="true"
              :default-active='state.currentPath'
          >
            <el-submenu index="1">
              <el-menu-item-group>

                <el-menu-item index="/faceCapture">
                  <el-icon>
                    <Avatar/>
                  </el-icon>
                  人脸录入
                </el-menu-item>

                <el-menu-item index="/studentInfoEdit">
                  <el-icon :size='20'>
                    <Avatar/>
                  </el-icon>
                  人员管理
                </el-menu-item>

                <el-menu-item index="/faceRecognition">
                  <el-icon>
                    <Cherry/>
                  </el-icon>
                  人脸识别
                </el-menu-item>

                <el-menu-item index="/faceStream">
                  <el-icon :size='20'>
                    <Opportunity/>
                  </el-icon>
                  视频流识别
                </el-menu-item>

                <el-menu-item index="">
                  <el-icon :size='20'>
                    <Avatar/>
                  </el-icon>
                  <el-button type="text" style="color: white;" @click="logout">
                    退出登录
                  </el-button>
                  <!-- 退出登录 -->
                </el-menu-item>


              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container class="content">
          <!--        <Header/>-->
          <div class="main">
            <router-view/>
          </div>
        </el-container>
      </el-container>
      <el-container v-else class="container">
        <router-view/>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import {onUnmounted, onMounted, reactive, ref} from 'vue'
import {NavigationGuardNext, RouteLocationNormalized, useRouter} from 'vue-router'
import {User, Avatar, Opportunity, Cherry} from '@element-plus/icons-vue'
import { ElFormItem, ElInput, ElButton, ElMessageBox } from 'element-plus';

console.log('App')
const router = useRouter()
const state = reactive<any>({
  defaultOpen: ['1'],
  showMenu: true,
  currentPath: '/',
  count: {
    number: 1
  },
  loggedIn: false,
})

const loginForms = ref()

const loading = ref(false)

const loginForm = reactive({ username: '', password: '' })

//自定义校验规则函数
const validatorUserName = (value: any, callback: any) => {
  // if (value.length >= 5) {
  //   callback()
  // } else {
  //   callback(new Error('账号长度至少五位'))
  // }
}
 
const validatorPassword = (value: any, callback: any) => {
  // if (value.length >= 6) {
  //   callback()
  // } else {
  //   callback(new Error('密码长度至少六位'))
  // }
}
 
//定义表单校验需要配置对象
const rules = {
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    // { trigger: 'change', validator: validatorUserName }
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    // { trigger: 'change', validator: validatorPassword }
  ]
}

const login = () => {
  console.log(loginForm);

  axios.post('/login', loginForm)
    .then((response: any) => {
      console.log(response.data);
      if(response.data == 100){
        ElMessageBox.alert("账号不存在！");
      }
      else if(response.data == 101){
        ElMessageBox.alert("密码错误！");
      }
      else if(response.data == 200){
        state.loggedIn = true;
      }
    });

}

const logout = () => {
  console.log("退出登录");

  ElMessageBox.alert('是否退出系统？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      // 点击确定，执行操作
      state.loggedIn = false;
    }).catch(() => {
      // 点击取消按钮，不执行任何操作
    });
}

const unwatch = router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next()
  state.currentPath = to.path
})

onUnmounted(() => {
  unwatch()
})

</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/login2.png') no-repeat;
  background-size: cover;
 
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    /* background: url('@/assets/images/login_form.png') no-repeat; */
    background-size: cover;
    padding: 40px;
 
    h1 {
      color: white;
      font-size: 40px;
    }
 
    h2 {
      font-size: 30px;
      color: white;
      margin: 20px 0px;
    }
 
    .login_btn {
      width: 100%;
    }
  }
}

.layout {
  min-height: 100vh;
  background-color: #ffffff;
}

.container {
  height: 100vh;
}

.aside {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.aside::-webkit-scrollbar {
  display: none;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.head span {
  font-size: 20px;
  color: #ffffff;
}

.line {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.el-menu {
  border-right: none !important;
}

.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.el-submenu:first-child {
  border-top: none;
}

.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}

a {
  color: #409eff;
  text-decoration: none;
}

.el-pagination {
  text-align: center;
  margin-top: 20px;
}

.el-popper__arrow {
  display: none;
}
</style>
