const express = require('express');
const bodyParser = require('body-parser');
const myDbService = require('./data/data.layer');

const host = "http://localhost"
const port = 3030;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(mid_one,mid_two);



app.get('/todo',function (req, res) {
    console.log(req.user);
    let todos = myDbService.getTodoArray();
    res.json(todos);
});


app.post('/todo', function (req, res) {
    let todo = req.body;
    myDbService.saveTodo(todo);
    newTodos= myDbService.getTodoArray();
    res.json({
        message: 'Todo saved successfully',
        items:newTodos,
        totalItems: newTodos.length
    });
});


// to complete update todo
app.put('/todo/:id', function (req, res) {
    res.json();
});

//to complete delete todo
app.delete('/todo/:id', function (req, res) {
    res.json(todos);
});

app.listen(port, function () {
    console.log(`Server listening  on ${host}:${port}`)
});

function mid_one(req,res,next){
    req.user="Ali";
    console.log('my simple middleware');
    next();
}
function mid_two(req,res,next){
    req.password="toto";
    console.log('my second middleware');
    next();
}