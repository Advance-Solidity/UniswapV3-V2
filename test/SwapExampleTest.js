const { expect } = require("chai");
const { accessListify } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
var Account,
    SwapExample,
    dai,
    weth,
    usdc = null;
describe("swap example", function () {
    beforeEach("deploy swapexample contract", async () => {
        Account = await ethers.getSigner();
        const swapExample = await ethers.getContractFactory("SwapExamples");
        SwapExample = await swapExample.deploy();
        await SwapExample.deployed();
        dai = await ethers.getContractAt("IERC20", DAI);
        weth = await ethers.getContractAt("IWETH", WETH9);
        usdc = await ethers.getContractAt("IERC20", USDC);
    });

    it("SwapExactInputSingle example", async function () {
        // console.log(dai);
        const amountIn = 10n ** 18n;
        // console.log(await dai.balanceOf(Account[0].address));

        console.log(await weth.connect(Account[0]).deposit({ value: amountIn }));
        await weth.connect(accessListify[0]).approve(SwapExample.address, amountIn);
        await SwapExample.connect(Account[0]).swapExactInputSingle(
            ethers.utils.parseEther("10", 18)
        );
        console.log(
            "balance of dai in account[0]",
            await dai.balanceOf(Account[0])
        );


        // got error with this reason
        //Error: sending a transaction requires a signer (operation="sendTransaction", code=UNSUPPORTED_OPERATION, version=contracts/5.6.2)
    });
    it("SwapExactInputSingle example", async () => {
        // console.log(dai);
        const amountIn = 5n ** 18n;
        const Maxamount = 10n ** 18n;
        // console.log(await dai.balanceOf(Account[0].address));

        console.log(await weth.connect(Account[0]).deposit({ value: amountIn }));
        await weth
            .connect(accessListify[0])
            .approve(SwapExample.address, amountIn);
        await SwapExample.connect(Account[0]).swapExactInputSingle(
            amountIn, Maxamount
        );
        console.log("balance of dai in account[0]", await dai.balanceOf(Account[0]));
    })
});
