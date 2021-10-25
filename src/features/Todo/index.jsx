import React, { useState } from "react";
import TodoList from "./compoenent/TodoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Learn JS NEW",
      status: "completed",
    },
    {
      id: 2,
      title: "Code JS NEW",
      status: "new",
    },
    {
      id: 3,
      title: "Learn Reactjs",
      status: "new",
    },
    {
      id: 4,
      title: "Learn JS",
      status: "new",
    },
  ];
  const [todoList, settodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");
  const handleTodoClick = (todo, idx) => {
    const newTodolit = [...todoList];
    newTodolit[idx] = {
      ...newTodolit[idx],
      status: newTodolit[idx]["status"] === "new" ? "completed" : "new",
    };
    settodoList(newTodolit);
  };
  const handleShowAllClick = () => setfilteredStatus("all");
  const handleShowNewClick = () => setfilteredStatus("new");
  const handleCompletedAllClick = () => setfilteredStatus("completed");
  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  console.log(renderedTodoList);
  return (
    <div>
      <h3>TODO LIST</h3>
      <TodoList todolist={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowNewClick}>Show New</button>
      <button onClick={handleCompletedAllClick}>Show Completed</button>
    </div>
  );
}

export default TodoFeatures;
