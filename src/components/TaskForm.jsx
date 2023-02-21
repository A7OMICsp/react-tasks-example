import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl text-white mb-3 font-bold">Añade tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="w-full p-2 mb-2 rounded-lg"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full p-2 mb-2 rounded-lg"
        ></textarea>
        <button className="bg-indigo-500 hover:bg-indigo-400 rounded-lg px-4 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
