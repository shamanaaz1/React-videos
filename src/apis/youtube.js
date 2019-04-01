import axios from "axios";

const KEY = "AIzaSyDNVj8j6K7jD28VojgVBr4Nrb6Ibu_Xsac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
