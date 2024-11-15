import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  const tab = selectedTab;
  // Filter the todo list based on the selected tab (All, Open, Completed)

  const filterTodoList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          todo={todo}
          isHireMichael={todo.input === "HIRED MICHAEL"} // Pass a prop to indicate if it's "Hire Michael"
        />
      ))}
    </>
  );
}
