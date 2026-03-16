import pool from "../db/connection.js";

import Todo from "./Todo.js"

let nextId = 3;

let todos =[
    {id:1, task:"Try to have fun with express",done:false},
    {id:2, task:"Buy eggs", done: false}
]
 export async function findAll(user_Id){
  return await Todo.findAll({ where: {user_Id}, order: [["task_id", "ASC"]]}); 
 }

// Creates a task
export async function createUserTodo(userId, task){
    console.log("The user id is", userId);

    return await Todo.create({user_id: userId, tasks: task});
}

export async function toggleTodoById(userId, id){
    return await Todo.update(
        {completed: !Todo.completed},
        {where: { 
            task_id: id,
            user_Id: userId}
        }   
    );
    const updatedTodo = await Todo.findByPk(id);
    return updatedTodo;

}

export async function deleteTodoById(userId, task) {
  const deleted = await Todo.destroy({
    where: {
      user_Id: userId,
      task_id: task
    }
  });

  return deleted;
}

export async function getTodoById(id){
    return await Todo.findByPk(id);
}
