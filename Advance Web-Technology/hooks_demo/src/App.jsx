import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// use of useEffect hook
function App() {
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
