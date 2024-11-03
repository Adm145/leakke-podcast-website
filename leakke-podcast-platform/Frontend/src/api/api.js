import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT
});

const instanceYoutube = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API_KEY
})

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

export const youtubeApi = {
  send: async () => {
    const res = await instanceYoutube['get']();
    return res.data;
  }
}