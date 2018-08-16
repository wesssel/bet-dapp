import axios from 'axios'
import { API_FOOTBALL_KEY, API_FOOTBALL_URL } from '../config/api'
import { logger } from './logger'

import fixturesMock from '../../data/fixtures-mock.json'
import oddsMock from '../../data/odds-mock.json'

const config = {
  headers: {
    'X-Mashape-Key': API_FOOTBALL_KEY,
  },
}

export function getFixturesByDate(date) {
  const dateYearMonthDay = date.toISOString().substring(0, 10)

  if (process.env.dummy) {
    return new Promise((resolve) => {
      resolve(fixturesMock)
    })
  }

  return axios
    .get(`${API_FOOTBALL_URL}/fixtures/date/${dateYearMonthDay}`, config)
    .then((result) => {
      logger({ fixtures: result.data.api.fixtures }, 'get fixture')
      return result.data.api.fixtures
    })
}

export function getFixturesById(id) {
  if (process.env.dummy) {
    return new Promise((resolve) => {
      resolve(fixturesMock[0])
    })
  }

  return axios
    .get(`${API_FOOTBALL_URL}/fixtures/id/${id}`, config)
    .then((result) => {
      logger({ fixture: Object.values(result.data.api.fixtures)[0] }, 'get fixture by id')
      return Object.values(result.data.api.fixtures)[0]
    })
}

export function getFixtureOdds(fixtureId) {
  if (process.env.dummy) {
    return new Promise((resolve) => {
      resolve(oddsMock)
    })
  }

  return axios
    .get(`${API_FOOTBALL_URL}/odds/${fixtureId}`, config)
    .then((result) => {
      logger({ odds: result.data.api.odds }, `get odds ${fixtureId}`)
      return result.data.api.odds
    })
}
