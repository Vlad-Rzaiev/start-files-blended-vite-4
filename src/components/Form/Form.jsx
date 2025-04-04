import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosOps';
import style from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();

  const hundleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      text: e.target.elements.search.value,
    };
    dispatch(addTodo(newTodo));

    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={hundleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
