"use server";

import React from "react";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function editUser(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.users.update({
    where: {
      userid: id,
    },
    data: {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    },
  });
  revalidatePath("/users");
  redirect("/users");
}

export { editUser };
