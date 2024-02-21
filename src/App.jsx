import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };
  
  const handleClear = () => {
    setDisplayValue('0');
  };

  return (
    <>
    <h1 className='title'>CALCULATOR</h1>
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('÷')} className='operator'>÷</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('x')} className='operator'>x</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')} className='operator'>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')} className='operator'>=</button>
        <button onClick={() => handleButtonClick('+')} className='operator'>+</button>
        <button onClick={handleClear} className="clear">AC</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;
