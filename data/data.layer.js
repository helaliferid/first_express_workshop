const fs=require('fs');


function saveTodo(todo){
    let todoArray=JSON.parse(fs.readFileSync('../todo_db.json').toString());
    todoArray.push(todo);
   try {
       fs.writeFileSync('../todo_db.json',JSON.stringify(todoArray));
   } catch (error) {
       console.log('Error: Sorry your todo is not saved');
   }
}

function getTodoArray(){
    let todoArray=JSON.parse(fs.readFileSync('../todo_db.json').toString());
    return todoArray;
}

function updateTodo(newTodo){
    let todoArray=JSON.parse(fs.readFileSync('../todo_db.json').toString());
    let indexOfTodo=todoArray.findIndex(td=>td.id===newTodo.id);
    todoArray[indexOfTodo]=newTodo;
    try {
        fs.writeFileSync('../todo_db.json',JSON.stringify(todoArray));
    } catch (error) {
        console.log('Error: Sorry your todo is not saved');
    }
}

function deleteTodo(id){
    let todoArray=JSON.parse(fs.readFileSync('../todo_db.json').toString());
    let indexOfTodo=todoArray.findIndex(td=>td.id===id);
    todoArray=todoArray.filter(todo=>todo.id !== id);
    try {
        fs.writeFileSync('../todo_db.json',JSON.stringify(todoArray));
    } catch (error) {
        console.log('Error: Sorry your todo is not saved');
    }
}

//ES6 object
module.exports={
    saveTodo,
    getTodoArray,
    updateTodo,
    deleteTodo
}




