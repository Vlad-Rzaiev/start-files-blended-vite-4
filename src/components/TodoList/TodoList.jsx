import { useSelector } from 'react-redux';
import { selectFilteredTodos } from '../../redux/todosSlice';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <>
      <Grid>
        {todos.map((todo, idx) => (
          <GridItem key={todo.id}>
            <Todo todo={todo} idx={idx} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
