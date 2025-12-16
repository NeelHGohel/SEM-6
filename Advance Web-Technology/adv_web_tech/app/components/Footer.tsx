import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold text-white">YourBrand</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Building modern web experiences with performance and scalability
                in mind.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Subscribe
              </h3>
              <p className="mt-4 text-sm text-gray-400">
                Get product updates and announcements.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-l-md px-3 py-2 text-sm text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © 2025 YourBrand. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                🌐
              </a>
              <a href="#" className="hover:text-white">
                🐦
              </a>
              <a href="#" className="hover:text-white">
                💼
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
