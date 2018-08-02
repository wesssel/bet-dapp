pragma solidity ^0.4.24;

contract MainAccount {
    address constant public mainAccount = 0xCf3105d772A86966a4DA63C4e86dC6C47701c2d1;

    function balanceOfMain() public view returns(uint256) {
        return mainAccount.balance;
    }
}
