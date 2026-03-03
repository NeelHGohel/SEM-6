import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseActionStateHookDemo from "./useActionStateHookDemo";
import UseStateHookDemo from "./UseStateHookDemo";
import UseEffectHookDemo from "./UseEffectHookDemo";
import UseCallBackHookDemo from "./UseCallBackHookDemo";
import UseOptimisticHookDemo from "./UseOptimisticHookDemo";
import UseContextDemo from "./UseContextDemo";

function App() {
  return (
    <>
      {/* Use State Hook Demo     */}
      {/* <UseStateHookDemo></UseStateHookDemo> */}

      {/* Use Effect Hook Demo     */}
      {/* <UseEffectHookDemo></UseEffectHookDemo> */}

      {/* Use Action State Hook Demo */}
      {/* <UseActionStateHookDemo></UseActionStateHookDemo> */}

      {/* Use Call Back Hook Demo */}
      {/* <UseCallBackHookDemo></UseCallBackHookDemo> */}

      {/* Use Opmistic Hook Demo */}
      {/* <UseOptimisticHookDemo></UseOptimisticHookDemo> */}

      {/* Use Context Hook Demo */}
      <UseContextDemo></UseContextDemo>
    </>
  );
}

export default App;
