import clsx from "clsx";
import { TaskList } from "./ui/TaskList";
import { TaskDetails } from "./ui/TaskDetails";
import { useTaskSelection } from "./bll/useTaskSelection";
import styles from "./MainPage.module.css";

export function MainPage() {
  const { setSelectedTaskId, selectedTaskId, boardId, setBoardId } =
    useTaskSelection();

  const handleSelectTaskId = (
    taskId: string | null,
    boardId: string | null,
  ): void => {
    setSelectedTaskId(taskId);
    setBoardId(boardId);
  };

  const className = clsx({
    [styles.main]: true,
  });

  return (
    <div>
      <h1>Trelly</h1>
      <div className={className}>
        <TaskList selectId={selectedTaskId} onSelected={handleSelectTaskId} />
        <TaskDetails boardId={boardId} taskId={selectedTaskId} />
      </div>
    </div>
  );
}
