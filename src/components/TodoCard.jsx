export function TodoCard(props) {
  const { todo, isHireMichael } = props; // Receive the isHireMichael prop

  return (
    <>
      <div
        className={`card todo-item ${isHireMichael ? "hire-michael" : ""} ${
          todo.complete ? "completed" : ""
        }`}
      >
        <p>{todo.input}</p>
        <div className="todo-buttons">
          <button disabled={todo.complete}>
            <h6>Done</h6>
          </button>
          <button>
            <h6>Delete</h6>
          </button>
        </div>
      </div>
    </>
  );
}
