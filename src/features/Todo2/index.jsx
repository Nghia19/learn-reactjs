import React, { useState } from "react";
import TodoList2 from "./compoenent/TodoList";

TodoFeatures2.propTypes = {};

function TodoFeatures2(props) {
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
  const removeTodo = (idx) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    settodoList(newTodoList);
  };
  return (
    <div>
      <h3>TODO LIST</h3>
      <TodoList2 todolist={todoList} onTodoClick={removeTodo} />
    </div>
  );
}

export default TodoFeatures2;
