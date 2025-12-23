import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>Task List</h1>
      </div>
      {children}
    </>
  );
}

export default layout;
