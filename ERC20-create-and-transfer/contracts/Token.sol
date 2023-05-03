//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Token {
    string public name = "Madfinger Token";
    string public symbol = "MDT";
    address public owner;
    uint public totalSupply = 1000000;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }
}
