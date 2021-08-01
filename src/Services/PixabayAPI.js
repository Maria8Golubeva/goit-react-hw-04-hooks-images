import axios from "axios";

const BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "21846437-66fd09c28b54c2b2cddc581a4";

function fetchImages(searchQuery, page) {
  return axios
    .get(
      `${BASIC_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((responce) => responce.data.hits);
}

export default fetchImages;
