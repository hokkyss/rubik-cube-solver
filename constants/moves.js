function L(cube) {
  const asArray = cube.split("");

  const temp = [asArray[0], asArray[3], asArray[6]];
  asArray[0] = asArray[18];
  asArray[3] = asArray[21];
  asArray[6] = asArray[24];
  asArray[18] = asArray[45];
  asArray[21] = asArray[48];
  asArray[24] = asArray[51];
  asArray[45] = asArray[44];
  asArray[48] = asArray[41];
  asArray[51] = asArray[38];
  asArray[38] = temp[2];
  asArray[41] = temp[1];
  asArray[44] = temp[0];

  const temp2 = asArray[9];
  asArray[9] = asArray[15];
  asArray[15] = asArray[17];
  asArray[17] = asArray[11];
  asArray[11] = temp2;

  const temp3 = asArray[10];
  asArray[10] = asArray[12];
  asArray[12] = asArray[16];
  asArray[16] = asArray[14];
  asArray[14] = temp3;

  return asArray.join("");
}

function L_(cube) {
  return L(L(L(cube)));
}

function R(cube) {
  const asArray = cube.split("");

  const temp = [asArray[2], asArray[5], asArray[8]];
  asArray[2] = asArray[20];
  asArray[5] = asArray[23];
  asArray[8] = asArray[26];
  asArray[20] = asArray[47];
  asArray[23] = asArray[50];
  asArray[26] = asArray[53];
  asArray[47] = asArray[42];
  asArray[50] = asArray[39];
  asArray[53] = asArray[36];
  asArray[36] = temp[2];
  asArray[39] = temp[1];
  asArray[42] = temp[0];

  const temp2 = asArray[27];
  asArray[27] = asArray[33];
  asArray[33] = asArray[35];
  asArray[35] = asArray[29];
  asArray[29] = temp2;

  const temp3 = asArray[28];
  asArray[28] = asArray[30];
  asArray[30] = asArray[34];
  asArray[34] = asArray[32];
  asArray[32] = temp3;

  return asArray.join("");
}

function R_(cube) {
  return R(R(R(cube)));
}

function F(cube) {
  const asArray = cube.split("");

  const temp = [asArray[6], asArray[7], asArray[8]];
  asArray[6] = asArray[17];
  asArray[7] = asArray[14];
  asArray[8] = asArray[11];
  asArray[11] = asArray[45];
  asArray[14] = asArray[46];
  asArray[17] = asArray[47];
  asArray[45] = asArray[33];
  asArray[46] = asArray[30];
  asArray[47] = asArray[27];
  asArray[27] = temp[0];
  asArray[30] = temp[1];
  asArray[33] = temp[2];

  const temp2 = asArray[18];
  asArray[18] = asArray[24];
  asArray[24] = asArray[26];
  asArray[26] = asArray[20];
  asArray[20] = temp2;

  const temp3 = asArray[19];
  asArray[19] = asArray[21];
  asArray[21] = asArray[25];
  asArray[25] = asArray[23];
  asArray[23] = temp3;

  return asArray.join("");
}

function F_(cube) {
  return F(F(F(cube)));
}

function B(cube) {
  const asArray = cube.split("");

  const temp = [asArray[0], asArray[1], asArray[2]];
  asArray[0] = asArray[29];
  asArray[1] = asArray[32];
  asArray[2] = asArray[35];
  asArray[29] = asArray[53];
  asArray[32] = asArray[52];
  asArray[35] = asArray[51];
  asArray[51] = asArray[9];
  asArray[52] = asArray[12];
  asArray[53] = asArray[15];
  asArray[9] = temp[2];
  asArray[12] = temp[1];
  asArray[15] = temp[0];

  const temp2 = asArray[36];
  asArray[36] = asArray[42];
  asArray[42] = asArray[44];
  asArray[44] = asArray[38];
  asArray[38] = temp2;

  const temp3 = asArray[37];
  asArray[37] = asArray[39];
  asArray[39] = asArray[43];
  asArray[43] = asArray[41];
  asArray[41] = temp3;

  return asArray.join("");
}

