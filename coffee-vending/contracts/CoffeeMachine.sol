// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CoffeeMachine {
    address payable public owner;

    mapping(address => uint256) public balances;

    constructor(address payable _owner) {
        owner = _owner;
    }

    error MinimumValue();

    function mintTokens() external payable {
        require(msg.sender != owner, "cant mint tokens for the owner");

        if (msg.value < 0.0005 * 10 ** 18) {
            revert MinimumValue();
        }

        uint256 buyAmount = msg.value / (0.0005 * 10 ** 18);

        uint256 remainingEth = msg.value % (0.0005 * 10 ** 18);

        owner.transfer(msg.value - remainingEth);

        payable(msg.sender).transfer(remainingEth);

        balances[msg.sender] += buyAmount;
    }

    function transferTokens(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "account balance is low");

        balances[msg.sender] -= amount;

        balances[to] += amount;
    }

    function getTokenBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function purchaseCoffee(uint256 price) external {
        require(balances[msg.sender] >= price, "Balance is low");

        balances[msg.sender] -= price;
    }
}
