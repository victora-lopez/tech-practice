import React from 'react';
import { useState } from 'react';
import './App.css';
import MyButton from '../components/MyButton';
import ShoppingList from '../components/ShoppingList';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
      setCount(count + 1);
  }


  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick}/>
      <br/>
      <MyButton count={count} onClick={handleClick}/>
      <h3>Rendering List + using JS</h3>
      <ShoppingList/>
    </div>
  );
}

export default App;
