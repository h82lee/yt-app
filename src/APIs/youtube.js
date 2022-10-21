import axios from "axios";

const KEY = "AIzaSyC1oeMrlkV-l0HNV9dJ7r4GVUvJdaxtSj0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
