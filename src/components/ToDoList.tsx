import React, { useState } from "react";
import { SingleToDo } from "./SingleToDo";
import { ToDo } from "../types/toDo";

interface ToDoListProps {
	todos: ToDo[];
	setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
export const ToDoList = ({ todos, setTodos }: ToDoListProps) => {
	return (
		<div>
			{todos.map((todo) => (
				<SingleToDo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
			))}
		</div>
	);
};
