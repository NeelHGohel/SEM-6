import React from "react";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>This is the ClientLayout</div>
      <div>{children}</div>
    </>
  );
}

export default ClientLayout;
