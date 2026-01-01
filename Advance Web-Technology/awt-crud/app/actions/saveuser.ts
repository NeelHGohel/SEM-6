"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

async function saveuser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const tasktitle = formData.get("tasktitle") as string;
  const taskdescription = formData.get("taskdescription") as string;

  const user = await prisma.users.create({
    data: {
      username,
      password,
    },
  });

  await prisma.tasks.create({
    data: {
      tasktitle: tasktitle,
      taskdescription: taskdescription,
      iscompleted: "FALSE",
      userid: user.userid,
    },
  });

  revalidatePath("/users");
  redirect("/users");
}
export { saveuser };
