import { writable, readable } from 'svelte/store'

export const current_page = writable(1)

export const media_type= writable('movie')

export const genres_list = writable({})

export const selected = writable('')

export const ApiKey = readable('61e588d14c9ac42a437e560cc3d65659', () => {null})