"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

async function saveuser(formData: FormData) {
  const username = formData.get("username") as String;
  const password = formData.get("password") as String;
  const data = {
    username,
    password,
  };

  await prisma.users.create({ data });
  revalidatePath("/users");
  redirect("/users");
}
export { saveuser };
