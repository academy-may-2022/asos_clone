import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To Do List', () => {
  render(<App />);
  const toDoListHeader = screen.getByText(/To Do List/i);
  expect(toDoListHeader).toBeInTheDocument();
});
