export function transformOdds(rawOdds) {
  return {
    matchWin: {
      home: parseFloat(rawOdds['Win the match']['1'].odd),
      draw: parseFloat(rawOdds['Win the match'].N.odd),
      away: parseFloat(rawOdds['Win the match']['2'].odd),
    },
  }
}
