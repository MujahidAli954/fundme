
const networkConfig = {
    11155111 : {
        name : "Sepolia",
        ethUsdPriceFeed : "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    },
    31337: {
        ethUsdPriceFeed: "localhost",
    },
    4 : {
        name : "Geroli",
        ethUsdPriceFeed : "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    },
    1:{
        name : "Mainet",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    }
    
}

const developmentChains = ["hardhat","localhost"];
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER
}