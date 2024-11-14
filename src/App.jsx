import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodoText) {
    const newTodoList = [...todos, { input: newTodoText, complete: false }];
    setTodos(newTodoList);
  }

  const userName = "Michael";

  return (
    <>
      <Header todos={todos} userName={userName} />
      <Tabs selectedTab={selectedTab} todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
