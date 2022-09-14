import { useDispatch } from "react-redux";
import { addNewAnec } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    dispatch(addNewAnec(e.target.anec.value));
    e.target.anec.value = "";
  };

  return (
    <form onSubmit={add}>
      <div>
        <input name="anec" />
      </div>
      <button>create</button>
    </form>
  );
};

export default AnecdoteForm;
