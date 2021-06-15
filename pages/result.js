import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";

import * as Moves from "../constants/moves";
import Rubik from "../components/elements/Rubik/Rubik";

function Result({ router }) {
  const [cube, setCube] = useState(
    "YYYYYYYYYGGGGGGGGGRRRRRRRRRBBBBBBBBBOOOOOOOOOWWWWWWWWW"
  );

  const a = "RGWWBRRGGWBYBYBGYYBOOOORGWBYWOYWGOWWGYBRRROYRROYBGGWOB";
  const b = "YYRGRYORGORWYBWROGBBRGWBOOYWRYYGRBOBBOGWYGRBGWBOGOWYOO";

  useEffect(() => {
    setCube(a);
  }, []);

  useEffect(() => {}, [cube]);

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
