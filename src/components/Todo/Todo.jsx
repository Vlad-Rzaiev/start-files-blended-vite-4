import Text from '../Text/Text';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/todosOps';
import { setCurrentTodo } from '../../redux/todosSlice';
import style from './Todo.module.css';

const Todo = ({ todo, idx }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditBtnClick = () => {
    dispatch(setCurrentTodo(todo));
  };

  const handleChangeComplete = () => {
    const newTodo = {
      id: todo.id,
      completed: !todo.completed,
    };

    dispatch(editTodo(newTodo));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {idx + 1}
      </Text>

      <input
        className={style.checkbox}
        type="checkbox"
        name="check"
        checked={todo.completed}
        onChange={handleChangeComplete}
      />

      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={handleEditBtnClick}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
