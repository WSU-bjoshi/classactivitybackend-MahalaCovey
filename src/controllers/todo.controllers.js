import { getAllTodos, createTodo, toggleTodoById, deleteTodoById } from "../services/todo.services.js";


export function listTodos(req, res){
    const todos = getAllTodos();
    res.json({count: todos.length, todos}); 
}


export function createTodos(req, res){
    
    try{
        const {task} = req.body;
        const todo = createTodo(task);

        res.status(201).json({message:"Created", todo});
    } catch(err){
        res.status(400).json({error:err.message});

    }
    
}

export function toggleTodo(req, res){
    const id = Number(req.params.id)
    const todo = toggleTodoById(id);

    if(!todo){
        return res.status(400).json({error : "Todo not found"});
    }
    res.json({message:"Toggled", todo});
}

export function removeTodo(req, res){
    const id = Number(req.params.id);
    const todo = deleteTodoById(id);

    if(!todo){
        return res.status(400).json({error: "todo not found"})

        res.json({message:"Deleted Successflly"})
    }
}

// export function getById(req, res){ // New for getting ID and task
//    const id = Number(req.params.id)
//    const todo = todos.find(t => t.id === id);

//    if(!todo) return res.status(404).json({error:"todo not found", id});

//    console.log(todo.task);
//    res.json({message:"Got", task: todo.task, done: task.done})
// }

// export function deleteById(req, res){ // New for deleting by ID
//    const id = Number(req.params.id)
//    const todo = todos.find(t => t.id === id);

//    if(!todo) return res.status(404).json({error:"todo not found", id});

//     const index = todos.indexOf(todo);    
//     todos.splice(index, 1);
    

//    console.log(todo.task);
//    res.json({message:"Deleted", todo})
// }
