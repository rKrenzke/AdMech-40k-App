import React, { useState } from "react";
import DoctrinaView from './DoctrinaView';
import './Doctrina.css';
import imperativeArray from '../../CodexArrays/Doctrina';

const Doctrinas = () => {
  const [imperatives, setImperatives] = useState(imperativeArray);
  const [active, setActive] = useState("doctrina");

  //TODO: decide how I'm going to track state changes to doctrinas (wasUsed?, isActive?)

  const displayImperatives = imperatives.map((doctrina) => {
    return (
      <DoctrinaView name={doctrina.name} opt={doctrina.optimization} dep={doctrina.deprecation}/>
    );
  });

  return (
    <div className="main">
      <h2>Doctrina Imperatives</h2>
      {displayImperatives}
    </div>
  );
};

export default Doctrinas;
