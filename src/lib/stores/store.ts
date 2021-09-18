import { writable, readable } from 'svelte/store'

export const current_page = writable(1 as number)
export const media_type = writable('movie' as MediaType)
export const genres_list = writable({} as Genres)
export const selected = writable(null as number)
export const theme_dark = writable(false as boolean)
export const show_name = writable('' as string)
export const season_count = writable(0 as number)
export const show_id = writable(0 as number)
export const ApiKey = readable(import.meta.env.VITE_API_KEY as string, () => { null })