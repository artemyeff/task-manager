
  
  type AttributesTaskDetails = {
    title: string;
    order: number;
    deadline: string | null;
    startDate: string | null;
    addedAt: string | null;
    priority: number;
    status: number;
    updatedAt: string | null;
    boardId: string;
    boardTitle: string;
    description: string | null;
    attachments: Array<string>;
  };
  
export  type TaskDetails = {
    id: string;
    attributes: AttributesTaskDetails;
  };

type GetTaskOutput = {
    data: TaskDetails
}

export const getTask = (boardId: string | null, taskId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch(
        "https://trelly.it-incubator.app/api/1.0/boards/" +
          boardId +
          "/tasks/" +
          taskId,
        {
          headers: {
            "api-key": "05d876e5-1b1f-4f43-ac99-2f532db66d5a",
          },
        },
      )
        .then((res) => res.json())

        return promise
}

type AttributesTask = {
    id: string;
    title: string;
    boardId: string;
    status: number;
    priority: number;
    addedAt: string;
    attachmentsCount: number;
  };
  
  export type Task = {
    id: string;
    attributes: AttributesTask;
  };

export type GlobalTaskListResponse = {
    data: Array<Task>
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = 
    fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
        headers: {
          "api-key": "05d876e5-1b1f-4f43-ac99-2f532db66d5a",
        },
      })
        .then((res) => res.json())

    return promise
} 