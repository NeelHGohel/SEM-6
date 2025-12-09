import React from "react";

async function Users() {
  const dataTemp = await fetch(
    "https://67d0f1c3825945773eb2616e.mockapi.io/AdvFlutter"
  );
  const data = await dataTemp.json();
  return (
    <div>
      {data.map((u: any) => (
        <h3>{u.name}</h3>
      ))}
    </div>
  );
}

export default Users;
