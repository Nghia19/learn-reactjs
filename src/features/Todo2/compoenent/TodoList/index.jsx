import React from "react";
import PropTypes from "prop-types";
import classname from "classname";
import "./styles.scss";
TodoList2.propTypes = {
  todolist: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList2.defaultProps = {
  todolist: [],
  onTodoClick: null,
};
function TodoList2({ todolist, onTodoClick }) {
  const handleTodoClick = (idx) => {
    if (!onTodoClick) return;
    onTodoClick(idx);
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
          onClick={() => handleTodoClick(idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList2;
