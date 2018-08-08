pragma solidity ^0.4.24;

contract BetSlips {
    struct BetSlip {
        address better;
        uint8 amount;
        uint8 odd;
        mapping(uint => Bet) bets;
    }

    struct Bet {
        uint8 fixtureId;
        uint8 side;
    }

    mapping(uint => BetSlip) public betSlips;
    uint public betSlipsCount;

    function addBetSlip(uint8[] _fixtureIds, uint8[] _sides, uint8 _amount, uint8 _odd) public {
        betSlipsCount++;
        betSlips[betSlipsCount] = BetSlip(msg.sender, _amount, _odd);
        addBetsToSlip(_fixtureIds, _sides);
    }

    function addBetsToSlip(uint8[] _fixtureIds, uint8[] _sides) private {
        for (uint i = 0; i < _fixtureIds.length; i++) {
            betSlips[betSlipsCount].bets[i].fixtureId = _fixtureIds[i];
            betSlips[betSlipsCount].bets[i].side = _sides[i];
        }
    }
}
