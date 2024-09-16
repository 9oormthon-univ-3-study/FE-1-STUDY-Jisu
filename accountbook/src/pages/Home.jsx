import React, { useState, useEffect } from 'react';
import MonthTabs from '../components/MonthTabs';
import fakeData from '../assets/fakeData.json';
import AddExpense from '../components/AddExpense';
import { Link } from 'react-router-dom';

const filterExpensesByMonth = (expenses, month) => {
  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === month;
  });
};

const Home = ({ updateExpense }) => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [expenses, setExpenses] = useState(fakeData);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const filtered = filterExpensesByMonth(expenses, activeMonth);
    setFilteredExpenses(filtered);
  }, [activeMonth, expenses]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <header>
        <h1>개인 지출 관리</h1>
        <p>월별 지출 내역을 확인하고 관리하세요.</p>
      </header>

      <MonthTabs activeMonth={activeMonth} setActiveMonth={setActiveMonth} />

      <div>
        <h2>{activeMonth + 1}월의 지출 내역</h2>
        {filteredExpenses.length > 0 ? (
          <ul>
            {filteredExpenses.map((expense) => (
              <li key={expense.id}>
                <p><strong>날짜:</strong> {expense.date}</p>
                <p><strong>항목:</strong> {expense.item}</p>
                <p><strong>금액:</strong> {expense.amount}원</p>
                <p><strong>설명:</strong> {expense.description}</p>
                <Link to={`/edit/${expense.id}`}>수정</Link> {/* ID를 포함한 링크 */}
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>이 달의 지출 내역이 없습니다.</p>
        )}
      </div>

      <AddExpense addExpense={addExpense} />
    </div>
  );
};

export default Home;
