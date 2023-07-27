const { network } = require("hardhat");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
const { networkConfig ,developmentChains} = require("../helper-hardhat-config");
const {verify} = require('../utils/verify');


module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let ethUsdPriceFeedAddress
if(developmentChains.includes(network.name)){
    const ethUsdAggregator = await deployments.get("MockV3Aggregator")
    ethUsdPriceFeedAddress =  ethUsdAggregator.address;
}else{
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
}

const args = [ethUsdPriceFeedAddress];
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args : [ethUsdPriceFeedAddress], // put price address
        log:true,
        waitConfirmations :networkConfig.blockConfirmations || 1
    })

    if(!developmentChains.includes(network.name,args) && process.env.ETHERSCAN_API_KEY) {
        await verify(fundMe.address,args);
    }

  };

  module.exports.tags = ["all","FundMe"]