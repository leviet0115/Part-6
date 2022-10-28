import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const saveAnec = async (anec) => {
  const response = await axios.post(baseUrl, anec);
  return response.data;
};

export const saveVote = async (id, anec) => {
  const url = baseUrl + "/" + id;
  const response = await axios.put(url, anec);
  return response.data;
};

export const anecServices = { getAll, saveAnec, saveVote };
