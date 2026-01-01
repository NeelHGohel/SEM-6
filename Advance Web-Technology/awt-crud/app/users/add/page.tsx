import { saveuser } from "@/app/actions/saveuser";
import React from "react";

function AddUser() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        action={saveuser}
        className=" p-8 rounded-xl shadow-lg w-full max-w-md border-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Add User</h2>

        <div className="mb-4">
          <label className="block  mb-1">User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block  mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block  mb-1">Tasks</label>
          <input
            type="text"
            name="tasktitle"
            placeholder="Enter tasks"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block  mb-1">Tasks</label>
          <input
            type="text"
            name="taskdescription"
            placeholder="Enter tasks"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
