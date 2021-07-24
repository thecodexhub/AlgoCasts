// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, i = 0, level = "") {
  // *1
  // const midpoint = Math.floor((2 * n - 1) / 2);
  // for (let i = 0; i < n; i++) {
  //   let level = "";
  //   for (let j = 0; j < 2 * n - 1; j++) {
  //     if (j >= midpoint - i && j <= midpoint + i) {
  //       level += "#";
  //     } else {
  //       level += " ";
  //     }
  //   }
  //   console.log(level);
  // }

  // *2
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (n === i) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, i + 1);
  }

  if (level.length >= midpoint - i && level.length <= midpoint + i) {
    level += "#";
  } else {
    level += " ";
  }

  return pyramid(n, i, level);
}

module.exports = pyramid;
