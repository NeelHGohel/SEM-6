import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default layout;
