import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ToDoList } from "./ToDoList";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "../types/toDo";

export const ToDoView = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<ToDo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
		}
	};

	console.log(todo);
	console.log(todos);

	return (
		<>
			<Typography variant="h1" component="h2">
				To Do List
			</Typography>
			<ToDoForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<ToDoList todos={todos} setTodos={setTodos} />
		</>
	);
};
