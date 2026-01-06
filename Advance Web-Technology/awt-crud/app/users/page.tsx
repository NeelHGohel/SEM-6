import React from "react";
import { prisma } from "../lib/prisma";
import Link from "next/link";
import DeleteBtn from "../ui/DeleteBtn";
import DeleteUser from "../actions/DeleteUser";

async function Task() {
  const users = await prisma.users.findMany({});
  // console.log(tasks);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <td>
                <Link
                  href={"/users/add"}
                  className="inline-block rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
                >
                  Add
                </Link>
              </td>
            </tr>
            <tr>
              <th className="px-1 py-1 text-left text-sm font-semibold text-gray-700 uppercase border-b">
                UserID
              </th>
              <th className="px-1 py-1 text-left text-sm font-semibold text-gray-700 uppercase border-b">
                Name
              </th>
              <th className="px-1 py-1 text-left text-sm font-semibold text-gray-700 uppercase border-b">
                Status
              </th>
              <th className="px-1 py-1 text-left text-sm font-semibold text-gray-700 uppercase border-b">
                Edit
              </th>
              <th className="px-1 py-1 text-left text-sm font-semibold text-gray-700 uppercase border-b">
                Delete
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((u, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-1 py-1 text-sm text-gray-800">{u.userid}</td>
                <td className="px-1 py-1 text-sm text-gray-800 font-medium">
                  {u.username}
                </td>
                <td className="px-1 py-1">
                  <Link
                    href={`/users/${u.userid}`}
                    className="inline-block rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
                  >
                    More
                  </Link>
                </td>
                <td className="px-1 py-1">
                  <Link
                    href={`/users/edit/${u.userid}`}
                    className="inline-block rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-1 py-1">
                  <DeleteBtn id={u.userid} deletefn={DeleteUser} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Task;
