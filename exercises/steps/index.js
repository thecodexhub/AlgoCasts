// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  // *1
  // for (let i = 0; i < n; i++) {
  //   let stair = "";
  //   for (let j = 0; j < n; j++) {
  //     if (j <= i) {
  //       stair += "#";
  //     } else {
  //       stair += " ";
  //     }
  //   }
  //   console.log(stair);
  // }

  // *2
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  return steps(n, row, stair);
}

module.exports = steps;
