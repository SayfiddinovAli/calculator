import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [oldValue, setOldValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState('0');

  const handleNumberClick = (number) => {
    if (currentValue === '0' && number !== '.') {
      setCurrentValue(number);
      setDisplay(number);
    } else {
      setCurrentValue(currentValue + number);
      setDisplay(currentValue + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentValue === '') return;

    if (oldValue !== '' && operator !== null) {
      handleEqualClick();
    }

    setOldValue(currentValue);
    setCurrentValue('');
    setOperator(op);
  };

  const handleEqualClick = () => {
    if (oldValue === '' || currentValue === '' || operator === null) return;

    const firstValue = parseFloat(oldValue);
    const secondValue = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        return;
    }

    setDisplay(result);
    setCurrentValue(result.toString());
    setOldValue('');
    setOperator(null);
  };

  const handleClearClick = () => {
    setCurrentValue('');
    setOldValue('');
    setOperator(null);
    setDisplay('0');
  };

  return (
  <div className="container">
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        
        <button className='ac' onClick={handleClearClick}>AC</button>
        <button className='operator' onClick={() => handleOperatorClick('/')}>÷</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button className='operator' onClick={() => handleOperatorClick('*')}>×</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button className='operator' onClick={() => handleOperatorClick('-')}>-</button>
     

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button className='operator' onClick={() => handleOperatorClick('+')}>+</button>

        <button className='zero' onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button className='operator' onClick={handleEqualClick}>=</button>
       
      </div>
    </div>
 
  </div>  
  );
}

export default App;
