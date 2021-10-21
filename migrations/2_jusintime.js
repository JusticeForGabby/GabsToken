const JusticeForGabby = artifacts.require("JusticeForGabby");

module.exports = function (deployer) {
  let devAddress = "0x71B9748667F1bb2fC09433a6441f8262930f646F";
  let charityAddress = "0x05cB76F0fE9489fE4aAB13135Adbf0537AC314E9";
    deployer.deploy(JusticeForGabby, devAddress, charityAddress);
};