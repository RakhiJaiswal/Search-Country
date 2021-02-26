import React, { useState, useEffect } from "react";
import "./../styles/Display.css";

import Card from "./Card";
import Modal from "./Modal";

function Display({ arr2 }) {
  const [arr, setArr] = useState(null);
  const [f, setF] = useState(false);

  const myfun = (e) => {
    let a = e.target.parentElement.id;
    let b = e.target.id;
    let c = e.target.parentElement.parentElement.id;

    if (
      e.target.parentElement.parentElement.className == "card" ||
      e.target.className == "card" ||
      e.target.parentElement.className == "card"
    ) {
      setArr(
        arr2.filter((value) => {
          if (value.name == b || value.name == c || value.name == a) {
            return value;
          }
        })
      );
      setF(true);
    }
  };
  return (
    <div
      className="displayArea"
      onClick={(Event) => {
        console.log(Event);
        myfun(Event);
      }}
    >
      {arr2.map((country) => (
        <Card
          key={country.numericCode}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        ></Card>
      ))}
      {f && <Modal arr={arr} f={f} setF={setF} />}
    </div>
  );
}

export default Display;
