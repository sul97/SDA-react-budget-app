import React from 'react';
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TargetForSaving from './components/TargetForSaving';
import TransferForSavingForm from './components/TransferForSavingForm';

function App() {
  return (
    
    <div className="row">
    <div className ="col"><IncomeForm /></div>
    <div className ="col"><ExpenseForm /></div>
    <div className ="col"><TargetForSaving/></div>
    <div className ="transFor"><TransferForSavingForm/></div>
    </div>
  );
}

export default App;
