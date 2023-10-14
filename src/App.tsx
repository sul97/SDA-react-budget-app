import React ,{useState}from 'react';
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TargetForSaving from './components/TargetForSaving';
import TransferForSavingForm from './components/TransferForSavingForm';
//import { Income, Expense } from './components/types';

const App=()=> {
  const [savingAmount, setSavingAmount]=useState(0);
  const getSavingAmount =(amount:number)=>{
    setSavingAmount(amount);
  }

  const resetSavingAmount = () => {
    setSavingAmount(0);
  };

  return (
    
    <div className="row">
      
    <div className ="col"><IncomeForm  /></div>
    <div className ="col"><ExpenseForm /></div>
    <div className ="col"><TargetForSaving savingAmount={savingAmount} onReset={resetSavingAmount} /> </div>
    <div className ="transFor"><TransferForSavingForm getSavingAmount={getSavingAmount}/></div>
    
    </div>
  );
}

export default App;
