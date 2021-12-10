const express = require('express');
const todoRouter=require('./routes/todo.route');
const userRouter=require('./routes/user.route');



const host = "http://localhost"
const port = 3030;

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/todo',todoRouter);
app.use('/user',userRouter);


app.listen(port, function () {
    console.log(`Server listening  on ${host}:${port}`)
});

