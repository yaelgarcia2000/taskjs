import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const NewTask = ({ setOpen, setTasks, tasks, title }) => {
  const [Task, setTask] = useState("");
  const AccionTask = () => {
    if (title) {
      const findTask = tasks.find((item) => item.task === title);
      findTask.task = Task;
      const filterTask = tasks.filter((item) => item.task !== Task);
      filterTask.push(findTask);
      setTasks(filterTask);
      setOpen(false);
      return;
    }
    if (Task) {
      const data = {
        id: new Date().getTime().toString(),
        task: Task,
        complete: false,
      };
      console.log(data);
      setOpen(false);
      setTasks([...[data], ...tasks]);
    } else {
      alert("Este campo es requerido!");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTask">
        <Form.Label>{title ? "Actualizar tarea" : "Nueva tarea"}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escribe tu nueva tarea"
          defaultValue={title}
          onChange={(event) => setTask(event.target.value)}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="md" onClick={AccionTask}>
          {title ? "Actualizar" : "Crear"}
        </Button>
      </div>
    </Form>
  );
};
