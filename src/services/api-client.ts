import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d59e7a6eaee74240b8fb58a2fd3ec94e",
  },
});
