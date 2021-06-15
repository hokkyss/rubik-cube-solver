import { useEffect, useState } from "react";
import styles from "./Rubik.module.css";

import Face from "../Face/Face";

export default function Rubik({ cube }) {
  return (
    <div className={styles.cube}>
      <Face useless={true} blocks={[]} />
      <Face useless={false} blocks={cube.split("").slice(0, 9)} />
      <Face useless={true} blocks={[]} />
      <Face useless={true} blocks={[]} />
      <Face useless={false} blocks={cube.split("").slice(9, 18)} />
      <Face useless={false} blocks={cube.split("").slice(18, 27)} />
      <Face useless={false} blocks={cube.split("").slice(27, 36)} />
      <Face useless={false} blocks={cube.split("").slice(36, 45)} />
      <Face useless={true} blocks={[]} />
      <Face useless={false} blocks={cube.split("").slice(45, 54)} />
      <Face useless={true} blocks={[]} />
      <Face useless={true} blocks={[]} />
    </div>
  );
}
