import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="row m-2">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/users"
                    >
                      Users
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <div>{children}</div>
        </div>
        <div className="row m-2">
          <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
              <div className="text-center p-4">
                © 2025 Copyright:
                <Link className="text-reset fw-bold" href="/">
                  darshan.ac.in
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
