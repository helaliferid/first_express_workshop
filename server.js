const express = require('express');
const todoRouter=require('./routes/todo.route');
const userRouter=require('./routes/user.route');



const host = "http://localhost"
const port = 3030;

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//EJS
app.set('views','./views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{username:'Ferid HELALI'});
});

app.get('/contact',function(req,res){
    res.render('pages/contact',{username:'Ferid HELALI'});
});

app.use('/todo',todoRouter);
app.use('/user',userRouter);


app.listen(port, function () {
    console.log(`Server listening  on ${host}:${port}`)
});

