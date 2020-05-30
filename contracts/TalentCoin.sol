// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./SafeMath.sol";


contract TalentCoin {
    using SafeMath for uint256;

    string public name;
    string public symbol;
    mapping(address => uint256) balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(string memory tokenName, string memory tokenSymbol) public {
        name = tokenName;
        symbol = tokenSymbol;
    }

    // no trans method
    function balance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // trans method
    function bonus() public returns (bool) {
        balances[msg.sender] = balances[msg.sender].add(100);
        return true;
    }

    function tax() public returns (bool) {
        balances[msg.sender] = balances[msg.sender].sub(10);
        return true;
    }

    function transfer(address to, uint256 value) public returns (bool) {
        require(value <= balances[msg.sender], "");
        require(to != address(0), "");

        balances[msg.sender] = balances[msg.sender].sub(value);
        balances[to] = balances[to].add(value);
        emit Transfer(msg.sender, to, value);
        return true;
    }
}
