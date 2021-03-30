export async function getMovieDetails(url:string) :Promise<string>{
  const res = await fetch(url)
  const movieResult = await res.json()
  return movieResult
}