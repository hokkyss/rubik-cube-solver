import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Rubik } from "../components/elements";
import * as Moves from "../constants/moves";

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
          <h1>
            {content === ""
              ? "Insert your file!"
              : "See your rubik on the right!"}
          </h1>
          <div className={styles.fileContent}>
            {content === "" ? "Your file content will be here!" : content}
          </div>
          <input
            type="file"
            id="file"
            onChange={handleFileInput}
            accept=".txt"
          />
        </div>
        <div className={styles.lowerInput}>
          {content !== "" && (
            <>
              <div className={styles.leftLowerInput}>
                <div className={styles.buttons}>
                  <Link href={`/${cube}`}>SOLVE</Link>
                </div>
              </div>
              <div className={styles.rightLowerInput}>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.F(cube));
                  }}
                >
                  F
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.B(cube));
                  }}
                >
                  B
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.L(cube));
                  }}
                >
                  L
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.R(cube));
                  }}
                >
                  R
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.U(cube));
                  }}
                >
                  U
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.D(cube));
                  }}
                >
                  D
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.F_(cube));
                  }}
                >
                  F'
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.B_(cube));
                  }}
                >
                  B'
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.L_(cube));
                  }}
                >
                  L'
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.R_(cube));
                  }}
                >
                  R'
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.U_(cube));
                  }}
                >
                  U'
                </div>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setCube(Moves.D_(cube));
                  }}
                >
                  D'
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Rubik cube={cube} />
    </div>
  );
}
export default Home;
