import { useState, useEffect } from "react";
import CountriesFlag from "./ContriesFlag";

const Countries = () => {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  console.log({ countries });

  async function fetchCountriesData() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCountries(data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchCountriesData();
    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data))
    //   .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div
      className="countries"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        margin: "20px",
      }}
    >
      {countries.map((country, index) => (
        <CountriesFlag
          key={`${country.name}-${index}`}
          flag={country.flag}
          name={country.name}
        />
      ))}
    </div>
  );
};

export default Countries;
