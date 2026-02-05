import { Router } from "express";

import {listTodos, createTodos, toggleTodo, removeTodo, getById } from "../controllers/todo.controllers.js"


const router = Router();

router.get("/", listTodos);
router.get("/:id/toggle", getById); // New for getting by ID
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/delete/:id", removeTodo);

export default router;