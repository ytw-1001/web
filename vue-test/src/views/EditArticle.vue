<template>
<div>
      <div id="edit">编辑页面</div>
<el-form  @submit.native.prevent="saveAritecle" ref="form" :model="article" label-width="120px">
    
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>

  
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
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
          this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res=>{
        
        this.$message({
          message: '文章更新成功',
          type: 'success'
        });
        this.$router.push('/articles/index')

              console.log(res.data)
          })
      },

      //获取当前id的页面内容
      fetch(){
          //路由中的id
            this.$http.get(`articles/${this.$route.params.id}`).then(res=>{
                this.article=res.data
            })
        }       

    },
    created(){
        this.fetch()
    }
  }
</script>