// const fetch = require('node-fetch')

exports.handler = async function (event, _context) {
  const eventBody = JSON.parse(event.body)
  const TMDB_API = eventBody.api

  const response = await fetch(TMDB_API)
  const data = await response.json()
  console.log

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}