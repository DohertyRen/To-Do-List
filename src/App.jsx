import "./App.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Todo from "./components/todo";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const createTodo = (e) => {
    e.preventDefault();

    if (text === "") {
      toast.error("Não é possível criar a tarefa em branco.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (text.length >= 25) {
      toast.error("A tarefa precisa ter menos de 25 caracteres.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const task = {
        id: id,
        title: text,
        isChecked: false,
      };

      setId(id + 1);
      setTodos([...todos, task]);
      setText("");
    }
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleCheck = (id) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setTodos(checkedTodos);
  };

  const editTodo = (id, editedText) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editedText };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  return (
    <>
      <form onSubmit={createTodo} className="task">
        <input
          type="text"
          className="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" className="button">
          <AddCircleOutlineIcon />
        </button>
      </form>

      {todos.map((todo) => (
        <Todo
          editTodo={editTodo}
          key={todo.id}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          todos={todo}
        />
      ))}
      <ToastContainer />
    </>
  );
}

export default App;
