import { useDispatch } from "react-redux";
import { addNewAnec } from "../reducers/anecdoteReducer";
import { saveAnec } from "../services/anecdote";
import { notify } from "./Notification";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (e) => {
    e.preventDefault();
    const anec = e.target.anec.value;
    const savedAnec = await saveAnec(anec);
    console.log(savedAnec);
    //console.log(anec);
    dispatch(addNewAnec(anec));
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
