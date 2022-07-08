import React from "react";
import { ToDo } from "../types/toDo";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

interface SingleToDoProps {
	todo: ToDo;
	todos: ToDo[];
	setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const SingleToDo = ({ todo, todos, setTodos }: SingleToDoProps) => {
	return (
		<form>
			<Card variant="outlined">
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="center"
					spacing={1}
				>
					<Typography variant="h3" component="h3">
						{todo.todo}
					</Typography>
					<IconButton aria-label="delete" color="primary">
						<DeleteIcon />
					</IconButton>
					<IconButton aria-label="edit" color="primary">
						<EditIcon />
					</IconButton>
					<IconButton aria-label="done" color="primary">
						<DoneIcon />
					</IconButton>
				</Stack>
			</Card>
		</form>
	);
};
