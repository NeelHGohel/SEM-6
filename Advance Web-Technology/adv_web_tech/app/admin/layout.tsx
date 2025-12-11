import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>hello from the AdminLayout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default AdminLayout;
