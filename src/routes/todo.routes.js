import { Router } from "express";

import {listTodos, createTodos, toggleTodo, removeTodo, getTodo } from "../controllers/todo.controllers.js"

const router = Router();

router.get("/", listTodos); // WORKS
router.get("/:id/toggle", getTodo); // New for getting by ID, WORKS
router.post("/", createTodos); // WORKS 
router.patch("/:id/toggle", toggleTodo); // WORKS
router.delete("/delete/:id", removeTodo); // WORKS

export default router;