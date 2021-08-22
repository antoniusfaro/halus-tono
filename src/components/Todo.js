import { useState } from 'react';
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
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
