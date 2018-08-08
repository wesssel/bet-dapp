export function transformOdds(rawOdds) {
  const matchWin = rawOdds['Win the match']

  if (!matchWin) {
    return null
  }

  return {
    matchWin: {
      home: parseFloat(matchWin['1'].odd),
      draw: parseFloat(matchWin.N.odd),
      away: parseFloat(matchWin['2'].odd),
    },
  }
}
