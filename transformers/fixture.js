export function transformFixtures(rawFixtures) {
  return Object
    .values(rawFixtures)
    .map(rawFixture => ({
      id: rawFixture.fixture_id,
      timestamp: rawFixture.event_timestamp,
      elapsed: rawFixture.elapsed,
      status: rawFixture.status,
      home: {
        team: rawFixture.homeTeam,
        goals: rawFixture.goalsHomeTeam,
      },
      away: {
        team: rawFixture.awayTeam,
        goals: rawFixture.goalsAwayTeam,
      },
      odds: {},
    }))
}
