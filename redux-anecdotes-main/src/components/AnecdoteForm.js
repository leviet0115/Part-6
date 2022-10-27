import { useDispatch } from "react-redux";
import { createAnec } from "../reducers/anecdoteReducer";
import { notify } from "./Notification";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (e) => {
    e.preventDefault();
    const anec = e.target.anec.value;
    //console.log(anec);
    dispatch(createAnec(anec));
    e.target.anec.value = "";
    const msg = "You have added '" + anec + "'";
    notify(msg);
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
