"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative bg-black-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black/10">
      {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
      <div className="mx-auto max-w-full px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="absolute inset-y-0 left-0 flex items-center sm:hidden p-2 rounded-md text-black-400 hover:bg-black/5 hover:text-black"
          >
            {!mobileOpen ? (
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {/* Logo + Desktop Links */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-auto"
            />

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/lab10"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black "
                >
                  Dashboard
                </Link>
                <Link
                  href="/lab10/faculties"
                  className="rounded-md px-3 py-2 text-sm text-black-300 hover:bg-black/5 hover:text-black"
                >
                  Faculties
                </Link>
                <Link
                  href="/lab10/products"
                  className="rounded-md px-3 py-2 text-sm text-black-300 hover:bg-black/5 hover:text-black"
                >
                  Products
                </Link>
                <Link
                  href="/lab10/students"
                  className="rounded-md px-3 py-2 text-sm text-black-300 hover:bg-black/5 hover:text-black"
                >
                  Students
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative ml-3">
            <Menu.Button className="flex rounded-full">
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right bg-black-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
              <Menu.Item>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-black/5"
                >
                  Your Profile
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-black/5"
                >
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-black/5"
                >
                  Sign out
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md bg-black-900 text-black"
          >
            Dashboard
          </Link>
          <Link
            href="/team"
            className="block px-3 py-2 rounded-md text-black-300 hover:bg-black/5"
          >
            Team
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 rounded-md text-black-300 hover:bg-black/5"
          >
            Projects
          </Link>
          <Link
            href="/calendar"
            className="block px-3 py-2 rounded-md text-black-300 hover:bg-black/5"
          >
            Calendar
          </Link>
        </div>
      )}
    </nav>
  );
}
