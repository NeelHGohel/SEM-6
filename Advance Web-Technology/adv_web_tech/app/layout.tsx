import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-between border-2 px-5 py-5 mx-0">
          <div className="">Logo</div>

          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </div>
          <div>Login</div>
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
