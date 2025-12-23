import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import React, { useId } from "react";

async function UsersTaskByID({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const data = await prisma.tasks.findMany({
    where: {
      userid: Number(id),
    },
  });
  return (
    <>
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">
              Task
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">
              Description
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((d, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                {d.tasktitle}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {d.taskdescription}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} className="px-6 py-4">
              <Link
                href="/users"
                className="inline-flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition"
              >
                ← Back
              </Link>
            </td>
          </tr>{" "}
        </tbody>
      </table>
    </>
  );
}

export default UsersTaskByID;
