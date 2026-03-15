import { Router } from "express";

import {listTodos, createUserTodos, toggleTodo, removeTodo, getTodo } from "../controllers/todo.controllers.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", listTodos);
router.get("/:id/toggle", getTodo); // New for getting by ID
router.post("/", createUserTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/delete/:id", removeTodo);

export default router;