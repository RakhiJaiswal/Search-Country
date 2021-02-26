import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "./Container";

function FetchApi() {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{country && <Container country={country} />}</div>;
}

export default FetchApi;
