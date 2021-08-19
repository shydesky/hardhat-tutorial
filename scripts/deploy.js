async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TokenUSDT = await ethers.getContractFactory("TokenUSDT");
  const tokenUSDT = await TokenUSDT.deploy();
  console.log("Token address:", tokenUSDT.address);

  //const TokenDai = await ethers.getContractFactory("TokenDai");
  //const tokenDai = await TokenDai.deploy();
  //console.log("Token address:", tokenDai.address);

  //const TokenWHT = await ethers.getContractFactory("TokenWHT");
  //const tokenWht = await TokenWHT.deploy();
  //console.log("Token address:", tokenWht.address);

  const TokenHBTC = await ethers.getContractFactory("TokenHBTC");
  const tokenHBTC = await TokenHBTC.deploy();
  console.log("Token address:", tokenHBTC.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
