import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function HooksCOunter(){
  let initialCount = 0
  const [count, setcount] = useState(initialCount);

  const incrementFive = () => {
  for(let i = 0; i < 4; i++){
    setcount(prevcount => prevcount + 1)
  }
  }
  return (
    <div>
      <button onClick = {() => setcount(prevcount => prevcount + 1)}>Add </button>
      <button onClick = {() => setcount(prevcount => prevcount - 1)}>Sub</button>
      <button onClick = {() => setcount(initialCount)}>Reset </button>
      <button onClick = {incrementFive}>By 5 </button>
      <p>{count}</p>
    </div>
  )
}


render(<HooksCOunter />, document.getElementById('root'));
