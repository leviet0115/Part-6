import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const saveAnec = async (anec) => {
  const response = await axios.post(baseUrl, { content: anec });
  return response.data;
};

export const anecServices = { getAll, saveAnec };
