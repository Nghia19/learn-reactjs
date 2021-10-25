import React from "react";
import PropTypes from "prop-types";
import classname from "classname";
import "./styles.scss";
TodoList.propTypes = {
  todolist: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
function TodoList({ todolist, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };
  return (
    <ul className="todo-list">
      {todolist.map((todo, idx) => (
        <li
          className={classname({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          key={todo.id}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
