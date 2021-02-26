import React, { useEffect, useState } from "react";
import "./../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ handleinp }) {
  const [inp, setInput] = useState("");

  useEffect(() => handleinp(inp), [inp]);

  return (
    <div className="search-box">
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <input
        className="input"
        type="text"
        value={inp}
        onChange={(Event) => setInput(Event.target.value)}
        placeholder="Search for a country..."
      ></input>
    </div>
  );
}
export default SearchBar;
