import React ,{useState}from 'react';
import './App.css';
import {ExpenseForm, IncomeForm,TargetForSaving,TransferForSavingForm } from "./";

const Budget = () => {
  const [incomeAmounts, setIncomeAmounts] = useState<number[]>([]);
  const [expenseAmounts, setExpenseAmounts] = useState<number[]>([]);
  const [savingAmount, setSavingAmount]=useState(0);
  
  const getIncomeAmount = (amount: number) => {
    setIncomeAmounts([...incomeAmounts, amount]);
  };
  const getExpenseAmount = (amount: number) => {
    setExpenseAmounts([...expenseAmounts, amount]);
  };
  const getSavingAmount =(amount:number)=>{
    setSavingAmount(amount);
  }
  const resetSavingAmount = () => {
    setSavingAmount(0);
  };

  return (
    
    <div className="row">
      
    <div className ="col"><IncomeForm getIncomeAmount={getIncomeAmount}/></div>
    <div className ="col"><ExpenseForm getExpenseAmount={getExpenseAmount} /></div>
    <div className ="col"><TargetForSaving savingAmount={savingAmount} onReset={resetSavingAmount} /> </div>
    <div className ="transFor"><TransferForSavingForm getSavingAmount={getSavingAmount} incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}savingAmount={savingAmount} /></div>
    
    </div>
  );
}

export default Budget;
