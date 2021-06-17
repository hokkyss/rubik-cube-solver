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
  // catat last move, conditions, moves
  let queue = [];
  const comparator = (a, b) =>
    a.distanceToEnd + a.moves.length - (b.distanceToEnd + b.moves.length);

  queue.push({
    lastMove: "",
    condition: cube,
    conditions: [cube],
    moves: ["»"],
    distanceToEnd: countDistanceToSolve(cube),
  });

  while (queue.length > 0) {
    const { lastMove, condition, conditions, moves, distanceToEnd } =
      queue.shift();

    if (countDistanceToSolve(condition) === 0) {
      return { conditions, moves };
    }

    console.log(moves.join(" "), moves.length + distanceToEnd);

    // console.log(moves, distanceToEnd + moves.split(" ").length);

    // next move
    {
      // F, F2, and F'
      if (lastMove !== "F'" && lastMove !== "F" && lastMove !== "F2") {
        const afterF = F(condition);
        queue.push({
          lastMove: "F",
          condition: afterF,
          conditions: conditions.concat(afterF),
          moves: moves.concat("F"),
          distanceToEnd: countDistanceToSolve(afterF),
        });

        const afterF2 = F(afterF);
        queue.push({
          lastMove: "F2",
          condition: afterF2,
          conditions: conditions.concat(afterF2),
          moves: moves.concat("F2"),
          distanceToEnd: countDistanceToSolve(afterF2),
        });

        const afterF_ = F(afterF2);
        queue.push({
          lastMove: "F'",
          condition: afterF_,
          conditions: conditions.concat(afterF_),
          moves: moves.concat("F'"),
          distanceToEnd: countDistanceToSolve(afterF_),
        });
      }

      // B, B2, and B'
      if (lastMove !== "B'" && lastMove !== "B" && lastMove !== "B2") {
        const afterB = B(condition);
        queue.push({
          lastMove: "B",
          condition: afterB,
          conditions: conditions.concat(afterB),
          moves: moves.concat("B"),
          distanceToEnd: countDistanceToSolve(afterB),
        });

        const afterB2 = B(afterB);
        queue.push({
          lastMove: "B2",
          condition: afterB2,
          conditions: conditions.concat(afterB2),
          moves: moves.concat("B2"),
          distanceToEnd: countDistanceToSolve(afterB2),
        });

        const afterB_ = B(afterB2);
        queue.push({
          lastMove: "B'",
          condition: afterB_,
          conditions: conditions.concat(afterB_),
          moves: moves.concat("B'"),
          distanceToEnd: countDistanceToSolve(afterB_),
        });
      }

      // L, L2, and L'
      if (lastMove !== "L'" && lastMove !== "L" && lastMove !== "L2") {
        const afterL = L(condition);
        queue.push({
          lastMove: "L",
          condition: afterL,
          conditions: conditions.concat(afterL),
          moves: moves.concat("L"),
          distanceToEnd: countDistanceToSolve(afterL),
        });

        const afterL2 = L(afterL);
        queue.push({
          lastMove: "L2",
          condition: afterL2,
          conditions: conditions.concat(afterL2),
          moves: moves.concat("L2"),
          distanceToEnd: countDistanceToSolve(afterL2),
        });

        const afterL_ = L(afterL2);
        queue.push({
          lastMove: "L'",
          condition: afterL_,
          conditions: conditions.concat(afterL_),
          moves: moves.concat("L'"),
          distanceToEnd: countDistanceToSolve(afterL_),
        });
      }

      // R, R2, and R'
      if (lastMove !== "R'" && lastMove !== "R" && lastMove !== "R2") {
        const afterR = R(condition);
        queue.push({
          lastMove: "R",
          condition: afterR,
          conditions: conditions.concat(afterR),
          moves: moves.concat("R"),
          distanceToEnd: countDistanceToSolve(afterR),
        });

        const afterR2 = R(afterR);
        queue.push({
          lastMove: "R2",
          condition: afterR2,
          conditions: conditions.concat(afterR2),
          moves: moves.concat("R2"),
          distanceToEnd: countDistanceToSolve(afterR2),
        });

        const afterR_ = R(afterR2);
        queue.push({
          lastMove: "R'",
          condition: afterR_,
          conditions: conditions.concat(afterR_),
          moves: moves.concat("R'"),
          distanceToEnd: countDistanceToSolve(afterR_),
        });
      }

      // U, U2, and U'
      if (lastMove !== "U'" && lastMove !== "U" && lastMove !== "U2") {
        const afterU = U(condition);
        queue.push({
          lastMove: "U",
          condition: afterU,
          conditions: conditions.concat(afterU),
          moves: moves.concat("U"),
          distanceToEnd: countDistanceToSolve(afterU),
        });

        const afterU2 = U(afterU);
        queue.push({
          lastMove: "U2",
          condition: afterU2,
          conditions: conditions.concat(afterU2),
          moves: moves.concat("U2"),
          distanceToEnd: countDistanceToSolve(afterU2),
        });

        const afterU_ = U(afterU2);
        queue.push({
          lastMove: "U'",
          condition: afterU_,
          conditions: conditions.concat(afterU_),
          moves: moves.concat("U'"),
          distanceToEnd: countDistanceToSolve(afterU_),
        });
      }

      // D, D2, and D'
      if (lastMove !== "D'" && lastMove !== "D" && lastMove !== "d2") {
        const afterD = D(condition);
        queue.push({
          lastMove: "D",
          condition: afterD,
          conditions: conditions.concat(afterD),
          moves: moves.concat("D"),
          distanceToEnd: countDistanceToSolve(afterD),
        });

        const afterD2 = D(afterD);
        queue.push({
          lastMove: "D2",
          condition: afterD2,
          conditions: conditions.concat(afterD2),
          moves: moves.concat("D2"),
          distanceToEnd: countDistanceToSolve(afterD2),
        });

        const afterD_ = D(afterD2);
        queue.push({
          lastMove: "D'",
          condition: afterD_,
          conditions: conditions.concat(afterD_),
          moves: moves.concat("D'"),
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
