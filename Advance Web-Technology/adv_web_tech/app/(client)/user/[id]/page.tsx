import React from "react";

async function userByID({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return <div>This this id {id} user</div>;
}

export default userByID;
