import { useEffect, useState } from "react";
import styles from "./Rubik.module.css";

import { Face } from "../";

export function Rubik({ cube }) {
  return (
    <div className={styles.rubikContainer}>
      <div className={styles.cube}>
        <Face useless={true} blocks={[]} />
        <Face useless={false} blocks={cube.split("").slice(0, 9)} no={0} />
        <Face useless={true} blocks={[]} />
        <Face useless={true} blocks={[]} />
        <Face useless={false} blocks={cube.split("").slice(9, 18)} no={1} />
        <Face useless={false} blocks={cube.split("").slice(18, 27)} no={2} />
        <Face useless={false} blocks={cube.split("").slice(27, 36)} no={3} />
        <Face useless={false} blocks={cube.split("").slice(36, 45)} no={4} />
        <Face useless={true} blocks={[]} />
        <Face useless={false} blocks={cube.split("").slice(45, 54)} no={5} />
        <Face useless={true} blocks={[]} />
        <Face useless={true} blocks={[]} />
      </div>
    </div>
  );
}
