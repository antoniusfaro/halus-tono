import { useState } from 'react';
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import firebase from 'firebase/app';

const Todo = ({ todo, index }) => {
  const [checked, setChecked] = useState(todo.isCompleted);
  const updateTodoStatus = (isCompleted) => {
    firebase.database().ref('todos/' + index).set({
      task: todo.task,
      type: todo.type,
      isCompleted : isCompleted
    }, (error) => {
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        console.log(`Update todo index ke-${index} berhasil!`);
      }
    });
  };
  const handleChange = (ev) => {
    const isCompleted = ev.target.checked;
    setChecked(isCompleted);
    updateTodoStatus(isCompleted);
    if (isCompleted) {
      const audio = new Audio('/audio/task-complete.mp3');
      audio.play();
    }
  };
  return (
    <>
      <ListItem
        button
        style={{ backgroundColor: 'slateBlue' }}
      >
        <ListItemIcon>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </ListItemIcon>
        <ListItemText
          style={{ textDecoration: checked ? 'line-through' : 'none' }}
          primary={todo.task}
          secondary={todo.type} 
        />
      </ListItem>
      <Divider />
    </>
  )
}

export default Todo
