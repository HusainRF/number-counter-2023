import React, { useState } from 'react'
import './App.css';

function App() {
  const [counter , setCounter] = useState(0);
  const countIncrement = () =>{
    setCounter(counter +1);
  }

  const countDecrement = () =>{
    if(counter != 0 )
      setCounter(counter -1);
    else 
      alert("Counter can't be negative");
  }


  return (
    <>
      <div className='main_div'>
        <div className="center_div">
         <h1>{counter}</h1>
         <div>
          <button className='incdec-button'
            onClick={countIncrement}
          > Increment</button>
          <button className='incdec-button'
            onClick={countDecrement}
          > Decrement</button>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
