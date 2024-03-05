"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let todos = [];
const router = express_1.default.Router();
router.get('/todos', (req, res, next) => {
    res.status(200).json({ todos });
});
router.post('/todos', (req, res, next) => {
    const body = req.body;
    const newTodo = { id: new Date().toISOString(), text: body.text };
    todos.push(newTodo);
    res.status(201).json({ todos });
});
router.put('/todos/:todoId', (req, res, next) => {
    const params = req.params;
    const id = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ todos, message: "updated successfully" });
    }
    res.status(201).json({ message: "todo not found." });
});
router.delete('/todos/:todoId', (req, res, next) => {
    const params = req.params;
    const id = params.todoId;
    todos = todos.filter(todo => todo.id !== id);
    return res.status(200).json({ todos, message: "deleted successfully" });
});
exports.default = router;
