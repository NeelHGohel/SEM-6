import React from "react";
import { query } from "@/app/lib/db";

interface Task {
  TaskID: number;
  TaskTitle: string;
  TaskDescription: string;
  IsCompleted: boolean;
}

async function getTask() {
  const result = await query("SELECT * FROM TASKS");
  return result.rows as Task[];
}

async function Task() {
  const tasks = await getTask();

  // console.log(tasks);

  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <li key={t.TaskTitle}>{t.TaskDescription}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
