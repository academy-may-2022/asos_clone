import React from "react";
import "./App.css";
import { ToDoView } from "./components/ToDoView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/to-dos" element={<ToDoView />}></Route>
				</Routes>
			</BrowserRouter>
			<ToDoView />
		</div>
	);
}

export default App;
