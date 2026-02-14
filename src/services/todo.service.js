// WILL NEVER HAVE ANYTHING RELATING TO HTTP CALLS OR RESPONSES

import * as ToDoModel from "../models/todo.models.js"

export async function getTodosService(){
    return await ToDoModel.getAllTodos();
}

export async function createTodoService(task){
    if(!task || typeof task !=="string" || task.trim()===""){
        throw new error("Invalid task")
    }
    return await ToDoModel.createTodo(task);
}

export async function toggleTodoByIdService(id, task){
    return await ToDoModel.toggleTodoById(id, task);
}

export async function deleteTodoByIdService(id){
    return await ToDoModel.deleteTodoById(id);
}

export async function getTodoByIdService(id){
    return await ToDoModel.getTodoById(id);
}