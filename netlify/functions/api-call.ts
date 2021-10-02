import fetch from 'node-fetch';
import { Handler } from '@netlify/functions';

// const handler: Handler = async (event, context) => {
//   const eventBody = JSON.parse(event.body)
//   const TMDB_API = eventBody.url1 + process.env.VITE_API_KEY + eventBody.url2
//   const response = await fetch(TMDB_API)
//   const res = await response.json()
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };

const handler: Handler = async (event) => {
	const eventBody = JSON.parse(event.body);
	const TMDB_API = eventBody.url1 + process.env.VITE_API_KEY + eventBody.url2;
	const response = await fetch(TMDB_API);
	const res = await response.json();
	return {
		statusCode: 200,
		body: JSON.stringify({ res })
	};
};
export { handler };
// export async function handler () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Hello world!'
//     })
//   }
// }
