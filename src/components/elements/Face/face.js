import styles from "./Face.module.css";

import { Block } from "..";

export function Face({ blocks, useless, no }) {
  return (
    <div id={useless ? styles.white : styles.black} className={styles.face}>
      {blocks.map((value, index) => (
        <Block block={value} key={`${no}${index}`} />
      ))}
    </div>
  );
}
