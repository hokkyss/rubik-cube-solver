import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import * as Moves from "../constants/moves";
import { Rubik } from "../components/elements";

import styles from "../styles/Result.module.css";

function Result({ cube }) {
  const [initialCube, setInitialCube] = useState(cube);
  const [moves, setMoves] = useState([""]);
  const [conditions, setConditions] = useState([cube]);
  const [chosenCondition, setChosenCondition] = useState(0);
  const [shown, setShown] = useState(cube);

  //a : R2 U F R
  //b : R2 U F R B
  //c : R U R U R
  //d : R2 U F
  //e : U' L2 U B2
  //f : R B L2 D2 B
  //g : R B L2 D2
  //h : https://rubiks-cube-solver.com/solution.php?cube=0345622264156363431323434511652114316154652516452643522

  useEffect(() => {}, []);
  useEffect(() => {
    const solution = Moves.solve(initialCube);
    setMoves(solution.moves);
    setConditions([...solution.conditions, solution.condition]);
  }, [initialCube]);

  useEffect(() => {}, [moves]);

  useEffect(() => {
    setShown(conditions[chosenCondition]);
  }, [conditions, chosenCondition]);

  const changeChosenCondition = (idx) => {
    setChosenCondition(idx);
  };

  return (
    <div id={styles.container} className="container">
      <Head>
        <title>Rubik's Cube Solver</title>
      </Head>

      <Rubik cube={shown} />

      <div className={styles.buttons}>
        {moves.map((value, index) => (
          <div
            id={index === chosenCondition ? styles.pressed : styles.normal}
            className={styles.steps}
            key={index}
            title={index === 0 ? "Initial" : `Step ${index}`}
            onClick={() => changeChosenCondition(index)}
          >
            {value}
          </div>
        ))}
        <div className={styles.steps} title="Back to home page">
          <Link href="/">&larr;</Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: { cube: params.cube }, // will be passed to the page component as props
  };
}

export default Result;
