<template>
<div>
         <div id="edit">创建页面</div>
<el-form  @submit.native.prevent="saveAritecle" ref="form" :model="article" label-width="120px">

  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>

  
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>


</div>
</template>

<style scoped>
   #edit{
       text-align: center;
       line-height: 40px;
       height: 40px;
        font-size: 30px;
   color: darkgray
      
     
   }

</style>

<script>
  export default {
    data() {
      return {
        article: {
          
        }
      }
    },
    methods: {
      saveAritecle() {
          this.$http.post('articles',this.article).then(res=>{
        
        this.$message({
          message: '文章创建成功',
          type: 'success'
        });
        this.$router.push('/articles/index')

              console.log(res.data)
          })

       

       // console.log(this.article);
      }
    }
  }
</script>