pragma solidity ^0.4.24;

/** @title Main account. */
contract MainAccount {
    /** @dev Hardcoded main account */
    address mainAccount;

    constructor(address _mainAccount) public {
        mainAccount = _mainAccount;
    }

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
