import { useTasks } from "../bll/useTasks";
import { TaskItem } from "./TaskItem";
import clsx from "clsx";
import styles from "./TaskItem.module.css";

type Props = {
  onSelected: (taskId: string | null, boardId: string | null) => void;
  selectId: string | null;
};

export function TaskList({ onSelected, selectId }: Props) {
  const { tasks, changeTask } = useTasks();

  const handleChanged = (taskId: string): void => {
    changeTask(taskId);
  };

  const handleReset = (): void => {
    onSelected(null, null);
  };

  if (tasks === null) {
    return (
      <div>
        <div>loading..</div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div>
        <div>no tasks</div>
      </div>
    );
  }

  const contentClassName = clsx({
    [styles.task_content]: true,
  });

  const tasksClassName = clsx({
    [styles.tasks]: true,
  });

  return (
    <div className={contentClassName}>
      <button onClick={handleReset}>reser</button>

      <ul className={tasksClassName}>
        {tasks?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              isSelect={task.id === selectId}
              onTaskSelected={onSelected}
              onTaskChanged={handleChanged}
            />
          );
        })}
      </ul>
    </div>
  );
}
