const hre = require("hardhat");
// to run after deploying cntract locally : npx hardhat run scripts/run.js --network localhost
const main = async () => {
  fromWei = ethers.utils.formatEther;
  toWei = ethers.utils.parseEther;

  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // address of contract deployed in localhost
  const token = await ethers.getContractAt("Token", address);

  const accounts = await hre.ethers.getSigners();
  const owner = accounts[0].address;
  const toAddress = accounts[1].address;

  const name = await token.name();
  console.log(`name of erc20 token is ${name}`);

  const symbol = await token.symbol();
  console.log(symbol);

  const decimal = await token.decimals();
  console.log(`decimal of erc20 token is ${decimal}`);

  totalSupply = await token.totalSupply();
  fromWei(totalSupply);
  console.log(totalSupply);

  await token.transfer(toAddress, toWei("100"));

  ownerBalance = await token.balanceOf(owner);
  fromWei(ownerBalance);
  console.log(`owner balance is ${ownerBalance}`);

  toBalance = await token.balanceOf(toAddress);
  fromWei(toBalance);
  console.log(`account transferrerd to balance ${toBalance}`);

  /**
   * allowance(address owner, address spender) → uint256
   */
  allowance = await token.allowance(owner, toAddress);
  fromWei(allowance);
  console.log(`allowance is ${allowance}`);

  /**
   * approve(address spender, uint256 amount)
   */
   approve = await token.approve(toAddress, 10);
   console.log(`approve is ${approve}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
