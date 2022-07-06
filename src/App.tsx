import React from 'react';
import styled from '@emotion/styled';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './components/product-list/ProductList';
import { ProductView } from './components/product-view/product-view';

const Header = styled.header`
  display: block;
  width: 100%;
  background-color: aquamarine;
  padding: 1rem;
`

const H1 = styled.header`
  font-size: 1.8rem;
  color: #333;
  font-weight: bold;
  `

const StyledLink = styled(Link)`
  text-decoration: none;
`

function App() {
  return (
    <div className="App">
      <Header>
        <StyledLink to="/">
          <H1>Cool API</H1>
        </StyledLink>
      </Header>
      <Routes>
        <Route path="/" element = { <ProductList /> }></Route>
        <Route path="/product/:productId" element = { <ProductView /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
