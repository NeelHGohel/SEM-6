import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>Hello from the Layout for login and Register</div>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default AuthLayout;
