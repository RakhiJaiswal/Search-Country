import React, { useEffect, useState } from "react";
import RegionOptions from "./RegionOptions";
import SearchBar from "./SearchBar";
import Display from "./Display";
import "./../styles/Container.css";
function Container({ country }) {
  const [arr2, setArr2] = useState([]);

  const handleinp = (inp) => {
    if (inp == "") {
      setArr2(country);
    } else {
      setArr2(
        country.filter((value) => {
          if (value.name.toLowerCase().includes(inp.toLowerCase()))
            return value;
        })
      );
    }
  };

  const handlereg = (val) => {
    if (val == "" || val == "All") {
      setArr2(country);
    } else {
      setArr2(
        country.filter((value) => {
          return value.region === val;
        })
      );
    }
  };
  return (
    <div className="container">
      <div className="filterHeader">
        <SearchBar handleinp={handleinp} />
        <RegionOptions handlereg={handlereg} />
      </div>
      <div>
        <Display arr2={arr2} />
      </div>
    </div>
  );
}
export default Container;
