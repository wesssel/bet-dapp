pragma solidity ^0.4.24;

contract MainAccount {
    address constant public mainAccount = 0xabeedd8484ac4668f7aa427c887f25f3271a0f31;

    function balanceOfMain() public view returns(uint256) {
        return mainAccount.balance;
    }
}
