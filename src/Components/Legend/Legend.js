import React, { useState } from "react";
import styles from "./Legend.module.css";

const Legend = (props) => {
  const [commandPoints, setCommandPoints] = useState(0);
  console.log(commandPoints);

  const increasePointHandler = () => {
    setCommandPoints(prevState => {
        return prevState + 1});
  };

  const decreasePointHandler = () => {
    setCommandPoints(prevState => {
        if(prevState === 0){
            return 0;
        }else{
            return prevState - 1};
        })
  };

  return (
    <div className={styles.box}>
      <section>
        <h2 className={styles.header}>Command Points</h2>
        <p className={styles.number}>{commandPoints}</p>
        <div className={styles.buttonBox}>
          <button className={styles.button} onClick={decreasePointHandler}>
            &#8722;
          </button>
          <button className={styles.button} onClick={increasePointHandler}>
            &#43;
          </button>
        </div>
      </section>
      <section>
        <button className={styles.turnButton} onClick={props.turnHandler}><span>{props.turn}</span></button>
        <h2 className={styles.header}>Turn</h2>
      </section>
    </div>
  );
};

export default Legend;
