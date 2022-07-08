import React, { useRef } from "react";

interface ToDoFormProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

export const ToDoForm = ({ todo, setTodo, handleAdd }: ToDoFormProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<label htmlFor="new-to-do-input">new task</label>
			<input
				ref={inputRef}
				type="text"
				id="new-to-do-input"
				placeholder="Add a Task!"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				autoComplete="off"
			/>
			<button type="submit">+</button>
		</form>
	);
};
