import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>Task List</h1>
      </div>
      <div>{children}</div>
    </>
  );
}

export default layout;
