import axios from "axios";

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/",
  headers: {
    "X-RapidAPI-Key": `330691264dmshf5c00984330162bp131752jsnae4eb909e5c2`,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
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
