import React, { useState } from "react";

function UseStateHookDemo() {
  // with hook useState
  const [count, setCount] = useState(10);

  function abc() {
    setCount(count + 1);
    console.log({ count });
  }

  return (
    <>
      <h1>Hello world {count}</h1>
      <button onClick={abc}>Increment</button>
    </>
  );
}
// without hook
//   let count = 10;

//   function abc() {
//     count++;
//     console.log({ count });
//   }

//   return (
//     <>
//       <h1>Hello world {count}</h1>
//       <button onClick={abc}>Increment</button>
//     </>
//   );

export default UseStateHookDemo;
