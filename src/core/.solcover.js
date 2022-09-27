const fs = require('fs');

const testContracts = fs.readdirSync("./contracts/original-test")
const skipFiles = testContracts.map((x) => "original-test/" + x)
skipFiles.push("libraries/TickMath.sol"); // TODO remove after fix of https://github.com/sc-forks/solidity-coverage/issues/751

module.exports = {
    skipFiles: skipFiles,
    testfiles: "original-test/*.ts",
    mocha: {
      grep: "@skip-on-coverage", // Find everything with this tag
      invert: true               // Run the grep's inverse set.
    }
  };