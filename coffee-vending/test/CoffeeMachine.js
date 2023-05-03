const { expect } = require("chai"); // used to assert test results
const { ethers } = require("hardhat"); // used to deploy and interact with the contract

describe("Coffee Machine", function () {
  it("should mint tokens for the user", async function () {
    const [owner, addr1] = await ethers.getSigners();

    const CM = await ethers.getContractFactory("CoffeeMachine");
    const cm = await CM.deploy(owner);
    await expect(
      cm.connect(addr1).mintTokens({
        value: ethers.utils.parseEther("0.0012"),
      })
    )
      .to.changeEtherBalance(owner, ethers.utils.parseEther("0.001"))
      .to.changeEtherBalance(addr1, ethers.utils.parseEther("-0.001"));

    expect(await cm.connect(addr1).getTokenBalance()).to.equal(2);
  });
});
