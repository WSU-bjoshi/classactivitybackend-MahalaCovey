import {getUserTodosService, createUserTodoService, toggleTodoByIdService, deleteTodoByIdService, getTodoByIdService} from "../services/todo.service.js";

export async function listTodos(req, res){
    const todos = await getUserTodosService(req.user.user_id);
    res.json({count: todos.length, todos});
}


export async function createUserTodos(req, res){
    try{
        console.log(req.body)
        console.log(req.user.user_id)
        
        const {task} = req.body;
        const todo = await createUserTodoService(req.user.user_id, task);
        res.status(201).json({message:"Created", todo});
    } catch(err){
        res.status(400).json({error:err.message});
    } 
}

export function toggleTodo(req, res){
    const id = Number(req.params.id);
    const todo = toggleTodoByIdService(req.user.user_id, id);

    if(!todo){
        return res.status(400).json({error : "Todo not found"});
    }
    res.json({message:"Toggled", todo});

}


export function removeTodo(req, res){
    const id = Number(req.params.id);
    const todo = deleteTodoByIdService(req.user.user_id, id);

    if(!todo){
        return res.status(400).json({error: "Todo not found"})
    }

    res.json({message:"Deleted Successfully"})
}

export async function getTodo(req, res){
    const id = Number(req.params.id);
    const todo = await getTodoByIdService(id);

     if(!todo){
        return res.status(400).json({error: "Todo not found"});
    }

    res.json({message:"Got Successflly", todo});
}