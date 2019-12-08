<template>
<div>
         <div id="edit">文章列表</div>
    <el-table :data="articles">
       <el-table-column prop="_id" label="编号" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="260">
        </el-table-column>

     <el-table-column label="操作">
      <template slot-scope="scope">
       
       <el-button @click="edit(scope.row._id)"  size="small">编辑</el-button>
       <el-button @click="remove(scope.row._id)" size="small">删除</el-button>
      
      </template>
    </el-table-column>
      </el-table>
  

</div>
</template>
<script>
  export default {
    data() {
    
      return {
        articles:[]
       
      }
    },
  methods:{
    //查找
    find(){
         this.$http.get('articles').then(res=>{
      if(res.data){
         this.articles=res.data;
      }
    })
    },

    //修改
    edit(id){
      this.$router.push(`/articles/${id}/edit`)

    },
    //删除
    remove(id){
      this.$http.delete(`deletea/${id}`).then(res=>{

         this.$message({
          message: '删除成功',
          type: 'success'
        });
        //重新获取数据
        this.find()

      })
    }



  },

  created(){
   
    this.find()
  }

  };
</script>

<style  scoped>
 #edit{
       text-align: center;
       line-height: 40px;
       height: 40px;
        font-size: 30px;
   color: darkgray
      
     
   }
</style>