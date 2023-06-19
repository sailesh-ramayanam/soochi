import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="ball">
      <h1>{count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default App;
