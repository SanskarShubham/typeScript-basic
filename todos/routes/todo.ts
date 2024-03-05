import express, { Request, Response, NextFunction } from 'express';
import { Todo } from '../models/todo';
let todos: Todo[] = [];
type requestBody = {text:string};
type requestParam = {todoId:string};
const router = express.Router();

router.get('/todos', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ todos });
});

router.post('/todos', (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as requestBody;
    const newTodo: Todo = { id: new Date().toISOString(), text: body.text };
    todos.push(newTodo);
    res.status(201).json({ todos });
});

router.put('/todos/:todoId', (req: Request, res: Response, next: NextFunction) => {
    const params = req.params as requestParam;
    const id: string = params.todoId;
    
    const body = req.body as requestBody;
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if (todoIndex >= 0) {

        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ todos, message: "updated successfully" });

    }
    res.status(201).json({ message: "todo not found." });
});
router.delete('/todos/:todoId', (req: Request, res: Response, next: NextFunction) => {
    const params = req.params as requestParam;
    const id: string = params.todoId;
     todos = todos.filter(todo => todo.id !== id)
    return res.status(200).json({ todos, message: "deleted successfully" });
});

export default router;