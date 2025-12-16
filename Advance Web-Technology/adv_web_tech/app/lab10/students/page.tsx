import React from "react";

async function Student() {
  const dataTemp = await fetch(process.env.BASE_URL + "Matrimony");

  const data = await dataTemp.json();
  return (
    <>
      <table className="border">
        <tr className="text-center">
          <th className="border-2">Name</th>
          <th className="border-2">Email</th>
          <th className="border-2">Address</th>
          <th className="border-2">Gender</th>
          <th className="border-2">DOB</th>
          <th className="border-2">Hobbies</th>
          <th className="border-2">Get More</th>
        </tr>
        {data.map((stu: any) => (
          <tr className="text-center">
            <td className="border-2">{stu.name}</td>
            <td className="border-2">{stu.email}</td>
            <td className="border-2">{stu.address}</td>
            <td className="border-2">{stu.gender}</td>
            <td className="border-2">{stu.DOB}</td>
            <td className="border-2">{stu.hobbies}</td>
            <td className="border-2">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-lg px-5 py-2.5  text-sm  text-black bg-black-600  hover:bg-black-500  active:bg-black-700  focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 transition-all duration-200"
              >
                Click
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Student;
