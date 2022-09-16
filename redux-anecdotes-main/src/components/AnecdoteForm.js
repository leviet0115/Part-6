import { useDispatch } from "react-redux";
import { addNewAnec } from "../reducers/anecdoteReducer";
import { notify } from "./Notification";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    const anec = e.target.anec.value;
    console.log(anec);
    dispatch(addNewAnec(anec));
    e.target.anec.value = "";
    const msg = "You have added '" + anec + "'";
    notify(msg, dispatch);
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
