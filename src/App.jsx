import './App.css'
import { useState } from 'react';
function App() {
    const [value, changeState] = useState(0);
  return (
    <>
    <div className="counter">{value}</div>
    <br />
    <button onClick={() => changeState(value-1)}>Decrement</button>
    <button onClick={() => changeState(value+1)}>Increment</button>
    </>
  );
}

export default App
