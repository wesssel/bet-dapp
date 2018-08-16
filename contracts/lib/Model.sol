pragma solidity ^0.4.24;

library Model {
    struct BetSlip {
        address better;
        uint amount;
        uint odd;
        uint betsCount;
        mapping(uint => Bet) bets;
    }

    struct Bet {
        uint fixtureId;
        uint side;
    }
}
