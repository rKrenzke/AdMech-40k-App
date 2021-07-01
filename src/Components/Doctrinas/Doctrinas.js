import React, { useState } from "react";
import DoctrinaView from './DoctrinaView';
import './Doctrina.css';
import imperativeArray from '../../CodexArrays/Doctrina';

const Doctrinas = () => {
  const [imperativeArr, setImperativeArr] = useState(imperativeArray);

  const activeImperativeHandler = (docName) => {
    let copyArr = [...imperativeArr];
    copyArr.forEach(doctrina => {
      if(doctrina.name === docName){
        doctrina.isActive = true;
      }
    })
    setImperativeArr(copyArr);
  };

  const displayImperatives = imperativeArr.map((doctrina) => {
    return (
      <DoctrinaView doctrina={doctrina} opt={doctrina.optimization} dep={doctrina.deprecation} setActive={activeImperativeHandler}/>
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
