import axios from 'axios'

const USER_KEY = '566b35c933cb75a6f43b80043228bb8e'
const API_BASE = 'https://api-2445582011268.apicast.io/'
const GAMES_ENDPOINT = 'games/'
const DEFAULT_HEADERS = {
  'user-key': USER_KEY,
  Accept: 'application/json'
}

const buildUrl = query => {
  return `${API_BASE}${GAMES_ENDPOINT}?search=${query}&fields=name,summary,first_release_date&filter[category][eq]=0`
}

async function fetchByName(name) {
  return await axios(
    {
      method: 'get',
      url: buildUrl(name),
      headers: DEFAULT_HEADERS
    })
    .then(res => res.data)
    .catch(err => {
      throw new Error(error)
    })
}

export { fetchByName }
