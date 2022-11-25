import { useState } from 'react';

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  function incrementCount() {
    setCount(count + 1);
  }
  function reduceCount() {
    //   no negative count
    setCount(count ? count - 1 : count);
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
