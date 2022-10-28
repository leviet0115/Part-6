import { useDispatch, useSelector } from "react-redux";
import { saveVote } from "../reducers/anecdoteReducer";
import { notify } from "./Notification";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);

  const anecdotes = [...state.anecdote];
  const keyword = state.filter;
  //console.log(keyword);

  const vote = (id) => {
    console.log("vote", id);
    //dispatch(voting(id));
    dispatch(saveVote(id));
    const anec = anecdotes.find((anec) => anec.id === id).content;
    const msg = "You have voted '" + anec + "'";
    notify(msg);
  };

  //console.log(anecdotes);

  if (anecdotes) {
    return anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter((anec) =>
        anec.content.toLowerCase().includes(keyword.toLowerCase())
      )
      .map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ));
  }
};

export default AnecdoteList;
