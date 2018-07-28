import axios from 'axios'
import { API_FOOTBALL_KEY, API_FOOTBALL_URL } from '../config/api'

const config = {
  headers: {
    'X-Mashape-Key': API_FOOTBALL_KEY,
  },
}

export function getFixturesByDate(date) {
  const dateYearMonthDay = date.toISOString().substring(0, 10)

  return axios
    .get(`${API_FOOTBALL_URL}/fixtures/date/${dateYearMonthDay}`, config)
    .then(result => result.data.api)
}

export function getFixtureOdds(fixtureId) {
  return axios
    .get(`${API_FOOTBALL_URL}/odds/${fixtureId}`, config)
    .then(result => result.data.api)
}
