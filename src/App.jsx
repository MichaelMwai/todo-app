import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState, useEffect } from "react";
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
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = todos.map((val, valIndex) => {
      if (valIndex === index) {
        return { ...val, complete: !val.complete };
      }
      return val;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  function handleHireMichael(e) {
    handleAddTodo("HIRED MICHAEL", true); // Adds "Hire Michael" as a completed task
  }

  const userName = "";

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    const { todos } = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(todos);
  }, []);

  return (
    <>
      <Header todos={todos} userName={userName} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Footer
        handleAddTodo={handleAddTodo}
        handleHireMichael={handleHireMichael}
      />
    </>
  );
}

export default App;
