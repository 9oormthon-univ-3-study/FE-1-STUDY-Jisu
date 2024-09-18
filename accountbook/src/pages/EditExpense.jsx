import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExpenses } from '../context/ExpenseContext';  

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expenses, updateExpense, deleteExpense } = useExpenses(); 

  const dateRef = useRef('');
  const itemRef = useRef('');
  const amountRef = useRef('');
  const descriptionRef = useRef('');

  useEffect(() => {
    const currentExpense = expenses.find((expense) => expense.id === id);
    if (currentExpense) {
      dateRef.current.value = currentExpense.date;
      itemRef.current.value = currentExpense.item;
      amountRef.current.value = currentExpense.amount;
      descriptionRef.current.value = currentExpense.description;
    }
  }, [id, expenses]);

  const handleModify = (e) => {
    e.preventDefault();
    const modifiedExpense = {
      id,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };
    updateExpense(modifiedExpense);
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteExpense(id);
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>지출 항목 수정</h1>
      <form onSubmit={handleModify}>
        <div>
          <label>날짜:</label>
          <input type="date" ref={dateRef} />
        </div>
        <div>
          <label>항목:</label>
          <input type="text" ref={itemRef} />
        </div>
        <div>
          <label>금액:</label>
          <input type="number" ref={amountRef} />
        </div>
        <div>
          <label>설명:</label>
          <input type="text" ref={descriptionRef} />
        </div>
        <button type="submit">수정</button>
      </form>
      <button onClick={handleDelete} style={{ color: 'red' }}>삭제</button>
      <button onClick={handleBack}>뒤로가기</button>
    </div>
  );
};

export default EditExpense;
