import React, { useRef } from "react";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
			<Input
				ref={inputRef}
				type="text"
				id="new-to-do-input"
				placeholder="Add a Task!"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				autoComplete="off"
			/>
			<IconButton type="submit">
				<AddCircleIcon />
			</IconButton>
		</form>
	);
};
