import React, { FormEvent, useState ,ChangeEvent,useEffect } from 'react';
import { TransferSavingForm } from './types';

const TransferForSavingForm = (props:TransferSavingForm) => {
  const [transferAmount, setTransferAmount] = useState(0);
 // const [balance, setBalance] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount (Number(event.target.value));
  }

  const handleTransferSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getSavingAmount(transferAmount);
    setTransferAmount(0);

  };

  const totalIncome = props.incomeAmounts.reduce((total, amount) => total + amount, 0);
  const totalExpense = props.expenseAmounts.reduce((total, amount) => total + amount, 0);
  const newBalance = totalIncome - totalExpense - props.savingAmount;

  return (
    <div>
      <p>Current balance:${newBalance}</p> 
      <form onSubmit={handleTransferSubmit}>
        <div>
          <label htmlFor="source">Transfer to saving account:</label>
          <input
            type="number"
            name="source"
            id="source"
            value={transferAmount}
            onChange={handleInputChange}
          />
          <button type="submit" className="button">Transfer</button>
        </div>
      </form>
    </div>
  );
};

export default TransferForSavingForm;
