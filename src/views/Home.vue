<template>
  <div id="Home" style="height:100%">
    <el-container style="height:100%">
      <el-aside width="aside">
        <el-menu
          style="height:100%"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          router
        >
          <!-- logo -->
          <div class="qwe">
            <img src="../assets/favicon.jpg" alt="favicon" width="50px" />
            <span v-show="!isCollapse">
              <b>智学无忧教育</b>
            </span>
          </div>

          <el-submenu
            :index="++index+''"
            v-for="(item,index) in nav"
            :key="index"
            :label="item.title"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="(aa,index) in item.skt" :key="index">
              <el-menu-item :index="aa.path" @click="addTab(aa.name)">{{aa.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 弄了个循环报了一个错 不知道什么原因 -->
          <!-- <el-submenu index="2" v-for="(value,index) in essenti" :key="index" :label="value.basics">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">{{value.basics}}</span>
            </template>

            <el-menu-item-group v-for="(bb,index) in value.grade" :key="index">
              <el-menu-item :index="bb.path" @click="addTab(bb.name)">{{bb.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding: 0px;">
          <div class="sanjiao">
            <el-checkbox-button v-model="isCollapse">
              <i :class="isCollapse?'el-icon-caret-left':'el-icon-caret-right'"></i>
            </el-checkbox-button>
          </div>

          <div class="caidan">
            <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
              <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >{{item.content}}</el-tab-pane>
            </el-tabs>
          </div>

          <div class="toxiang">
            <span class="el-icon-user-solid">退出</span>
            <span class="toxian">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </span>
          </div>
        </el-header>
        <el-main>
          <!-- 对应要跳楼的内容 容器 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          url: "11111111111111"
        }
      ],
      tabIndex: 1,
      nav: [
        {
          title: "在线测试",
          skt: [
            { name: "老师出卷", path: "/MackTestPaper" },
            { name: "安排测试", path: "/TestPaperManage" },
            { name: "试卷管理", path: "/TestSetter" },
            { name: "批阅试卷", path: "/ViewTestPaper" },
            { name: "测试成绩", path: "/TestResult" }
          ]
        }
      ],
      essenti: [
        {
          basics: "基础数据",
          grade: [
            { name: "班级管理", path: "/ClassManage" },
            { name: "学生管理", path: "/ModifyPassword" },
            { name: "老师管理", path: "/StudentManage" },
            { name: "修改密码", path: "/TeacherManage" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    addTab(e) {
      // let newTabName = ++this.tabIndex + "";
      // this.editableTabs.push({
      //   title:e,
      //   name: newTabName,
      //   url:"",
      // });
      for(let i=0;i<this.editableTabs.length;i++) {
        if(this.editableTabs[i].title==e){
            this.editableTabs[i].title.removeChild()
        }
          console.log(this.editableTabs[i])
      }
      // this.editableTabsValue = newTabName;
    },
    removeTab() {
      this.editableTabs.splice(0, 1);
    }
  }
};
</script>>


<style lang="less">
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  display: flex; //声明弹性盒子
  // justify-content: space-between; //弹性盒子属性
  .toxiang {
    overflow: hidden;
    height: 100%;
    margin-top: 10px;
    width: 100px;
  }
  .toxian {
    vertical-align: middle;
  }
  .sanjiao {
    width: 10%;
    width: 100px;
  }
  .caidan {
    width: 80%;
    overflow: hidden;
  }
}

.el-aside {
  background-color: #fff;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-popover,
.el-radio-button:first-child:last-child .el-radio-button__inner {
  margin: 0px;
  border-radius: 4px;
  background: rgb(253, 215, 1);
  height: 60px;
}
// 智学无忧图片

// 智学无忧logo移动位置 字体样式
.qwe {
  background-color: gold;
  width: 200px;
  height: 3.6em;
  img {
    border: 1px solid #0e9789;
    border-radius: 50%;
    box-shadow: 0 0 25px #0e9789;
    vertical-align: middle;
    margin-left: 0.5em;
  }
  span {
    margin-left: 0.5em;
    font-size: 18px;
    color: #0e9789;
  }
}

// 三角形

.el-checkbox-button:first-child .el-checkbox-button__inner {
  padding: 0px;
  background-color: #0e9789;
  line-height: 3;
  background-color: #0e9789;
  height: 3.7rem;
  i {
    line-height: 2em;
    font-size: 30px;
  }
}

// 菜单栏
.el-tabs__nav-scroll{
  margin-top: 10px;
}
</style>
