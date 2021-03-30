import { writable, readable } from 'svelte/store'

export const current_page = writable(1)

export const media_type= writable('movie')

export const genres_list = writable({})

export const selected = writable('')

export const ApiKey = readable(import.meta.env.VITE_API_KEY, () => {null})