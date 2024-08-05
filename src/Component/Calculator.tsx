import  { useState } from 'react';

const Calculator = (props:{ num1:any, num2:any }) => {
  const [result, setResult] = useState("");

  const Addition = () => {
    setResult(props.num1 + props.num2);
  };

  const Subtraction = () => {
    setResult(props.num1 - props.num2);
  };

  const Multiplication = () => {
    setResult(props.num1 * props.num2);
  };

  const Division = () => {
    if (props.num2 !== 0) {
      setResult(props.num1 / props.num2);
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <div>
      <button onClick={Addition}>Add</button>
      <button onClick={Subtraction}>Subtract</button>
      <button onClick={Multiplication}>Multiply</button>
      <button onClick={Division}>Divide</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;
