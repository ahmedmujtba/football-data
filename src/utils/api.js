import axios from "axios";

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/",
};

export function getCountries() {
  return axios
    .get(`${options.url}countries`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
