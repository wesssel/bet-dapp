pragma solidity ^0.4.24;

/** @title Main account. */
contract MainAccount {
    /** @dev Hardcoded main account */
    address constant public mainAccount = 0xCf3105d772A86966a4DA63C4e86dC6C47701c2d1;

    /** @dev Returns balance of main account
      * @return balance Balance of main account.
      */
    function getMainAccountBalance() public view returns (uint256 balance) {
        return mainAccount.balance;
    }

    /** @dev Returns main account
      * @return account Address main account
      */
    function getMainAccount() public view returns (address account) {
        return mainAccount;
    }
}
