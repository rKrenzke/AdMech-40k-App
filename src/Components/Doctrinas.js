import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../Styles/Doctrina.css";
import imperativeArray from "../CodexArrays/Doctrina";

const Doctrinas = () => {
  const [imperatives, setImperatives] = useState(imperativeArray);
  const [active, setActive] = useState("doctrina");

  //TODO: decide how I'm going to track state changes to doctrinas (wasUsed?, isActive?)

  const displayImperatives = imperatives.map((doctrina) => {
    return (
      <div>Create new individual doctrina component </div>
    );
  });

  const checkImpArray = () => {
    console.log(imperatives);
  };
  return (
    <div className="main">
      <h2>Doctrina Imperatives</h2>
      {displayImperatives}
      <button onClick={checkImpArray}>Check array</button>
    </div>
  );
};

export default Doctrinas;
