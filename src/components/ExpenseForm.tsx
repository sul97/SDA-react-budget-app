import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Income_Expense } from './types';

const ExpenseForm = (props: { getExpenseAmount: (amount: number) => void }) => {
  const [expense, setExpense] = useState<Income_Expense>({
    source: '',
    amount: 0,
    date: '',
  });
  const [expenses, setExpensesList] = useState<Income_Expense[]>([]);

  const handleDeleteExpense = (index: number) => {
    const updatedExpense = [...expenses];
    updatedExpense.splice(index, 1);
    setExpensesList(updatedExpense);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };

  const handleExpenseSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!expense.source || expense.amount <= 0 || !expense.date) {
      alert('Please fill all fields');
      return;
    }

    setExpensesList((prevExpenses) => [...prevExpenses, expense]);
    props.getExpenseAmount(expense.amount);
    setExpense({
      source: '',
      amount: 0,
      date: '',
    });
  };


  return (
    <div>
      <form onSubmit={handleExpenseSubmit}>
        <div>
          <label htmlFor="source">Expense Source</label>
          </div>
          <div>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of Expense</label>
          </div>
          <div>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date of Expense</label>
          </div>
          <div>
          <input
             type="date"
             name="date"
             id="date"
             value={expense.date}
             onChange={handleInputChange}
           />
        </div>
        <div>
          <button type="submit" className="button">Add Expense</button>
        </div>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={`${expense.source}-${expense.amount}-${expense.date}`}>
            {expense.source}: ${expense.amount} on {expense.date}
            <button onClick={() => handleDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseForm;
