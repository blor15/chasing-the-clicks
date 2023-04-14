import { React, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div className="counter">
      <h1>Chasing The Clicks</h1>
      <h2>{counter}</h2>
      <div className="clicker">
        <button onClick={increase}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
