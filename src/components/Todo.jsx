import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import "./Todo.css";
import EditTodo from "./EditTodo";

function Todo({ todos, deleteTodo, handleCheck, editTodo }) {
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <EditTodo
        editTodo={editTodo}
        todos={todos}
        open={open}
        handleDialog={handleDialog}
      />
      <div className="todo">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onClick={() => handleCheck(todos.id)}
        />
        <p
          className={todos.isChecked ? "checktext checked" : "checktext"}
          htmlFor="checkbox"
        >
          {todos.title}
        </p>
        <button className="editicon" onClick={() => handleDialog()}>
          <CreateIcon />
        </button>
        <button className="deleteicon" onClick={() => deleteTodo(todos.id)}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}

export default Todo;
