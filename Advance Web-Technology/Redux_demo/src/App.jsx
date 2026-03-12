import React from "react";
import { AuthProvider, useAuth } from "./Lab-25/AuthContext";
import { useSelector } from "react-redux";
import Dashboard from "./Lab-26/Dashboard";
import Login from "./Lab-26/Login";

// LAb-26
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuth ? <Dashboard /> : <Login />}</div>;
}

export default App;

//Lab 25
// function Main() {
//   const { user } = useAuth();

//   return <div>{user ? <Dashboard /> : <Login />}</div>;
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Main />
//     </AuthProvider>
//   );
// }

// export default App;

//simple

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
