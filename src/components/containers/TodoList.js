import {
  Container,
  makeStyles
}
from "@material-ui/core";
import Todos from "../Todos";
import TopBar from "../TopBar";

const useStyles = makeStyles(() => ({
  container: {
    padding: '1.5em 1em',
    backgroundColor: '#aacccc'
  }
}));

const TodoList = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
    >
      <TopBar />
      <Todos />
    </Container>
  )
};

export default TodoList;