function B_(cube) {
  return B(B(B(cube)));
}

function U(cube) {
  const asArray = cube.split("");

  const temp = [asArray[9], asArray[10], asArray[11]];
  asArray[9] = asArray[18];
  asArray[10] = asArray[19];
  asArray[11] = asArray[20];
  asArray[18] = asArray[27];
  asArray[19] = asArray[28];
  asArray[20] = asArray[29];
  asArray[27] = asArray[36];
  asArray[28] = asArray[37];
  asArray[29] = asArray[38];
  asArray[36] = temp[0];
  asArray[37] = temp[1];
  asArray[38] = temp[2];

  const temp2 = asArray[0];
  asArray[0] = asArray[6];
  asArray[6] = asArray[8];
  asArray[8] = asArray[2];
  asArray[2] = temp2;

  const temp3 = asArray[1];
  asArray[1] = asArray[3];
  asArray[3] = asArray[7];
  asArray[7] = asArray[5];
  asArray[5] = temp3;

  return asArray.join("");
}

function U_(cube) {
  return U(U(U(cube)));
}

function D(cube) {
  const asArray = cube.split("");

  const temp = [asArray[15], asArray[16], asArray[17]];
  asArray[15] = asArray[42];
  asArray[16] = asArray[43];
  asArray[17] = asArray[44];
  asArray[42] = asArray[33];
  asArray[43] = asArray[34];
  asArray[44] = asArray[35];
  asArray[33] = asArray[24];
  asArray[34] = asArray[25];
  asArray[35] = asArray[26];
  asArray[24] = temp[0];
  asArray[25] = temp[1];
  asArray[26] = temp[2];

  const temp2 = asArray[36];
  asArray[36] = asArray[42];
  asArray[42] = asArray[44];
  asArray[44] = asArray[38];
  asArray[38] = temp2;

  const temp3 = asArray[37];
  asArray[37] = asArray[39];
  asArray[39] = asArray[43];
  asArray[43] = asArray[41];
  asArray[41] = temp3;

  return asArray.join("");
}

function D_(cube) {
  return D(D(D(cube)));
}

function countDistanceToSolve(cube) {
  let count = 0;
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 9; j++) {
      count += cube[9 * i + j] == cube[9 * i + 4] ? 0 : 1;
    }
  }
  return count;
}

