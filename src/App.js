import "./App.css";
import "antd/dist/antd.css";
// import Card1 from "./components/Card1";
import Home from "./components/Home";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import React from "react";

// const GlobalStyle = createGlobalStyle`
// body {
//   background-color: ${(props) =>
//     props.theme.mode === "dark" ? "#111" : "#EEE"};
//   color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}

// }
// `;

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
