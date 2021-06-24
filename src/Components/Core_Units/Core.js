import React from "react";
import styles from "./Core.module.css";

const skitariiCore = ["Rangers", "Vanguard", "Sicarian Infiltrators", "Sicarian Ruststalkers", "Serberys Raiders", "Serberys Sulpherhounds", "Pteraxii Sterylizors", "Pteraxii Skystalkers", "Ironstrider Ballistarii", "Sydonian Dragoons"];
const cultMechanicusCore = ["Fulgurite Electro-Priests", "Corpuscarii Electro-Priests", "*Kastelan Robots (when within 3\" of Datasmith)"];

const Core = () => {
  

  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Core Units</h2>
      <h4 className={styles.subHeader}>Skitarii</h4>
      <ul className={styles.unitList}>{skitariiCore.map(unit => <li>{unit}</li>)}</ul>
      <h4 className={styles.subHeader}>Cult Mechanicus</h4>
      <ul className={styles.unitList}>{cultMechanicusCore.map(unit => <li>{unit}</li>)}</ul>
    </div>
  );
};

export default Core;
