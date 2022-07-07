import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductView } from './components/ProductView';

function App() {
  
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductList />}></Route>
					<Route path="/product" element={<ProductList />}></Route>
					<Route path="/product/:id" element={<ProductView />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
