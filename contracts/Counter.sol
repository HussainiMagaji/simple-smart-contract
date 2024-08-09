//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Counter {
    uint private count;

    constructor(uint _count) {
        count = _count;
    }

    function get( ) public view returns (uint) {
        return count;
    }

    function inc( ) public {
        count += 1;
    }

    function dec( ) public {
        count -= 1;
    }
}