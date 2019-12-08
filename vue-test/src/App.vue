<template>
  <div id="app">
  <el-container style="height: 400px; border: 1px solid #eee">
    <!-- 侧边栏 -->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

    <el-menu router :default-openeds="['1']">
      <el-submenu index="1">

        <template slot="title"><i class="el-icon-s-flag"></i>内容管理</template>
      
          <el-menu-item index="/articles/index">文章列表</el-menu-item>
          <el-menu-item index="/articles/create">新建文章</el-menu-item>
     
        
      </el-submenu>
     
      
    </el-menu>
  </el-aside>
  
  <el-container>
    
    <!-- 头 -->
    <el-header >
     
       <div id="edit">简单个人博客</div>
    </el-header>
    <!-- 中间内容区 -->
    <el-main>
    
      <router-view></router-view>

    </el-main>


  </el-container>
</el-container>
    
  </div>
</template>
<style>
body{
  margin: 0px;
  padding: 0px;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

   #edit{
       text-align: center;
       line-height: 60px;
       height: 60px;
        font-size: 30px;
  
      
     
   }
</style>

<script>
  export default {
    data() {
     
      return {
       


      }
    }
  };
</script>