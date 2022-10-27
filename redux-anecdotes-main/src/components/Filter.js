import { useDispatch, useSelector } from "react-redux";
import { filterBy } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(filterBy(event.target.value));
  };
  
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={keyword} />
    </div>
  );
};

export default Filter;
