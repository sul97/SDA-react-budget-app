import React from 'react';
 
const TransferForSavingForm = () =>{
    return(
     <div>
     <p>Current balance :</p>
     <form>
        <div>
        <label htmlFor="">Transfer to saving account :</label>
        <input type="number" name="source" id="source"/>
        <button>Transfer</button>
        </div>
     </form>
     </div>
    );
};

export default TransferForSavingForm;