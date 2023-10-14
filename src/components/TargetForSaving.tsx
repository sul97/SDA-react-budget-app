import { ChangeEvent, FormEvent, useState } from 'react';
import { TransferSavingFormProps } from './types';

const TargetForSaving = (props:TransferSavingFormProps) => {
  const [target, setTarget] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setTarget (Number(event.target.value));
  
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTarget(0);};

  const handleReset = () => {
    setTarget(0);
    props.onReset(); 
  }

  const percentage = target === 0 ? 0 : (props.savingAmount / target) * 100;

  return (
    <div>
      <form  onSubmit= {handleSubmit}>
        <div>
          <label htmlFor="target">Set Target</label>
          <input
            type="number"
            name="target"
            id="target"
            value={target}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleReset} className="button">Reset</button>
      </form>
      <p>Current saving:{props.savingAmount} </p>
      <p>Target: {target}</p>
      <p>Progress:{percentage} %</p>
      <progress max={target} value={props.savingAmount}></progress>
    </div>
  );
};

export default TargetForSaving;
