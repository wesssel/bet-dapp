pragma solidity ^0.4.24;

import './lib/Model.sol';

/** @title Bet slips. */
contract BetSlips {
    /** @dev Map of BetSlips */
    mapping(uint => Model.BetSlip) public betSlips;
    /** @dev Total count of betSlips */
    uint public betSlipsCount;

    /** @dev Adds a bet slip to the block
      * @param _fixtureIds All fixture ids of a bet slip
      * @param _sides All sides chosen of a bet in a bet slip
      * @param _amount Total amount in a bet slip
      * @param _odd Total odd of bet slip
      */
    function addBetSlip(uint[] _fixtureIds, uint[] _sides, uint _amount, uint _odd) public {
        betSlipsCount++;
        betSlips[betSlipsCount] = Model.BetSlip(msg.sender, _amount, _odd, _fixtureIds.length);
        addBetsToSlip(_fixtureIds, _sides);
    }

    /** @dev Adds bets to a bet slip
      * @param _fixtureIds All fixture ids of a bet slip
      * @param _sides All Sides chosen of a bet in a bet slip
      */
    function addBetsToSlip(uint[] _fixtureIds, uint[] _sides) private {
        for (uint i = 0; i < _fixtureIds.length; i++) {
            betSlips[betSlipsCount].bets[i].fixtureId = _fixtureIds[i];
            betSlips[betSlipsCount].bets[i].side = _sides[i];
        }
    }

    /** @dev Get bets slip by id
      * @param _id Id of bet slip
      * @return better Better of bet slip
      * @return amount Amount of bet slip
      * @return odd Total odds of bet slip
      * @return fixtureIds Fixture ids of bet slip
      * @return sides Chosen sides of bet slip
      */
    function getBetSlip(uint _id) public view returns(address better, uint amount, uint odd, uint[] fixtureIds, uint[] sides) {
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
