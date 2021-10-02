import fetch from 'node-fetch'

export async function handler (event, _context) {
  const eventBody = JSON.parse(event.body)
  const TMDB_API = eventBody.url

  const response = await fetch(TMDB_API)
  const res = await response.json()
  console.log('api-call-res',res)
  console.log('api key',process.env.VITE_API_KEY)

  return {
    statusCode: 200,
    body: JSON.stringify({res})
  }
}

// export async function handler () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Hello world!'
//     })
//   }
// }