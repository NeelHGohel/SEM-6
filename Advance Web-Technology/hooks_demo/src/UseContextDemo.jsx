import { createContext, useContext } from "react";
const NameContext = createContext();
function C() {
  const name = useContext(NameContext);
  return <h1>{name}</h1>;
}

function B() {
  return <C />;
}

function UseContextDemo() {
  let name = "Neel";
  return (
    <NameContext.Provider value={name}>
      <B />
    </NameContext.Provider>
  );
}

export default UseContextDemo;
