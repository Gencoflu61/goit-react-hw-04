
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

let params = {
  client_id: "50zWvK6-heD8uTRhjcNKzsxNPGbkBQgm9c6ST7CHWGU",
  query : '',
  page : '',
};

export async function getPhotos(query,page) {

  params.query = query;
  params.page = page;

  const response = await axios.get("/search/photos", { params });
    return response.data.results;
}