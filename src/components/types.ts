// Income type definition
export interface Income_Expense {
  source: string;
  amount: number;
  date: string;
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

