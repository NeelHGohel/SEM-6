"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export default async function DeleteUser(userid: number) {
  await prisma.tasks.deleteMany({
    where: { userid },
  });
  await prisma.users.delete({
    where: { userid },
  });
  revalidatePath("/users");
  redirect("/users");
}
