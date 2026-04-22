import axios from "axios";

const url = "http://localhost:3500/";

const endPoint = "articles";

/**
 *
 *
 *
 * @returns
 */
export const fetchListArticles = async () => {
  return await axios.get(url + endPoint);
};
