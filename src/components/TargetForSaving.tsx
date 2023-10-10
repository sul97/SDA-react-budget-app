import React from 'react';
 
const TargetForSaving = () =>{
    return(
     <div>
     <form>
        <div>
        <label htmlFor=""> Set Target</label>
        </div>
        <div>
        <input type="number" name="source" id="source"/>
        </div>
        <div>
        <button>Reset</button>
        </div>
     </form>
     <p>Current saving :</p>
     <p>Target :</p>
     <p>Progress :</p>
     <progress  max="100" value="20"></progress>
     </div>
    );
};

export default TargetForSaving;