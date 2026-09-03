import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="section">
      <h2>Counter App</h2>

      <div className="count">{count}</div>

      {count === 0 && (
        <p className="message">Minimum limit reached</p>
      )}

      <div className="buttons">
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }

  return (
    <div className="section">
      <h2>Random Number Generator</h2>

      <div className="random-number">
        {number === null ? (
          <p>No number generated yet</p>
        ) : (
          <p>{number}</p>
        )}
      </div>

      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>React State Management</h1>

      <Counter />

      <RandomNumberGenerator />
    </div>
  );
}

export default App;