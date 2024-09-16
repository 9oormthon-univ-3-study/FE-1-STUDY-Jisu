import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = ({ addExpense }) => {
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ date: '', amount: '' });

  const validateInput = () => {
    let valid = true;
    let errors = { date: '', amount: '' };

    // 날짜 유효성 검사
    if (!date) {
      errors.date = '날짜를 입력하세요.';
      valid = false;
    } else if (isNaN(new Date(date).getTime())) {
      errors.date = '유효한 날짜를 입력하세요.';
      valid = false;
    }

    // 금액 유효성 검사
    if (!amount) {
      errors.amount = '금액을 입력하세요.';
      valid = false;
    } else if (isNaN(amount) || amount <= 0) {
      errors.amount = '유효한 금액을 입력하세요.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // 지출 항목 등록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      const newExpense = {
        id: uuidv4(),
        date,
        item,
        amount: parseInt(amount, 10),
        description
      };
      addExpense(newExpense);
      setDate('');
      setItem('');
      setAmount('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>지출 항목 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>날짜:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
        </div>
        <div>
          <label>항목:</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="예: 식사, 교통비 등"
          />
        </div>
        <div>
          <label>금액:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="금액을 입력하세요"
          />
          {errors.amount && <p style={{ color: 'red' }}>{errors.amount}</p>}
        </div>
        <div>
          <label>설명:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="지출에 대한 설명을 입력하세요"
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default AddExpense;
