import React from "react";
import "./App.css";
import Comments from "./Components/Comments/Comments";
import CountPath from "./Components/Graphic/CountPath";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CountPath />
      <Comments />
    </div>
  );
}

export default App;
