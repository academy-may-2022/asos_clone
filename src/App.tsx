import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product } from './components/Product';

function App() {
  
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductList />}></Route>
					<Route path="/product" element={<ProductList />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
