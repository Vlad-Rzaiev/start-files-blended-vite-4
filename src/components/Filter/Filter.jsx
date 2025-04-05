import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { filteredValue, selectFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filteredValue(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Filter;
