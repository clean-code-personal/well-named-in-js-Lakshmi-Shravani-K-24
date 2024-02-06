const {
  MajorColorNames,
  MinorColorNames,
  printColorPairs,
  maxSizeOfPairNumber,
  ColorPair,
} = require("./printPairs");
function printTest(){
  console.log("ColorCode and Color Pairs Manual");
  console.log(printColorPairs());
const pairs = printColorPairs().split("\n").filter(Boolean);
console.assert(
  pairs.length === maxSizeOfPairNumber,
  `Expected ${maxSizeOfPairNumber} pairs, but got ${pairs.length}`
);
pairs.forEach((pair, zeroBasedPairNumber) => {
  const parts = pair.split(",");
  const pairNumber = zeroBasedPairNumber + 1;
  const majorColor = parts[1].trim().split(": ")[1];
  const minorColor = parts[2].trim().split(": ")[1];
  console.assert(
    pair.includes(`Pair Number: ${pairNumber}`),
    `Pair ${pairNumber} not found`
  );
  console.assert(
    MajorColorNames.includes(majorColor),
    `Major color ${majorColor} not found`
  );
  console.assert(
    MinorColorNames.includes(minorColor),
    `Minor color ${minorColor} not found`
  );
});
console.assert(
  JSON.stringify(MajorColorNames) ===
    JSON.stringify(["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"]),
  "Major color names are incorrect"
);
console.assert(
  JSON.stringify(MinorColorNames) ===
    JSON.stringify(["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"]),
  "Minor color names are incorrect"
);
const colorPair = new ColorPair();
colorPair.majorColor = "BLACK";
colorPair.minorColor = "BLUE";
console.assert(colorPair.majorColor === "BLACK", "Major color should be BLACK");
console.assert(colorPair.minorColor === "BLUE", "Minor color should be BLUE");
}
