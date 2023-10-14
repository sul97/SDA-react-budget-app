import { FormEvent, useState, ChangeEvent } from 'react';
import { Income } from './types';

const IncomeForm= () => {
  const [income, setIncome] = useState<Income>({
    source: '',
    amount: 0,
    date: '',
  });

  const [incomeList, setIncomeList] = useState<Income[]>([]); 

  const handleDeleteIncome = (index: number) => {
    const updatedIncomes = [...incomeList];
    updatedIncomes.splice(index, 1);
    setIncomeList(updatedIncomes);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setIncome((prevIncome) => ({
      ...prevIncome,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };

  const handleIncomeSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!income.source || income.amount <= 0 || !income.date) {
      alert('Please fill all fields ');
      return;
    }

    setIncomeList((prevIncomes) => [...prevIncomes, income]);
    setIncome({
      source: '',
      amount: 0,
      date: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleIncomeSubmit}>
        <div>
          <label htmlFor="source">Income Source</label>
          </div>
          <div>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of Income</label>
          </div>
          <div>
          <input
            type="number"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date of Income</label>
          </div>
          <div>
          <input
            type="date"
            name="date"
            id="date"
            value={income.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="button">Add Income</button>
        </div>
        </form>
      <ul>
        {incomeList.map((income, index) => (
          <li key={index}>
            {income.source}: ${income.amount} on {income.date}
            <button onClick={() => handleDeleteIncome(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default IncomeForm;
