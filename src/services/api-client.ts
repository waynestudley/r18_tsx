import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4e3ba49bae94ad38ef5cfce29e21e4a",
  },
});
