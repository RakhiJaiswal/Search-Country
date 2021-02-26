import React from "react";
import "./../styles/Card.css";
function Card(props) {
  return (
    <div className="card" id={props.name}>
      <img src={props.flag}></img>
      <div className="desc">
        <h3>{props.name} </h3>
        <b> Population :</b> <span class="text"> {props.population}</span>
        <br></br>
        <b> Region : </b> <span class="text">{props.region}</span>
        <br></br>
        <b> Capital :</b>
        <span class="text">{props.capital} </span>
      </div>
    </div>
  );
}

export default Card;
