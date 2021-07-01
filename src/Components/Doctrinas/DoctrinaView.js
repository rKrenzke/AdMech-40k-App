import styles from "./DoctrinaView.module.css";

const DoctrinaView = (props) => {
  console.log(props.doctrina)

  return (
    <div className={props.doctrina.isActive ? styles.active : styles.box} onClick={(e) => props.setActive(props.doctrina.name)}>
      <h4 className={styles.header}>{props.doctrina.name}</h4>
      <div className={styles.body}>
        <p className={styles.opt}>OPTIMIZATION: {props.opt}</p>
        <p className={styles.dep}>DEPRECATION: {props.dep}</p>
      </div>
    </div>
  );
};

export default DoctrinaView;
