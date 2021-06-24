import React, { useState } from "react";
import styles from "./Legend.module.css";

const Legend = (props) => {
  const [commandPoints, setCommandPoints] = useState(0);

  const increasePointHandler = () => {
    setCommandPoints(commandPoints + 1);
  };

  const decreasePointHandler = () => {
    setCommandPoints(commandPoints - 1);
  };

  return (
    <div>
      <section>
        <h2>Command Points</h2>
        <div>
          <button onClick={increasePointHandler}>Increase</button>
          <p>{commandPoints}</p>
          <button onClick={decreasePointHandler}>Decrease</button>
        </div>
      </section>
      <section>
          <h2>Turn</h2>
          <p>{props.turn}</p>
          <button onClick={props.turnHandler}>Next Turn</button>
      </section>
    </div>
  );
};

export default Legend;
