import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const current_page: Writable<number> = writable(1);
export const trailer_key: Writable<string> = writable('xyz');
export const video_site: Writable<string> = writable('');


export const media_type: Writable<MediaType> = writable('movie');

export const tv_network: Writable<Network[]> = writable([]);
export const selected: Writable<number> = writable(null);
export const theme_dark: Writable<boolean> = writable(false);
export const show_name: Writable<string> = writable('');
export const season_count: Writable<number> = writable(0);
export const show_id: Writable<number> = writable(0);
export const data = writable([])

export const tv_genres: Writable<Genre[]> = writable([]);
export const movie_genres: Writable<Genre[]> = writable([]);