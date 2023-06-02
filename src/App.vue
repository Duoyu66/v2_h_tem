<template>
  <div id="app" style="height: 100%">
    <el-row class="tac" style="height: 100%">
      <el-col :span="12">
        <el-menu
            style="width: 180px;height: 100vh;"
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

          <el-menu-item index="0" class="logoStyle">
            <span>logo</span>
          </el-menu-item>

          <router-link to="/home">
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>多彩生活</span>
            </template>
            <el-menu-item-group style="width: 180px;overflow: hidden">
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!--          -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>娱乐天地</span>
            </template>
            <el-menu-item-group style="width: 180px;overflow: hidden">
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
    <div class="rightArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

.rightArea {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  height: 900px;
  border: 1px solid rebeccapurple;
}

//logo样式
.logoStyle {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
