import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Rubik } from "../components/elements";

function Home() {
  const [cube, setCube] = useState(
    "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
  );

  useEffect(() => {}, []);

  const handleFileInput = (e) => {
    console.log(e);

    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      setCube(e.target.result);
    };

    reader.readAsText(e.target.files[0]);
  };

  return (
    <div id={styles.container} className="container">
      <Head>
        <title>Rubik's Cube Solver</title>
        {/* icon is taken from 
          https://iconarchive.com/show/cristal-intense-icons-by-tatice/Rubiks-cube-icon.html */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.input}>
        <Link href={`${cube}`}>HEYYY</Link>
        <input type="file" id="file" onChange={handleFileInput} accept=".txt" />
      </div>

      <Rubik cube={cube} />
    </div>
  );
}
export default Home;
