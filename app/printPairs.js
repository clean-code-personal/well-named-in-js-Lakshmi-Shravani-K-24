const { MajorColorNames, MinorColorNames } = require('./main');
function printColorPairs() {
  console.log("Color Code and Pairs Manual");
  let colorCoding = '';
  for (let i = 0; i < MajorColorNames.length; i++) {
    for (let j = 0; j < MinorColorNames.length; j++) {
      let pairNumber = i * MinorColorNames.length + (j + 1);
      colorCoding += `Pair Number: ${pairNumber}, MajorColor: ${MajorColorNames[i]}, MinorColor: ${MinorColorNames[j]}\n`;
    }
  }
  return colorCoding;
}
module.exports = {
  printColorPairs,
};
