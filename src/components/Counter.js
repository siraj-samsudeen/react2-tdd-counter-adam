import { useState } from 'react';

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function reduceCount() {
    //   no negative count
    setCount((prevCount) => (prevCount ? prevCount - 1 : prevCount));
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={reduceCount}>Remove</button>
      <span>{count}</span>
      <button onClick={incrementCount}>Add</button>
    </div>
  );
}
