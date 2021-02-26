import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./../styles/Modal.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Modal({ arr, f, setF }) {
  const a = arr[0];

  return (
    <div id="modal" className="modal">
      <button
        className="close-btn"
        onClick={(e) => {
          return setF(false);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back{" "}
      </button>
      <br></br>
      <img className="img-modal" src={arr[0].flag}></img>
      <br></br>
      <h2>{a.name} </h2>
      <b>Population :</b> <span class="textm">{a.population}</span>
      <br></br>
      <b>Region :</b>
      <span class="textm">{a.region}</span>
      <br></br>
      <b>Capital :</b>
      <span class="textm">{a.capital}</span>
      <br></br>
      <b>Native Name :</b> <span class="textm">{a.nativeName}</span>
      <br></br>
      <b>Sub Region :</b> <span class="textm">{a.subregion}</span>
      <br></br>
      <b>Top Level Domain :</b>
      <span class="textm">{a.topLevelDomain}</span>
      <br></br>
      <b>Currencies :</b>
      <span class="textm">{a.currencies[0].name}</span>
      <br></br>
      <b>Languages :</b> <span class="textm">{a.languages[0].nativeName}</span>{" "}
    </div>
  );
}

export default Modal;
