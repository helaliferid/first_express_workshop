const express=require('express');
const bodyParser=require('body-parser');

const host="http://localhost"
const port=3030;

const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const todos=[
    {id:1,task:"read mails"},
    {id:3,task:"verify invoices"},
    {id:4,task:"call my kids"},
]

app.get('/todo',function(req,res){
    res.json(todos);
})


app.post('/todo',function(req,res){
    let todo=req.body;
    console.log(todo);
    todos.push(todo);
    res.json(todos);
})

app.listen(port,function(){
    console.log(`Server listening  on ${host}:${port}`)
})