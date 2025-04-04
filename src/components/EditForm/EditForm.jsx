import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentTodo, selectCurrentTodo } from '../../redux/todosSlice';
import { useState } from 'react';
import { editTodo } from '../../redux/todosOps';
import style from './EditForm.module.css';

const EditForm = () => {
  const dispatch = useDispatch();
  const { text, id } = useSelector(selectCurrentTodo);
  const [editData, setEditData] = useState(text);

  const cancelUpdate = () => {
    dispatch(clearCurrentTodo());
  };

  const handleChange = e => {
    setEditData(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const editData = {
      id: id,
      text: e.target.elements.text.value,
    };

    dispatch(editTodo(editData));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
        value={editData}
        onChange={handleChange}
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
