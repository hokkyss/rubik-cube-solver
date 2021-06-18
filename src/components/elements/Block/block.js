import styles from "./Block.module.css";

export function Block({ block }) {
  return (
    <div
      id={styles.block}
      className={
        block === "Y"
          ? styles.Y
          : block === "W"
          ? styles.W
          : block === "R"
          ? styles.R
          : block === "O"
          ? styles.O
          : block === "G"
          ? styles.G
          : block === "B"
          ? styles.B
          : styles.grey
      }
    ></div>
  );
}
