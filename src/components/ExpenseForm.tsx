import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Expense } from './types';

const ExpenseForm = () => {
  const [expense, setExpense] = useState<Expense>({
    esource: '',
    eamount: 0,
    edate: '',
  });
  const [expenses, setExpensesState] = useState<Expense[]>([]);

  const handleDeleteExpense = (index: number) => {
    const updatedExpense = [...expenses];
    updatedExpense.splice(index, 1);
    setExpensesState(updatedExpense);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: name === 'eamount' ? parseFloat(value) : value,
    }));
  };

  const handleExpenseSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!expense.esource || expense.eamount <= 0 || !expense.edate) {
      alert('Please fill all fields');
      return;
    }

    setExpensesState((prevExpenses) => [...prevExpenses, expense]);
    setExpense({
      esource: '',
      eamount: 0,
      edate: '',
    });
  };


  return (
    <div>
      <form onSubmit={handleExpenseSubmit}>
        <div>
          <label htmlFor="esource">Expense Source</label>
          </div>
          <div>
          <input
            type="text"
            name="esource"
            id="esource"
            value={expense.esource}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="eamount">Amount of Expense</label>
          </div>
          <div>
          <input
            type="number"
            name="eamount"
            id="eamount"
            value={expense.eamount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="edate">Date of Expense</label>
          </div>
          <div>
          <input
             type="date"
             name="edate"
             id="edate"
             value={expense.edate}
             onChange={handleInputChange}
           />
        </div>
        <div>
          <button type="submit" className="button">Add Expense</button>
        </div>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.esource}: ${expense.eamount} on {expense.edate}
            <button onClick={() => handleDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseForm;
