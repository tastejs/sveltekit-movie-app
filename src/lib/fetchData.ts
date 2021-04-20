export async function getMovieDetails(url:string) :Promise<MovieType[]>{
  const res = await fetch(url)
  const movieResult = await res.json()
  return movieResult
}