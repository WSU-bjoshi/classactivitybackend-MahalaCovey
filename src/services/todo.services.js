// WILL NEVER HAVE ANYTHING 
// RELATING TO HTTP CALLS OR RESPONSES

let nextId = 3;

const todos =[
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done: false}
]

export function getAllTodos(){
    return todos;
}

export function createTodo(task){
    if(!task || typeof task !=="string" || task.trim ===""){
        // return res.status(400).json({error:"task is required. You should provide non-empty string"});
        throw new error("Invaid task")
    }

    const todo ={id: nextId++, task:task.trim(), done:false};
    todos.push(todo);

    return todo;
}

export function toggleTodoById(id){
    const todo = todos.find(t => t.id === id);

    if (!todo){
        return null;
    }
    todo.done = !todo.done;
    return todo;
}

export function deleteTodoById(id){
    const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        return null;
    }

    return todos.splice(todoIndex, 1)[0];
}

export function getById(req, res){ // New for getting ID and task
   const id = Number(req.params.id)
   const todo = todos.find(t => t.id === id);

   if(!todo) return res.status(404).json({error:"todo not found", id});

   console.log(todo.task);
   res.json({message:"Got", task: todo.task, done: task.done})
}