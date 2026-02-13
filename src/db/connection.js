import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"todos_db"
})

export default pool;