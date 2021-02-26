import React, { useState, useEffect } from "react";
import "./../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./../styles/dark.css";
function Header() {
  // const [class_header, setClass_header] = useState("header");
  // function changetheme() {
  //   if (class_header == "header") {
  //     setClass_header("header_dark");
  //   } else {
  //     setClass_header("header");
  //   }
  // }
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);
  return (
    <div
      className="header"
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      <h1>Where in the world?</h1>
      <div>
        {" "}
        <FontAwesomeIcon icon={faMoon} /> &nbsp;{" "}
        {mode === "dark" ? "Light " : "Dark"} Mode
      </div>
    </div>
  );
}
export default Header;
