import axios from "axios";

export const FetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("error fetching data from api, error", err);
      return err;
    });
};
