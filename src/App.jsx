import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState } from "react";
import { Footer } from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodoText, isComplete = false) {
    const newTodoList = [
      ...todos,
      { input: newTodoText, complete: isComplete },
    ];
    setTodos(newTodoList);
  }

  function handleHireMichael(e) {
    handleAddTodo("HIRED MICHAEL", true); // Adds "Hire Michael" as a completed task
  }

  const userName = "Michael";

  return (
    <>
      <Header todos={todos} userName={userName} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Footer
        handleAddTodo={handleAddTodo}
        handleHireMichael={handleHireMichael}
      />
    </>
  );
}

export default App;
