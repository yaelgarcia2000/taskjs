import React, { useState } from "react";
import { ModalForm } from "./Modal";
import { NewTask } from "./NewTask";
export const SeccionTask = ({ task, setTasks, tasks }) => {
  const [visible, setVisible] = useState(false);
  const checkTask = (check) => {
    const findTask = tasks.find((item) => item.id === task.id);
    findTask.complete = check;
    const filterTask = tasks.filter((item) => item.id !== task.id);
    filterTask.push(findTask);
    setTasks(filterTask);
  };
  const deleteTask = () => {
    const filterTask = tasks.filter((item) => item.id !== task.id);
    setTasks(filterTask);
  };

  return (
    <>
      <div className="d-flex mb-1 seccionTask align-items-center p-1">
        <input
          type="checkbox"
          className="p-2"
          onChange={(event) => checkTask(event.target.checked)}
          defaultChecked={task.complete}
        />
        <span className="p-1" onClick={() => setVisible(true)}>
          {task.task}
        </span>
        <span className="p-1 ms-auto text-danger" onClick={deleteTask}>
          Eliminar
        </span>
      </div>
      <ModalForm open={visible} setOpen={setVisible}>
        <NewTask setOpen={setVisible} setTasks={setTasks} tasks={tasks} title={task.task}/>
      </ModalForm>
    </>
  );
};
