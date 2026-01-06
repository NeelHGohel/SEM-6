import { editUser } from "@/app/actions/EditUser";
import { prisma } from "@/app/lib/prisma";
import React from "react";

async function EditByID({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const data = await prisma.users.findFirst({
    where: {
      userid: Number(id),
    },
    include: {
      tasks: true,
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Edit User
        </h2>

        <form action={editUser} className="space-y-4">
          {/* Hidden ID */}
          <input
            type="hidden"
            name="id"
            defaultValue={data?.userid as any as string}
          />

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              defaultValue={data?.username}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="text"
              name="password"
              defaultValue={data?.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg
                       font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditByID;
