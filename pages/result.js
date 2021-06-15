import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";

import * as Moves from "../constants/moves";
import Rubik from "../components/elements/Rubik/Rubik";

function Result({ router }) {
  const [cube, setCube] = useState(
    router.query.cube
      ? router.query.cube
      : "YYYYYYYYYOOOOOOOOOGGGGGGGGGRRRRRRRRRBBBBBBBBBWWWWWWWWW"
  );

  const a = "WWRWWROORGGYOOYOOWGGGGGWBBWYYYRRBRRBBOOWBBWBBRRGYYGYYO"; // R2 U F R
  const b = "YBBWWROORRGYWOYWOWGGGGGWBBWYYORRYRRYWWBBBOBBORRGYYGGOO"; // R2 U F R B
  const c = "GWWGWBYYBRRBOOOOOORRWGGWGGORRGRROBBORGYWBBWBBYYWYYWYYG"; // R U R U R
  const d = "WWWWWWOOBGGYOOYOOWGGRGGRBBRYBBYRRYRROOOGBBGBBRRGYYWYYW"; // R2 U F
  const e = "YYWWWWWWWROOROOGBBGGGBGGRGGRRBRRORRBOBBGBBOOOWYYWYYYYY"; // U' L2 U B2
  const f = "BYGYWGOWGROWROWYRYBGYBGYBBGRRRRRYOOBWBWGBWYGGOOWBYWOOR"; // R B L2 D2 B

  useEffect(() => {}, []);

  useEffect(() => {
    const awal = Date.now();
    console.log(Moves.solve(f));
    const akhir = Date.now();

    console.log(akhir - awal);
  }, [cube]);

  return (
    <>
      <Head>
        <title>Solve rubik's cube!</title>
      </Head>
      <Rubik cube={cube} />
    </>
  );
}

export default withRouter(Result);
