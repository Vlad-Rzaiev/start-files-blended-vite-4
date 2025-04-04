import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTodo,
  selectError,
  selectLoading,
  selectTodos,
} from './redux/todosSlice';
import { useEffect } from 'react';
import { getTodos } from './redux/todosOps';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import TodoList from './components/TodoList/TodoList';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Text from './components/Text/Text';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const todos = useSelector(selectTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isEdit = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}

          <Filter />

          {loading && !error && <Loader />}
          {error && <ErrorMessage message={error} />}
          {todos.length > 0 && <TodoList />}
          {todos.length === 0 && !error && !loading && (
            <Text textAlign="center">We did not find any todo😯</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
