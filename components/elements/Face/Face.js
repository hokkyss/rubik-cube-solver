import styles from "./Face.module.css";
import Block from "../Block/block";

export default function Face({ blocks, useless, no }) {
  return (
    <div id={useless ? styles.white : styles.black} className={styles.face}>
      {blocks.map((value, index) => (
        <Block block={value} key={`${no}${index}`} />
      ))}
    </div>
  );
}
