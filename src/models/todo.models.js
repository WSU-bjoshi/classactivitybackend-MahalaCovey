import pool from "../db/connection.js";

export async function getAllTodos(){
    const [rows] = await pool.query("SELECT * FROM todos;")
    console.log(rows);
    return rows;
}

let nextId = 3;

let todos =[
    {id:1, task:"Try to have fun with express",done:false},
    {id:2, task:"Buy eggs", done: false}
]

export async function createTodo(task){
    const [result] = await pool.query(
        "INSERT INTO todos(task) VALUES(?)", [task]
    );
    return {id: result.insertId, task, completed:false}
}

export async function toggleTodoById(id, task){
    const [result] = await pool.query("UPDATE todos SET completed = !completed, task = ? WHERE id = ?;", [task, id])
    console.log("check 1 "+JSON.stringify(result));
    return result;
}

export async function deleteTodoById(id){
    const [result] = await pool.query("UPDATE todos SET in_use = false WHERE id = ?;", [id])
    console.log(result);
    return result;
}

export async function getTodoById(id){
    const [result] = await pool.query("SELECT * FROM todos WHERE id = ?;", [id])
    console.log(result);
    return result;
}
