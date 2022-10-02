import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SeccionTask } from "./components/SeccionTask";
import { NewTask } from "./components/NewTask";
import { Alert } from "react-bootstrap";
import { ModalForm } from "./components/Modal";
function App() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const filterTask = (complete) => {
    if(search){
      const searchTask = tasks.filter(item => item.task.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return searchTask.filter(item => item.complete === complete)
    }
    return tasks.filter(item => item.complete === complete)
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center p-2"> Lista de tareas</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input placeholder="Buscar tareas" onChange={event => setSearch(event.target.value)} className="form-control" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {filterTask(false).map((item) => (
            <div className="col-12 col-md-7 mt-2" key={item.id}>
              <SeccionTask task={item} setTasks={setTasks} tasks={tasks}/>
            </div>
          ))}
          {!filterTask(false).length && (
            <div className="col-12 col-md-7">
              <Alert variant={"danger"}>No hay tareas disponibles!</Alert>
            </div>
          )}
        </div>

        <h3 className="p-2">Completados</h3>
        <div className="row justify-content-center mt-4">
          {filterTask(true).map((item) => (
            <div className="col-12 col-md-7 mt-3" key={item}>
              <SeccionTask task={item} setTasks={setTasks} tasks={tasks}/>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button
              className="btn btn-info form-control"
              onClick={() => setVisible(true)}
            >
              Nueva tarea
            </button>
          </div>
        </div>
        <ModalForm open={visible} setOpen={setVisible}>
          <NewTask setOpen={setVisible} setTasks={setTasks} tasks={tasks}/>
        </ModalForm>
      </div>
    </>
  );
}

export default App;
