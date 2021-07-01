import React, {useState} from "react";
import CanticlesArray from "../../CodexArrays/Canticle";
import styles from "./Canticles.module.css";

const Canticles = () => {

  const [canticleArr, setCanticleArr] = useState(CanticlesArray);

  const activeCanticleHandler = (docName) => {
    let copyArr = [...canticleArr];
    copyArr.forEach(canticle => {
      if(canticle.name === docName){
        canticle.isActive = true;
      }
    })
    setCanticleArr(copyArr);
  };

  const canticleMapper = CanticlesArray.map((canticle) => {
    return (
      <div className={styles.canticle} onClick={(e) => {activeCanticleHandler(canticle.name)}}>
        <h3 className={styles.header}>{canticle.name}</h3>
        <p className={styles.body}>{canticle.rule}</p>
      </div>
    );
  });

  return (
    <div>
      <h2 className={styles.mainHeader}>Canticles of the Omnissiah</h2>
      <div className={styles.container}>{canticleMapper}</div>
    </div>
  );
};

export default Canticles;
