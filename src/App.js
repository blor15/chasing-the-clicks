import { React, useState, useEffect } from "react";

function App() {
  const storedCounts = Number(localStorage.getItem("counter"));
  const [counter, setCounter] = useState(
    Number.isInteger(storedCounts) ? storedCounts : 0
  );

  useEffect(() => {
    window.localStorage.setItem("counter", counter);
  }, [counter]);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const clear = () => {
    setCounter((count) => count === localStorage.clear());
  };

  return (
    <div className="counter">
      <h1>Chasing The Clicks</h1>
      <h2>{counter}</h2>
      <div className="click-me">
        <button onClick={increase}>Click Me</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
