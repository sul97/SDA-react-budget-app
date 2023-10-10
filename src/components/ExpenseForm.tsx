import React from 'react';
 
const ExpenseForm = () =>{
    return(
     <div>
     <form>
        <div>
        <label htmlFor=""> Expens source</label>
        </div>
        <div>
        <input type="text" name="esource" id="esource"/>
        </div>
        <div>
        <label htmlFor=""> Amount of expense</label>
        </div>
        <div>
        <input type="number" name="eamount" id="eamount"/>
        </div>
        <div>
        <label htmlFor=""> Date of expense</label>
        </div>
        <div>
        <input type="date" name="edate" id="edate"/>
        </div>
        <div><button>add expense</button></div>
        
     </form>
     <ul>
        <li>Water bill :</li>
        <li>phone bill :</li>
     </ul>
     </div>
    );
};

export default ExpenseForm;