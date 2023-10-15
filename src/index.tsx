import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
export { default as ExpenseForm } from "./components/ExpenseForm";
export { default as IncomeForm } from "./components/IncomeForm";
export { default as TargetForSaving } from "./components/TargetForSaving";
export { default as TransferForSavingForm } from "./components/TransferForSavingForm";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)