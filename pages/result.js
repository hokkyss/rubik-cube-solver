import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";

import * as Moves from "../constants/moves";
import Rubik from "../components/elements/Rubik/rubik";

import styles from "../styles/Result.module.css";

function Result({ router }) {
  const [cube, setCube] = useState(
    router.query.cube
      ? router.query.cube
      : "YYYYYYYYYOOOOOOOOOGGGGGGGGGRRRRRRRRRBBBBBBBBBWWWWWWWWW"
  );
  const [moves, setMoves] = useState([""]);
  const [conditions, setConditions] = useState([cube]);
  const [chosenCondition, setChosenCondition] = useState(0);
  const [shown, setShown] = useState(cube);

  const a = "WWRWWROORGGYOOYOOWGGGGGWBBWYYYRRBRRBBOOWBBWBBRRGYYGYYO"; // R2 U F R
  const b = "YBBWWROORRGYWOYWOWGGGGGWBBWYYORRYRRYWWBBBOBBORRGYYGGOO"; // R2 U F R B
  const c = "GWWGWBYYBRRBOOOOOORRWGGWGGORRGRROBBORGYWBBWBBYYWYYWYYG"; // R U R U R
  const d = "WWWWWWOOBGGYOOYOOWGGRGGRBBRYBBYRRYRROOOGBBGBBRRGYYWYYW"; // R2 U F
  const e = "YYWWWWWWWROOROOGBBGGGBGGRGGRRBRRORRBOBBGBBOOOWYYWYYYYY"; // U' L2 U B2
  const f = "BYGYWGOWGROWROWYRYBGYBGYBBGRRRRRYOOBWBWGBWYGGOOWBYWOOR"; // R B L2 D2 B

  useEffect(() => {
    setCube(f);
  }, []);

  useEffect(() => {
    const solution = Moves.solve(cube);
    setMoves(solution.moves);
    setConditions(solution.conditions);
  }, [cube]);

  useEffect(() => {}, [moves]);

  useEffect(() => {
    setShown(conditions[chosenCondition]);
  }, [conditions, chosenCondition]);

  const changeChosenCondition = (idx) => {
    setChosenCondition(idx);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Solve rubik's cube!</title>
      </Head>

      <div className={styles.rubikContainer}>
        <Rubik cube={shown} />
      </div>
      <div className={styles.buttons}>
        {moves.map((value, index) => (
          <div
            id={styles.pressable}
            className={styles.steps}
            key={index}
            title={index === 0 ? "initial" : `step ${index}`}
            onClick={() => setChosenCondition(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Result);
