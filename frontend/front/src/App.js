import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import TableData from "./components/TableData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Main />
      <TableData />
    </>
  );
};

export default App;
