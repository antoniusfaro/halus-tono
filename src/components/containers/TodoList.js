import { useContext } from 'react';
import {
  Container,
  List,
  ListSubheader,
  makeStyles
} from "@material-ui/core";
import Todos from "../Todos";
import TopBar from "../TopBar";
import TodoAdd from "./TodoAdd";
import { TodosContext } from '../../App';
import Todo from '../Todo';

const useStyles = makeStyles(() => ({
  container: {
    padding: '1.5em 1em',
    backgroundColor: '#aacccc'
  },
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 420,
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { todos, setTodos } = useContext(TodosContext);
  return (
    <Container
      className={classes.container}
    >
      <TopBar />
      <TodoAdd />
      <Container style={{ backgroundColor: 'coral' }}>
        <List component="nav" className={classes.root}>
          {
            todos.map((todo, index) => {
              return !todo.isCompleted
                ? <Todo todo={todo} index={index} />
                : ''
            })
          }
          <ListSubheader>Completed</ListSubheader>
          {
            todos.map((todo, index) => {
              return todo.isCompleted
                ? <Todo todo={todo} index={index} />
                : ''
            })
          }
        </List>
      </Container>
    </Container>
  )
};

export default TodoList;
