// Income type definition
export interface Income {
  source: string;
  amount: number;
  date: string;
}

// Expense type definition
export interface Expense {
  esource: string;
  eamount: number;
  edate: string;
}

export interface TransferSavingForm {
  getSavingAmount:(amount: number) => void
 
}

export interface TransferSavingFormProps {
  savingAmount:number;
  onReset: () => void;
  

}

