import React, { useEffect, useState } from "react";

function UseEffectHookDemo() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>Hello world {count}</h1>
      <button>Increment</button>
    </>
  );
}

export default UseEffectHookDemo;
