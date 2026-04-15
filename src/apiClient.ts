import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:4800",
});

// Je me donne 1 semaine pour maitriser Ts
