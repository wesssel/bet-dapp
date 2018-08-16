pragma solidity ^0.4.24;

contract MainAccount {
    address constant public mainAccount = 0x726C7f2062BB3dD47F5Aae72975A334BA8e60Fe8;

    function balanceOfMain() public view returns(uint256) {
        return mainAccount.balance;
    }
}
