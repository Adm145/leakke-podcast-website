import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT,
});


export const api = {
  send: async (method, url, payload, lng) => {

    const config = {
      headers: {
        'Accept-Language': lng
      }
    }

    if (method === "get") {
      const res = await instance[method](url, config);
      return res.data;
    } else {
      const res = await instance[method](url, payload);
      return res.data;
    }
  }
}
