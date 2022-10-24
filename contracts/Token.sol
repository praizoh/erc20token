// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    address public owner;

    constructor() ERC20("OremeiToken", "ORE") {
       _mint(msg.sender,1000000 * 10 ** 18);
       owner = msg.sender;
    }

    function mint(address to, uint amount) external{
        require(msg.sender == owner, 'only owner');
        _mint( to, amount);
    }

    function burn (uint amount) external {
        _burn (msg.sender, amount);
    }
}