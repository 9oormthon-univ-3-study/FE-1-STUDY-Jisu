import React, { createContext, useState, useContext } from 'react';
import fakeData from '../assets/fakeData.json';

const ExpenseContext = createContext();


export const ExpenseProvider = ({ children }) => {
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
    <ExpenseContext.Provider
      value={{
        expenses,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
