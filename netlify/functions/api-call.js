const fetch = require('node-fetch').default

exports.handler = async function (event, _context) {
  const eventBody = JSON.parse(event.body)
  const TMDB_API = eventBody.url
  console.log('Ballocks')

  // const response = await fetch(TMDB_API)
  // const data = await response.json()
  // console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(TMDB_API)
  }
}