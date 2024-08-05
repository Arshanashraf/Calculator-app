import  { useState } from 'react';
import Calculator from './Component/Calculator';
import './App.css';

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleNum1Change = (e:any) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e:any) => {
    setNum2(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <Calculator num1={num1} num2={num2} />
    </div>
  );
};

export default App;
