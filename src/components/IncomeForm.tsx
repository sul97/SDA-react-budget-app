import React from 'react';
 
const IncomeForm = () =>{
    return(
     <div>
     <form>
        <div>
        <label htmlFor=""> Income source</label>
        </div>
        <div>
        <input type="text" name="source" id="source"/>
        </div>
        <div>
        <label htmlFor=""> Amount of income</label>
        </div>
        <div>
        <input type="number" name="amount" id="amount"/>
        </div>
        <div>
        <label htmlFor=""> Date of income</label>
        </div>
        <div>
        <input type="date" name="date" id="date"/>
        </div>
        <div>
        <button>add income</button>
        </div>
     </form>
     <ul>
        <li>Salary :</li>
        <li>Salary :</li>
     </ul>
     </div>
    );
};

export default IncomeForm;