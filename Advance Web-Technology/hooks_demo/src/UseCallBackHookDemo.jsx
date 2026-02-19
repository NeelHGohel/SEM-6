import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("child called");
  return <button onClick={handleClick}>Click here</button>;
});

function UseCallBackHookDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <ChildComponent handleClick={increment} />
      <h3>Count : {count}</h3>
    </div>
  );
}

export default UseCallBackHookDemo;
