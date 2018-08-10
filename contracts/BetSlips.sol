pragma solidity ^0.4.24;

contract BetSlips {
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

    mapping(uint => BetSlip) public betSlips;
    uint public betSlipsCount;

    function addBetSlip(uint[] _fixtureIds, uint[] _sides, uint _amount, uint _odd) public {
        betSlipsCount++;
        betSlips[betSlipsCount] = BetSlip(msg.sender, _amount, _odd, _fixtureIds.length);
        addBetsToSlip(_fixtureIds, _sides);
    }

    function addBetsToSlip(uint[] _fixtureIds, uint[] _sides) private {
        for (uint i = 0; i < _fixtureIds.length; i++) {
            betSlips[betSlipsCount].bets[i].fixtureId = _fixtureIds[i];
            betSlips[betSlipsCount].bets[i].side = _sides[i];
        }
    }

    function getBetSlip(uint _id) public view returns(address better, uint amount, uint odd, uint[] fixtureId, uint[] sides) {
        uint[] memory _fixtureIds = new uint[](betSlips[_id].betsCount);
        uint[] memory _sides = new uint[](betSlips[_id].betsCount);

        for (uint i = 0; i < betSlips[_id].betsCount; i++) {
            _fixtureIds[i] = betSlips[_id].bets[i].fixtureId;
            _sides[i] = betSlips[_id].bets[i].side;
        }

        return (
            betSlips[_id].better,
            betSlips[_id].amount,
            betSlips[_id].odd,
            _fixtureIds,
            _sides
        );
    }
}
