import pool from "../db/connection.js";

import Todo from "./Todo.js"

let nextId = 3;

let todos =[
    {id:1, task:"Try to have fun with express",done:false},
    {id:2, task:"Buy eggs", done: false}
]

export async function createUserTodo(userId, task){
    console.log("THe user id is", userId);

    return await Todo.create({user_id: userId, tasks: task});
}

export async function toggleTodoById(id){
    const todo = todos.find(t => t.id === id);
    if(!todo){
        return null;
    }
    todo.done= !todo.done;
    return todo;
}

export async function deleteTodoById(id){
   const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        return null;
    }

    return todos.splice(id, 1)[0];
}

export async function getTodoById(id){
    return await Todo.findByPk(id);
}
