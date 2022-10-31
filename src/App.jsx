import React, { useState } from "react";
const min = 0;
const max = 100;

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleRandomNumber = () => {
    const number = randomNumber(min, max);
    setCounter(number);
  };

  return (
    <main>
      <h1>Contador</h1>
      <h2>A minha primeira app em React</h2>
      <h3>Contador: {counter}</h3>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={handleRandomNumber}>Random</button>
    </main>
  );
}

export default App;
