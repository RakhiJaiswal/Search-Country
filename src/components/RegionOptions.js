import React, { useEffect, useState } from "react";
import "./../styles/RegionOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function RegionOptions({ handlereg }) {
  const [region, setRegion] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => handlereg(region), [region]);
  return (
    <>
      <div onClick={() => setShow(!show)} className="filter-box">
        {" "}
        Filter by Region <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {show && (
        <div className="region">
          <ul
            onClick={(Event) => {
              setRegion(Event.target.innerHTML);
            }}
          >
            <li>All</li>
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default RegionOptions;
