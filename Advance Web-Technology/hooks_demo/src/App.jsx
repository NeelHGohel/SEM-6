import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 1000);
  });

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

// with hook useState
// function App() {
//   const [count, setCount] = useState(10);

//   function abc() {
//     setCount(count + 1);
//     console.log({ count });
//   }

//   return (
//     <>
//       <h1>Hello world {count}</h1>
//       <button onClick={abc}>Increment</button>
//     </>
//   );
// }

// without hook
// function App() {
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
// }

export default App;
