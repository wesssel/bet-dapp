const BETTER_INDEX = 0
const AMOUNT_INDEX = 1
const ODD_INDEX = 2
const FIXTURES_INDEX = 3
const SIDES_INDEX = 4

export function reverseTransformBetSlip(rawBetSlip) {
  return {
    better: rawBetSlip[BETTER_INDEX],
    amount: rawBetSlip[AMOUNT_INDEX].toNumber(),
    odd: rawBetSlip[ODD_INDEX].toNumber(),
    bets: rawBetSlip[FIXTURES_INDEX].map((fixtureId, index) => ({
      fixtureId: fixtureId.toNumber(),
      side: rawBetSlip[SIDES_INDEX][index].toNumber(),
      fixture: null,
    })),
  }
}
