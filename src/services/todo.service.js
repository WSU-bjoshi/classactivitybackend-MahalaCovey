// WILL NEVER HAVE ANYTHING RELATING TO HTTP CALLS OR RESPONSES

import * as ToDoModel from "../models/todo.models.js"

export async function getUserTodosService(userId){
    console.trace("User ID in getUserTodosService", userId);
    return await ToDoModel.findAll(userId);
}

export async function createUserTodoService(userId, task){
    console.log("got to service")
    if(!task || typeof task !=="string" || task.trim()===""){
        throw new Error("Invalid task")
    }
    console.log("completed service logic check")
    return await ToDoModel.createUserTodo(userId, task);
}

export async function toggleTodoByIdService(userId, id){
    return ToDoModel.toggleTodoById(userId, id);
}

export async function deleteTodoByIdService(userId, id){
    return ToDoModel.deleteTodoById(userId, id);
}

export async function getTodoByIdService(id){
    // const todo = todos.find(t => t.id === id);
    // if(!todo){
    //     return null;
    // }
    return ToDoModel.getTodoById(id);
}
