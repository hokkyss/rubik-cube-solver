import styles from "./Face.module.css";
import Block from "../Block/Block";

export default function Face({ blocks, useless }) {
  return (
    <div id={useless ? styles.white : styles.black} className={styles.face}>
      {blocks.map((block) => (
        <Block block={block} />
      ))}
    </div>
  );
}
