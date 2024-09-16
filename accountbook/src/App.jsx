import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditExpense from './pages/EditExpense';
import fakeData from './assets/fakeData.json';

function App() {
  const [expenses, setExpenses] = useState(fakeData);

  // 지출 항목 수정
  const updateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  // 지출 항목 삭제
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home expenses={expenses} updateExpense={updateExpense} />} />
        <Route path="/edit/:id" element={<EditExpense expenses={expenses} updateExpense={updateExpense} deleteExpense={deleteExpense} />} />
      </Routes>
    </Router>
  );
}

export default App;
