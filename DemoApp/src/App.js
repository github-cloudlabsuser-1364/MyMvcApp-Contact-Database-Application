import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Math.random().toString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
