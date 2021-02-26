import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import FetchApi from "./components/FetchApi";
import "./styles/dark.css";
function App() {
  return (
    <div className="App">
      <Header />
      <FetchApi />
    </div>
  );
}

export default App;
