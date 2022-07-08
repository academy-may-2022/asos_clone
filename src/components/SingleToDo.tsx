import React from "react";
import { ToDo } from "../types/toDo";

interface SingleToDoProps {
	todo: ToDo;
	todos: ToDo[];
	setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const SingleToDo = ({ todo, todos, setTodos }: SingleToDoProps) => {
	return (
		<form>
			<div>
				<span>{todo.todo}</span>
			</div>
		</form>
	);
};
