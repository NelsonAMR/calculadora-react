import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const handleNumber = value => setInput(input + value);
  const handleOperator = value => {
    if(!isNaN(parseInt(input[input.length - 1])) || typeof(input) == 'number' || input[input.length - 1] == ')'){
      setInput(input + value);
    }
  }
  const handleClear = () => setInput('');
  const handleErase = () => {
    if(input.toString().length > 1){
      setInput(input.toString().slice(0, -1));
    }else{
      setInput('');
    }
  }
  const handleResult = () => {
    if(input){
      setInput(evaluate(input));
    }
  }
  
  const handleBrackets = () => {
    if(!input.includes('(')){
      setInput(input + '(');
    }else if(!input.includes(')') && !isNaN(parseInt(input[input.length - 1]))){
      setInput(input + ')');
    }
  }

  return (
    <div className='App'>
      <div className="calculator-container">
        <Screen input={input}/>

        <div className='row'>
          <Button handleClick={handleClear}>C</Button>
          <Button handleClick={handleErase}>D</Button>
          <Button handleClick={handleOperator}>%</Button>
          <Button handleClick={handleOperator}>/</Button>
        </div>

        <div className='row'>
          <Button handleClick={handleNumber}>7</Button>
          <Button handleClick={handleNumber}>8</Button>
          <Button handleClick={handleNumber}>9</Button>
          <Button handleClick={handleOperator}>*</Button>
        </div>

        <div className='row'>
          <Button handleClick={handleNumber}>4</Button>
          <Button handleClick={handleNumber}>5</Button>
          <Button handleClick={handleNumber}>6</Button>
          <Button handleClick={handleOperator}>-</Button>
        </div>

        <div className='row'>
          <Button handleClick={handleNumber}>1</Button>
          <Button handleClick={handleNumber}>2</Button>
          <Button handleClick={handleNumber}>3</Button>
          <Button handleClick={handleOperator}>+</Button>
        </div>

        <div className='row'>
          <Button handleClick={handleBrackets}>( )</Button>
          <Button handleClick={handleNumber}>0</Button>
          <Button handleClick={handleOperator}>.</Button>
          <Button handleClick={handleResult}>=</Button>
        </div>
      </div>
    </div>
  )
}

export default App