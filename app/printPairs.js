const { MajorColorNames, MinorColorNames } = require('./colorCoder');

function printColorPairs() {
  let colorCoding = '';

  for (let i = 0; i < MajorColorNames.length; i++) {
    for (let j = 0; j < MinorColorNames.length; j++) {
      let pairNumber = i * MinorColorNames.length + (j + 1);
      colorCoding += `Pair Number: ${pairNumber}, Colors: ${MajorColorNames[i]}, ${MinorColorNames[j]}\n`;
    }
  }

  return colorCoding;
}

module.exports = {
  printColorPairs,
};
