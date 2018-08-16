pragma solidity ^0.4.24;

contract MainAccount {
    address constant public mainAccount = 0x726c7f2062bb3dd47f5aae72975a334ba8e60fe8;

    function getMainAccountBalance() public view returns(uint256) {
        return mainAccount.balance;
    }

    function getMainAccount() public view returns(address) {
        return mainAccount;
    }
}
