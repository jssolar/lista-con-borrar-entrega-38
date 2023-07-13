import { useState } from "react";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import "./components/App.css";
const App = () => {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // evento para bloquear comportamientos por defecto
  };

  const handleChange = (e) => {
    return setTask(e.target.value); // condicion para capturar el valor ingresado(tarea)
  };

  const handleTask = () => {
    if (task !== "")
      //condicion para que o se agreguen tareas vacias
      setNewTask(newTask.concat(task));
    setTask(""); // condicion para dejar input en blanco
  };

  //========= aqui debo crear una funct que elimine la tarea que yo quiera, debo cre3ar un nuevo array sin elemento eliminado, lo puedo hacer con filter o slice, que son dos metodos que crean un nuevo arr y no modifican el original =========//

  const handleDelete = (borrar) => {
    const eliminar = newTask.filter((eliminar, indice) => {
      return indice !== borrar;
    });

    setNewTask(eliminar);
  };

  return (
    <>
      <div className="contenedor container-fluid lg-12 bg-black ">
        <form onSubmit={handleSubmit} className="container col-md-12">
          <input
            type="text"
            className="input row-md-8"
            onChange={handleChange}
            value={task}
          />
          <div className=" d-inline">
            <button
              className="boton btn btn-dark d-inline m-1"
              onClick={handleTask}
            >
              Add Task
            </button>
            <button className="boton btn btn-dark d-inline m-1">
              {newTask.length}
            </button>
            <button
              className="boton btn btn-danger d-inline m-1"
              onClick={handleTask}
            >
              Delete All
            </button>
          </div>
          <ul className="container">
            {
              newTask.length > 0 ? ( // condicion dice si hay o no tareas
                newTask.map((tarea, index) => (
                  <li
                    className="list-group-item lista p-1 text-danger"
                    key={index}
                  >
                    <AiFillCheckCircle /> {tarea}{" "}
                    <AiFillDelete onClick={() => handleDelete(index)} />
                  </li>
                ))
              ) : (
                <span className="no-hay-tareas">No hay tareas</span>
              )
              // a cada elemento tarea ejecuta enta funcion (lo que sigue despues de la flecha)
            }
          </ul>
        </form>
      </div>
    </>
  );
};

export default App;
