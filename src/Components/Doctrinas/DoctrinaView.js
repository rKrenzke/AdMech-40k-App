import styles from "./DoctrinaView.module.css";

const DoctrinaView = (props) => {
  return (
    <div className={styles.box}>
      <h4 className={styles.header}>{props.name}</h4>
      <div className={styles.body}>
        <p className={styles.opt}>OPTIMIZATION</p>
        <p>{props.opt}</p>
        <p className={styles.dep}>DEPRECATION</p>
        <p>{props.dep}</p>
      </div>
    </div>
  );
};

export default DoctrinaView;
