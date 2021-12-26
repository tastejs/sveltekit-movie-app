// eslint-disable-next-line @typescript-eslint/no-unused-vars
const api = import.meta.env.VITE_API_KEY

const base = "https://api.themoviedb.org/3/"
const urls = {
    cast: '${request.body["media"]}/${request.body["id"]}/credits?api_key=${api}&language=en-US',
    episode: 'tv/${request.body["id"]}/season/${request.body["season_number"]}/episode/${request.body["episode_number"]}?api_key=${api}&language=en-US',
    known_for: 'person/${request.body["person"]}/combined_credits?api_key=${api}&language=en-US',
    show_detail: '${request.body["media"]}/${request.body["id"]}?api_key=${api}&language=en-US',
    person: '${request.body["media"]}/${request.body["id"]}/credits?api_key=${api}&language=en-US',
    search: 'search/${request.body["media"]}?api_key=${api}&language=en-US&page=${request.body["page"]}&include_adult=false&query=${request.body["query"]}',
    season: 'tv/${request.body["id"]}/season/${request.body["season_number"]}?api_key=${api}&language=en-US',
    show: 'trending/${request.body["media"]}/week?api_key=${api}&language=en-GB&page=${request.body["page"]}',
    show_genres: 'discover/${request.body["media"]}?api_key=${api}&with_genres=${request.body["genre"]}&page=${request.body["page"]}',
    trailer: '${request.body["media"]}/${request.body["id"]}/videos?api_key=${api}&language=en-US'
}

export async function post(request: { body: { [x: string]: string } }): Promise<{ body: string; }> {
    try {
        const fetch_url = base + [eval('`' + urls[request.body["api_ref"]] + '`')]
        console.log('FETCH', request.body["api_ref"], fetch_url)
        const res = await (await fetch(fetch_url)).json()
        return {
            body: JSON.stringify({ res })
        }
    }
    catch (e) {
        console.log('error', e)
    }
}
