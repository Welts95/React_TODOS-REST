import { useRef, useState } from "react";

export function TodoItem({ todo, onDeleteTodo, onTodoUpdated }) {
  const titleRef = useRef();
  const detailsRef = useRef();
  const [titol, setTitol] = useState(todo.title);
  const [detalls, setTDetalls] = useState(todo.details);
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <>
      <div className="Item-TODO">
        <li
          className={todo.completed ? "completed" : "pending"}
          onClick={() => {
            onTodoUpdated({ ...todo, completed: !todo.completed });
          }}
        >
          <label className="Titol-TODO">{todo.title}</label>
          <br />
          <label className="Detalls-TODO">{todo.details}</label>
        </li>
        <span
          className="Modificar-TODO"
          onClick={() => setMostrarForm((s) => !s)}
        >
          {"✏️"}
        </span>
        <span
          className="Eliminar-TODO"
          onClick={() => onDeleteTodo({ ...todo, id: todo.id })}
        >
          {"🗑️"}
        </span>
        <div
          className="FormulariModificar-TODO"
          style={{ display: mostrarForm ? "block" : "none" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const title = titleRef.current.value;
              const details = detailsRef.current.value;
              titleRef.current.value = todo.title;
              detailsRef.current.value = todo.details;
              onTodoUpdated({ ...todo, title, details });
              setMostrarForm((s) => !s);
            }}
          >
            {"Títol: "}
            <input
              ref={titleRef}
              value={titol}
              onChange={(e) => setTitol(e.target.value)}
            />
            <br />
            {"Detalls: "}
            <input
              ref={detailsRef}
              value={detalls}
              onChange={(e) => setTDetalls(e.target.value)}
            />
            <br />
            <input className="Boton" type="submit" value="Modificar" />
          </form>
        </div>
      </div>
    </>
  );
}
