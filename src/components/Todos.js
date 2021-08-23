import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <>
      {
        todos[0] && todos.map((todo) => (
          <Todo
            todo={todo}
          />
        ))
      }
    </>
  )
}

export default Todos
