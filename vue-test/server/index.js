const express=require('express');

const app=express()



//跨域请求
app.use(require('cors')())

//识别客户端提交过来的json
app.use(express.json())

// 数据库
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/myapp',{
useNewUrlParser:true,

useCreateIndex:true,
useUnifiedTopology: true

}).then(()=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log('数据库连接失败'+err
    )
})




let  data = mongoose.Schema({
    title: { type: String},
    body:{type:String}
});

let Article = mongoose.model("Article",data);





//默认首页
app.get('/',(req,res)=>{
    res.send('默认 index')
 
})
//新增接口
app.post("/api/articles",async(req,res)=>{
let Article = mongoose.model("Article",data);
    const article=await Article.create(req.body)

    res.send(article)

})

//显示文章列表
app.get('/api/articles',async(req,res)=>{
        const articles=await Article.find()

        res.send(articles)
})

//删除文章
app.delete('/api/deletea/:id',async(req,res)=>{
        await Article.findOneAndDelete(req.param.id)
        res.send({
            status:true
        })

})
//文章详情

app.get('/api/articles/:id',async(req,res)=>{
    const article =await Article.findById(req.params.id)
        res.send(article)
})

//修改文章
app.put('/api/articles/:id',async(req,res)=>{
    const article =await Article.findByIdAndUpdate(req.params.id,req.body)
        res.send(article)
})



app.listen(4001,()=>{
    console.log('running...')
})