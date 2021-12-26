import { c as create_ssr_component, a as add_attribute, s as subscribe, e as each, b as escape, v as validate_component, g as get_store_value } from "./app-14a936dc.js";
import { m as movie_genres, s as selected, a as media_type, t as tv_genres, c as current_page, w as writable } from "./store-cc224516.js";
var app = "";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm;
  return `<section id="${"search"}"><form class="${"flex justify-end items-center pr-0.5"}" label="${"search form"}"><input label="${"search"}" class="${"placeholder-gray-500 bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-skin-muted placeholder-text-skin-base::placeholder border-2 border-skin-border"}" type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", searchTerm, 0)}></form></section>`;
});
const Genre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movie_genres, $$unsubscribe_movie_genres;
  let $selected, $$unsubscribe_selected;
  let $media_type, $$unsubscribe_media_type;
  let $tv_genres, $$unsubscribe_tv_genres;
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_movie_genres();
  $$unsubscribe_selected();
  $$unsubscribe_media_type();
  $$unsubscribe_tv_genres();
  return `<div class="${"bg-skin-primary w-full"}"><div class="${"flex flex-row p-1"}"><div class="${"p-1 m-1 flex flex-col bg-skin-secondary"}"><h6 class="${"uppercase text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>Movies
			</h6>
			<div class="${"py-0.5 justify-center bg-skin-inverted"}"></div>
			<ul class="${"text-sm flex flex-col justify-center"}">${each($movie_genres, (genre, i) => `<li class="${"flex"}"><button${add_attribute("aria-label", genre.name, 0)} class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "movie" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
					</li>`)}</ul></div>
		<div class="${"p-1 m-1 flex flex-col bg-skin-secondary"}"><h6 class="${"uppercase flex text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-tv"}" aria-hidden="${"true"}"></i></span>Tv
			</h6>
			<p class="${"py-0.5 justify-center text-skin-base"}"></p>
			<ul class="${"text-sm flex flex-col justify-center"}">${each($tv_genres, (genre, j) => `<li class="${"flex"}"><button class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "tv" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
					</li>`)}</ul></div></div></div>`;
});
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_current_page;
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_selected;
  $$unsubscribe_current_page = subscribe(current_page, (value) => value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  $$unsubscribe_current_page();
  $$unsubscribe_media_type();
  $$unsubscribe_selected();
  return `<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Movies"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "movie" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Movies</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"TV Shows"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "tv" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-television"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Tv</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"People"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "person" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-user"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">People</span></button></div></div>
<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Genres"}" class="${"text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"}"><span><i class="${"fa fa-tag"}" aria-hidden="${"true"}"></i></span>
				<span class="${"hidden xl:block mx-2"}">Genres</span></button>
			<ul class="${"rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base group-hover:block"}">${validate_component(Genre, "Genre").$$render($$result, {}, {}, {})}</ul></div></div>`;
});
function _theme() {
  const { set, subscribe: subscribe2 } = writable("");
  return {
    subscribe: subscribe2,
    update: (theme2) => get_store_value(theme2),
    get: (theme2) => get_store_value(theme2),
    set: (theme2) => {
      return;
    },
    init: () => {
      return;
    },
    reset: () => {
      set(void 0);
    }
  };
}
const theme = _theme();
const ToggleDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<button class="${"text-skin-base"}"><div class="${"text-skin-base mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none"}" aria-label="${"Toggle Light and Dark mode"}">${$theme === "dark" ? `<img class="${"h-8 w-8"}" src="${"/sun_light_mode_day-512.webp"}" alt="${"profile"}">` : `<div class="${"h-6 w-6"}"><img src="${"/icons8-moon-60.png"}" alt="${"light mode"}"></div>`}</div></button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_current_page;
  let $$unsubscribe_media_type;
  $$unsubscribe_current_page = subscribe(current_page, (value) => value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => value);
  $$unsubscribe_current_page();
  $$unsubscribe_media_type();
  return `<header class="${"bg-skin-secondary"}"><div class="${"max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10"}"><div class="${"flex flex-row items-center"}"><button class="${"text-3xl text-skin-base hover:text-skin-selected"}" href="${"/"}"><i class="${"fa fa-home"}"></i></button>
			${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}</div>
		${validate_component(ToggleDarkMode, "ToggleDarkMode").$$render($$result, {}, {}, {})}
		${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></header>`;
});
async function load({ fetch }) {
  const resTv = await fetch("./api/getTvGenres");
  const resTv_json = await resTv.json();
  tv_genres.set(resTv_json.tv_genres);
  const resMovie = await fetch("./api/getMovieGenres");
  const resMovie_json = await resMovie.json();
  movie_genres.set(resMovie_json.movie_genres);
  return {};
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  theme.init();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" data-svelte="svelte-wejjgj">${$$result.title = `<title>TMDB on Sveltekit</title>`, ""}<meta name="${"description"}" content="${"TMDB movie & tv database"}" data-svelte="svelte-wejjgj"><meta name="${"keywords"}" content="${"HTML, CSS, JavaScript, svelte"}" data-svelte="svelte-wejjgj"><meta name="${"author"}" content="${"Wayne Morgan"}" data-svelte="svelte-wejjgj">`, ""}

<main class="${["bg-skin-bg min-h-screen", $theme ? "$theme" : ""].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"max-w-7xl mx-auto"}">${slots.default ? slots.default({}) : ``}</section></main>`;
});
export { _layout as default, load };
