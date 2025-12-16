import "@/app/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <script
          src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1"
          type="module"
        ></script>
        {/* <nav className="relative bg-black-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black/10">
          <div className="mx-auto max-w-full px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  data-command="--toggle"
                  data-commandfor="mobile-menu"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-black/5 hover:text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 in-aria-expanded:hidden"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 not-in-aria-expanded:hidden"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      href="/"
                      aria-current="page"
                      className="rounded-md bg-black-950/50 px-3 py-2 text-sm font-medium text-black"
                    >
                      Home
                    </Link>
                    <Link
                      href="/admin"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black/5 hover:text-black"
                    >
                      Admin
                    </Link>
                    <Link
                      href="/user"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black/5 hover:text-black"
                    >
                      User
                    </Link>
                     <Link
                      href="/user/1"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black/5 hover:text-black"
                    >
                      User By ID
                    </Link>
                    <Link
                      href="/login"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black/5 hover:text-black"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black/5 hover:text-black"
                    >
                      register
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>
        </nav> */}

        <div>{children}</div>
      </body>
    </html>
  );
}
// <html lang="en">
//   <head>
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
//       crossOrigin="anonymous"
//     />
//   </head>
//   <body>
//     <div className="row m-2">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/about"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/contact"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/users"
//                 >
//                   Users
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//     <div className="row">
//       <div>{children}</div>
//     </div>
//     <div className="row m-2">
//       <div>
//         <footer className="text-center text-lg-start bg-body-tertiary text-muted">
//           <div className="text-center p-4">
//             © 2025 Copyright:
//             <Link className="text-reset fw-bold" href="/">
//               darshan.ac.in
//             </Link>
//           </div>
//         </footer>
//       </div>
//     </div>
//   </body>
// </html>
