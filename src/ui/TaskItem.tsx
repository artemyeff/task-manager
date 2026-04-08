import { type Task } from "../dal/api-fake";
import styles from "./TaskItem.module.css";
import clsx from "clsx";

type Props = {
  task: Task;
  isSelect: boolean;
  onTaskSelected: (taskId: string | null, boardId: string | null) => void;
  onTaskChanged: (taskId: string) => void;
};

export function TaskItem({
  task,
  isSelect,
  onTaskSelected,
  onTaskChanged,
}: Props) {
  const handleClick = (taskId: string | null, boardId: string | null) => {
    onTaskSelected(taskId, boardId);
  };

  const taskClassName = clsx(styles.task, {
    [styles.selected]: isSelect,
    [styles.priority1]: task.attributes.priority === 1,
    [styles.priority2]: task.attributes.priority === 2,
    [styles.priority3]: task.attributes.priority === 3,
    [styles.priority4]: task.attributes.priority === 4,
  });

  const titleClassName = clsx({
    [styles.title]: true,
    [styles.compleate]: task.attributes.status === 2,
  });

  return (
    <li
      key={task.id}
      className={taskClassName}
      onClick={() => handleClick(task.id, task.attributes.boardId)}
    >
      <div>
        <span>Заголовок:</span>
        <span className={titleClassName}>{task.attributes.title}</span>
      </div>
      <div>
        <span>Статус:</span>
        <input
          type="checkbox"
          checked={task.attributes.status === 2 ? true : false}
          onChange={() => onTaskChanged(task.id)}
        />
      </div>
      <div>
        <span>Дата создания задачи:</span>
        <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
      </div>
    </li>
  );
}
