const {
  getColorFromPairNumber,
  getPairNumberFromColor,
} = require("./colorCoder");
const { maxSizeOfPairNumber, ColorPair } = require("./printPairs");
const { printTest } = require("./printAndTestPairs");
function test() {
  pairNumber = 4;
  console.assert(pairNumber != 0);
  console.assert(pairNumber <= maxSizeOfPairNumber);
  let testPair1 = getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "WHITE");
  console.assert(testPair1.minorColor == "BROWN");
  pairNumber = 5;
  testPair1 = getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "WHITE");
  console.assert(testPair1.minorColor == "SLATE");
  pairNumber = 23;
  testPair1 = getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "VIOLET");
  console.assert(testPair1.minorColor == "GREEN");
  let testPair2 = new ColorPair();
  testPair2.majorColor = "YELLOW";
  testPair2.minorColor = "GREEN";
  pairNumber = getPairNumberFromColor(testPair2);
  console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == 18);
  testPair2 = new ColorPair();
  testPair2.majorColor = "RED";
  testPair2.minorColor = "BLUE";
  pairNumber = getPairNumberFromColor(testPair2);
  console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == 6);
  console.assert(() => {
    try {
      getColorFromPairNumber(20);
      return true;
    } catch (error) {
      return false;
    }
  }, "Test case 1 failed: Expected no error for valid pair number.");
}
test();
printTest();
