import axios from 'axios'
import { API_FOOTBALL_KEY, API_FOOTBALL_URL } from '../config/api'
import { logger } from './logger'

const config = {
  headers: {
    'X-Mashape-Key': API_FOOTBALL_KEY,
  },
}

export function getFixturesByDate(date) {
  const dateYearMonthDay = date.toISOString().substring(0, 10)

  return axios
    .get(`${API_FOOTBALL_URL}/fixtures/date/${dateYearMonthDay}`, config)
    .then((result) => {
      logger({ fixtures: result.data.api.fixtures }, 'get fixture')
      return result.data.api.fixtures
    })
}

export function getFixtureOdds(fixtureId) {
  return axios
    .get(`${API_FOOTBALL_URL}/odds/${fixtureId}`, config)
    .then((result) => {
      logger({ odds: result.data.api.odds }, `get odds ${fixtureId}`)
      return result.data.api.odds
    })
}
