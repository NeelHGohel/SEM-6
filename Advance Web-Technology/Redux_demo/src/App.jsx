import React from "react";
import { AuthProvider, useAuth } from "./Lab-25/AuthContext";
import Login from "./Lab-25/Login";
import Dashboard from "./Lab-25/Dashboard";

function Main() {
  const { user } = useAuth();

  return <div>{user ? <Dashboard /> : <Login />}</div>;
}

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

export default App;

// const NameContext = createContext();

// function Display() {
//   const name = useContext(NameContext);
//   return (
//     <>
//       <h1>{name}</h1>
//     </>
//   );
// }

// function App() {
//   const name = "neel";
//   return (
//     <>
//       <NameContext.Provider value={name}>
//         <Display />
//       </NameContext.Provider>
//       <h1>hello world</h1>
//     </>
//   );
// }

// export default App;
