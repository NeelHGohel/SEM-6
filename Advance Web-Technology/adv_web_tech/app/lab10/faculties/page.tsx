import React from "react";

async function Faculty() {
  const dataTemp = await fetch(process.env.BASE_URL + "AdvFlutter");

  const data = await dataTemp.json();
  return (
    <>
      <table className="border-separate">
        <tr className="text-center">
          <th className="border-2">Name</th>
          <th className="border-2">Email</th>
          <th className="border-2">Address</th>
          <th className="border-2">Get More</th>
        </tr>
        {data.map((fac: any) => (
          <tr className="text-center">
            <td className="border-2">{fac.name}</td>
            <td className="border-2">{fac.email}</td>
            <td className="border-2">{fac.address}</td>
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

      {/* <div>
        {data.map((fac: any) => (
          <div>
            <h3>{fac.name}</h3>
            <h3>{fac.email}</h3>
            <h3>{fac.address}</h3>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Faculty;
