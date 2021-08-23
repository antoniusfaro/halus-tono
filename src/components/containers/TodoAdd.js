import { useState, useContext } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase/app';
import { TodosContext } from '../../App';

const TodoAdd = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const initialTodo = '';
  const [todo, setTodo] = useState(initialTodo);
  const handleChange = (ev) => {
    console.log('ok');
    setTodo(ev.target.value);
  };
  const addTodo = (id, task, type) => {
    firebase.database().ref('todos/' + id).set({
      task: task,
      type: type,
      isCompleted: false
    });
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    setTodos((prevState) => [
      ...prevState,
      {
        task: todo,
        type: 'task',
        isCompleted: false
      }
    ]);
    addTodo(todos.length, todo, 'task');
    setTodo(initialTodo);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
      style={{
        padding: '0.5em 1.5em',
        backgroundColor: '#ffeeee'
      }}
    >
      <TextField
        placeholder="Add a task"
        autoFocus
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddIcon />
            </InputAdornment>
          ),
        }}
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoAdd;
