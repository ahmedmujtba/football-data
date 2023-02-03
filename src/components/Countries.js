import { useEffect, useState } from "react";
import { getCountries } from "../utils/api";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="countries">
      <h2>Countries</h2>
      {countries &&
        countries.map((country) => {
          return country;
        })}
    </div>
  );
};

export default Countries;
