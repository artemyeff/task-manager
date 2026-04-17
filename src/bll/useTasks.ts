import { useEffect, useState } from "react";
import { getTasks, type Task } from "../dal/api";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<Task> | null>(null);
  
    useEffect(() => {
      getTasks().then((json) => setTasks(json.data));
    }, []);
  
    const changeTask = (taskId: string) => {
      if (tasks) {
        tasks.map((t) =>
          t.id === taskId
            ? {
                ...t,
                attributes: {
                  ...t.attributes,
                  status: t.attributes.status === 2 ? 0 : 2,
                },
              }
            : t,
        );
      }
    };
  
    return { tasks, changeTask };
  }