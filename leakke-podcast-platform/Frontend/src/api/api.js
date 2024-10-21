import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT,
});

const getConfig = () => { }

export const api = {
  send: async (method, url, payload) => {
    if (method === "get" || method === "delete") {
      const res = await instance[method](url, getConfig());
      return res.data;
    } else {
      const res = await instance[method](url, payload, getConfig());
      return res.data;
    }
  }
}