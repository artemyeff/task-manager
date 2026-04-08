import clsx from "clsx";
import { useTaskDetails } from "../bll/useTaskDetails";
import styles from "./TaskDetails.module.css";

type Props = {
  taskId: string | null;
  boardId: string | null;
};

export function TaskDetails({ taskId, boardId }: Props) {
  const { taskDetails } = useTaskDetails(taskId, boardId);

  const className = clsx({
    [styles.task]: true,
  });

  return (
    <div className={className}>
      <h2>Task Datails</h2>

      <div>
        {!taskDetails && !taskId && "no selected task"}
        {(taskDetails && taskId && taskId !== taskDetails.id && "loading...") ||
          (!taskDetails && taskId && "loading...")}

        {/* {taskDetails.id !== taskId ? ( */}
        {taskDetails && taskId && taskDetails.id === taskId && (
          <>
            <div>
              <h3>title</h3>
              <h4>{taskDetails.attributes.title}</h4>
            </div>
            <div>
              <h3>BoardTitle</h3>
              <h4>{taskDetails.attributes.boardTitle}</h4>
            </div>
            <div>
              <h3>addedAt</h3>
              <h4>{taskDetails.attributes.addedAt}</h4>
            </div>
            <div>
              <h3>description</h3>
              <h4>{taskDetails.attributes.description}</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
