import { useContext } from 'react';
import {
  Container,
  List,
  makeStyles
}
from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from '../App';
// import { todos } from '../dummy/todos';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
  },
}));

const Todos = () => {
  const todos = useContext(TodosContext);
  const classes = useStyles();
  return (
    <Container
      style={{ backgroundColor: 'coral' }}
    >
      <List
        component="nav"
        className={classes.root}  
      >
      {
        todos[0] && todos.map((todo) => (
          <Todo
            todo={todo}
          />
        ))
      }
      </List>
    </Container>
  )
}

export default Todos
