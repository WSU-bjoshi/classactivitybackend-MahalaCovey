// WILL NEVER HAVE ANYTHING RELATING TO HTTP CALLS OR RESPONSES

import * as ToDoModel from "../models/todo.models.js"

export async function getUserTodosService(userId){
    return await Todo.findAll({ where: {userId}, order: [["id", "ASC"]]});
}

export async function createUserTodoService(userId, task){
    console.log("got to service")
    if(!task || typeof task !=="string" || task.trim()===""){
        throw new Error("Invalid task")
    }
    console.log("completed service logic check")
    return await ToDoModel.createUserTodo(userId, task);
}

export async function toggleTodoByIdService(id){
    return ToDoModel.toggleTodoById(id);
}

export async function deleteTodoByIdService(id){
    return ToDoModel.deleteTodoById(id);
}