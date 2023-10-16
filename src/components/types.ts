// Income type definition
export interface IncomeExpense {
  source: string;
  amount: number;
  date: string;
}
export interface IncomeProps {
  getIncomeAmount: (amount: number) => void 
}
export interface ExpenseProps {
  getExpenseAmount: (amount: number) => void 
}

export interface TransferSavingForm {
  getSavingAmount: (amount: number) => void;
  savingAmount:number;
  incomeAmounts: number[]; 
  expenseAmounts: number[]; 
}

export interface TransferSavingFormProps {
  savingAmount:number;
  onReset: () => void;
 
}

