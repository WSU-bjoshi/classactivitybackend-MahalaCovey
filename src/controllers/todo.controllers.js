import {getTodosService, createTodoService, toggleTodoByIdService, deleteTodoByIdService, getTodoByIdService} from "../services/todo.service.js";

export async function listTodos(req, res){
    const todos = await getTodosService();
    res.json({count: todos.length, todos});
}

export async function createTodos(req, res){
    try{
        const {task} = req.body;
        const todo = await  createTodoService(task);
        res.status(201).json({message:"Created", todo});
    } catch(err){
        res.status(400).json({error:err.message});
    } 
}

export async function toggleTodo(req, res){
    const id = Number(req.params.id);
    const todo = await toggleTodoByIdService(id, req.body.task);

    if(todo.affectedRows==0){
        return res.status(400).json({error : "Todo not found"});
    }

    todo.task = req.body.task;
    res.json({message:"Toggled", todo});
}


export async function removeTodo(req, res){
    const id = Number(req.params.id);
    const todo = await deleteTodoByIdService(id);

    if(!todo){
        return res.status(400).json({error: "Todo not found"});
    }

    res.json({message:"Deleted Successfully"});
}

export async function getTodo(req, res){
    const id = Number(req.params.id);
    const todo = await getTodoByIdService(id);

     if(!todo){
        return res.status(400).json({error: "todo not found"});
    }

    res.json({message:"Got Successflly", todo});
}