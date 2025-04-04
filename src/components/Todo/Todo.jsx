import Text from '../Text/Text';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todosOps';
import { setCurrentTodo } from '../../redux/todosSlice';

const Todo = ({ todo, idx }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditBtnClick = () => {
    dispatch(setCurrentTodo(todo));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {idx + 1}
      </Text>

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
