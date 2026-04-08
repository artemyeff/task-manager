import { useEffect, useState } from "react";
import { getTask, type TaskDetails } from "../dal/api";

export function useTaskDetails(
    selectedTaskId: string | null,
    boardId: string | null,
  ) {
    const [taskDetails, setTaskDetails] = useState<TaskDetails | null>(null);
  
    useEffect(() => {
      if (!boardId && !selectedTaskId) return;
  
      getTask(boardId, selectedTaskId).then((json) => setTaskDetails(json.data));
    }, [selectedTaskId, boardId]);
  
    return { taskDetails };
  }