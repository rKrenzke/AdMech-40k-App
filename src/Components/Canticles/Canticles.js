import React from "react";
import CanticlesArray from "../../CodexArrays/Canticle";
import styles from "./Canticles.module.css";

const Canticles = () => {
  const canticleMapper = CanticlesArray.map((canticle) => {
    return (
      <div>
        <h3 className={styles.header}>{canticle.name}</h3>
        <p>{canticle.rule}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Canticles of the Omnissiah</h2>
      <div>{canticleMapper}</div>
    </div>
  );
};

export default Canticles;
