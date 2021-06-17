import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Rubik } from "../components/elements";

function Home() {
  const router = useRouter();
  const [cube, setCube] = useState(
    "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
  );
  const [content, setContent] = useState("");

  useEffect(() => {}, []);

  const handleFileInput = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCube(e.target.result);
      setContent(e.target.result);
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
        <div className={styles.upperInput}>
          <h1>See your rubik on the right!</h1>
          <div className={styles.fileContent}>
            {content === "" ? "Insert your file!" : content}
          </div>
          <input
            type="file"
            id="file"
            onChange={handleFileInput}
            accept=".txt"
          />
        </div>
        <div className={styles.lowerInput}>
          <div className={styles.solveButton}>
            <Link href={`/${cube}`}>SOLVE</Link>
          </div>
        </div>
      </div>

      <Rubik cube={cube} />
    </div>
  );
}
export default Home;
