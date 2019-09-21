<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="item in editableTabs"
        :label="item.title"
        :name="item.name"
      >
      {{item.content}}</el-tab-pane>
    </el-tabs>
  </div>

  <!-- <router-link :to="{name:'ClassManage'}">
              <el-menu-item>班级管理</el-menu-item>
  </router-link>-->

  <!-- <el-menu-item @click="addTab" route="/MackTestPaper" index="老师出卷">老师出卷</el-menu-item>
                <el-menu-item @click="addTab" route="/TestPaperManage" index="安排测试">安排测试</el-menu-item>
                <el-menu-item @click="addTab" route="/TestSetter" index="试卷管理">试卷管理</el-menu-item>
                <el-menu-item @click="addTab" route="/ViewTestPaper" index="批阅试卷">批阅试卷</el-menu-item>
  <el-menu-item @click="addTab" route="/TestResult" index="测试成绩">测试成绩</el-menu-item>-->
</template>

<script>
export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          this.editableTabs.splice(0,1)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped></style>


