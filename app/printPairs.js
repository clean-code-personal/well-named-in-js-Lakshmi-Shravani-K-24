const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];
const maxSizeOfPairNumber = MajorColorNames.length * MinorColorNames.length;
function ColorPair() {
  this.majorColor;
  this.minorColor;
}
ColorPair.prototype.toString = function () {
  return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
};
function printColorPairs() {
  console.log("Color Code and Pairs Manual");
  let colorCoding = "";
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
  MajorColorNames,
  MinorColorNames,
  maxSizeOfPairNumber,
  ColorPair,
};
