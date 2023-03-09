import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";

export default function EditTodo({ handleDialog, open, todos, editTodo }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [editedText, setEditedText] = useState(todos.title);

  const sendEditedText = () => {
    if (editedText.length >= 25) {
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
    } else if (editedText === "") {
      toast.error("Não é possível deixar a tarefa em branco.", {
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
      editTodo(todos.id, editedText);
      handleDialog();
    }
  };

  const cancelEdit = () => {
    handleDialog();
    setEditedText(todos.title);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Dialog color="" open={open} onClose={handleDialog}>
          <DialogTitle>Editando tarefa</DialogTitle>
          <DialogContent>
            <TextField
              onChange={(e) => setEditedText(e.target.value)}
              fullWidth
              hiddenLabel
              id="filled-hidden-label-small"
              defaultValue={editedText}
              variant="filled"
              size="small"
            />
          </DialogContent>
          <DialogActions>
            <Button style={{ color: "#ffffffde" }} onClick={cancelEdit}>
              Cancelar
            </Button>
            <Button style={{ color: "#ffffffde" }} onClick={sendEditedText}>
              Editar
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