function solve(cube) {
  // use A* algorithm
  // catat last move, consecutive last move, condition, moves
  // meeting 25 times sama distance to solve
  let queue = [];
  const comparator = (a, b) =>
    a.distanceToEnd +
    a.moves.split(" ").length -
    (b.distanceToEnd + b.moves.split(" ").length);

  queue.push({
    lastMove: "",
    consecutive: 0,
    condition: cube,
    moves: "",
    distanceToEnd: countDistanceToSolve(cube),
  });

  while (queue.length > 0) {
    const { lastMove, consecutive, condition, moves, distanceToEnd } =
      queue.shift();
    if (moves.split(" ").length > 7) continue;

    if (countDistanceToSolve(condition) === 0) {
      return { moves };
    }

    console.log(moves);

    // next move
    {
      if (
        lastMove !== "B'" &&
        (lastMove !== "B" || (lastMove === "B" && consecutive < 2))
      ) {
        const afterB = B(condition);
        queue.push({
          lastMove: "B",
          consecutive: lastMove === "B" ? 2 : 1,
          condition: afterB,
          moves: lastMove === "" ? "B" : moves + " B",
          distanceToEnd: countDistanceToSolve(afterB),
        });
      }

      if (
        lastMove !== "F'" &&
        (lastMove !== "F" || (lastMove === "F" && consecutive < 2))
      ) {
        const afterF = F(condition);
        queue.push({
          lastMove: "F",
          consecutive: lastMove === "F" ? 2 : 1,
          condition: afterF,
          moves: lastMove === "" ? "F" : moves + " F",
          distanceToEnd: countDistanceToSolve(afterF),
        });
      }

      if (
        lastMove !== "L'" &&
        (lastMove !== "L" || (lastMove === "L" && consecutive < 2))
      ) {
        const afterL = L(condition);
        queue.push({
          lastMove: "L",
          consecutive: lastMove === "L" ? 2 : 1,
          condition: afterL,
          moves: lastMove === "" ? "L" : moves + " L",
          distanceToEnd: countDistanceToSolve(afterL),
        });
      }

      if (
        lastMove !== "R'" &&
        (lastMove !== "R" || (lastMove === "R" && consecutive < 2))
      ) {
        const afterR = R(condition);
        queue.push({
          lastMove: "R",
          consecutive: lastMove === "R" ? 2 : 1,
          condition: afterR,
          moves: lastMove === "" ? "R" : moves + " R",
          distanceToEnd: countDistanceToSolve(afterR),
        });
      }

      if (
        lastMove !== "U'" &&
        (lastMove !== "U" || (lastMove === "U" && consecutive < 2))
      ) {
        const afterU = U(condition);
        queue.push({
          lastMove: "U",
          consecutive: lastMove === "U" ? 2 : 1,
          condition: afterU,
          moves: lastMove === "" ? "U" : moves + " U",
          distanceToEnd: countDistanceToSolve(afterU),
        });
      }

      if (
        lastMove !== "D'" &&
        (lastMove !== "D" || (lastMove === "D" && consecutive < 2))
      ) {
        const afterD = D(condition);
        queue.push({
          lastMove: "D",
          consecutive: lastMove === "D" ? 2 : 1,
          condition: afterD,
          moves: lastMove === "" ? "D" : moves + " D",
          distanceToEnd: countDistanceToSolve(afterD),
        });
      }

      if (lastMove !== "B" && lastMove !== "B'") {
        const afterB_ = B_(condition);
        queue.push({
          lastMove: "B'",
          consecutive: 1,
          condition: afterB_,
          moves: lastMove === "" ? "B'" : moves + " B'",
          distanceToEnd: countDistanceToSolve(afterB_),
        });
      }

      if (lastMove !== "F" && lastMove !== "F'") {
        const afterF_ = F_(condition);
        queue.push({
          lastMove: "F'",
          consecutive: 1,
          condition: afterF_,
          moves: lastMove === "" ? "F'" : moves + " F'",
          distanceToEnd: countDistanceToSolve(afterF_),
        });
      }

      if (lastMove !== "L" && lastMove !== "L'") {
        const afterL_ = L_(condition);
        queue.push({
          lastMove: "L'",
          consecutive: 1,
          condition: afterL_,
          moves: lastMove === "" ? "L'" : moves + " L'",
          distanceToEnd: countDistanceToSolve(afterL_),
        });
      }

      if (lastMove !== "R" && lastMove !== "R'") {
        const afterR_ = R_(condition);
        queue.push({
          lastMove: "R'",
          consecutive: 1,
          condition: afterR_,
          moves: lastMove === "" ? "R'" : moves + " R'",
          distanceToEnd: countDistanceToSolve(afterR_),
        });
      }

      if (lastMove !== "U" && lastMove !== "U'") {
        const afterU_ = U_(condition);
        queue.push({
          lastMove: "U'",
          consecutive: 1,
          condition: afterU_,
          moves: lastMove === "" ? "U'" : moves + " U'",
          distanceToEnd: countDistanceToSolve(afterU_),
        });
      }

      if (lastMove !== "D" && lastMove !== "D'") {
        const afterD_ = D_(condition);
        queue.push({
          lastMove: "D'",
          consecutive: 1,
          condition: afterD_,
          moves: lastMove === "" ? "D'" : moves + " D'",
          distanceToEnd: countDistanceToSolve(afterD_),
        });
      }
    }

    queue.sort(comparator);
  }
}

export {
  L,
  L_,
  R,
  R_,
  F,
  F_,
  B,
  B_,
  U,
  U_,
  D,
  D_,
  countDistanceToSolve,
  solve,
};
