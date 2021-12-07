import { c as create_ssr_component, a as add_attribute, s as subscribe, e as each, b as escape, v as validate_component, g as get_store_value, d as set_store_value } from "./app-3d85ebcf.js";
import { m as movie_genres, s as selected, a as media_type, t as tv_genres, c as current_page, w as writable, b as tv_network } from "./store-f8b67767.js";
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
  return `<div class="${"bg-skin-primary w-full xl:w-96"}"><p class="${"py-0.5 justify-center bg-skin-bg"}"></p>
	<h4 class="${"uppercase items-center flex justify-center text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>Movies
	</h4>
	<p class="${"py-0.5 justify-center bg-skin-inverted"}"></p>
	<ul class="${"flex flex-wrap justify-center"}">${each($movie_genres, (genre, i) => `<li class="${"flex"}"><button${add_attribute("aria-label", genre.name, 0)} class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "movie" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
				${i !== $movie_genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}
			</li>`)}</ul>
	<p class="${"py-0.5 justify-center bg-skin-bg"}"></p>
	<h4 class="${"uppercase items-center flex justify-center text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-tv"}" aria-hidden="${"true"}"></i></span>Tv
	</h4>
	<p class="${"py-0.5 justify-center text-skin-base"}"></p>
	<ul class="${"flex flex-wrap justify-center"}">${each($tv_genres, (genre, j) => `<li class="${"flex"}"><button class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "tv" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
				${j !== $tv_genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}
			</li>`)}</ul></div>`;
});
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_current_page;
  let $$unsubscribe_selected;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_current_page = subscribe(current_page, (value) => value);
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  $$unsubscribe_media_type();
  $$unsubscribe_current_page();
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
			<ul class="${"rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base pt-4 group-hover:block"}">${validate_component(Genre, "Genre").$$render($$result, {}, {}, {})}</ul></div></div>
`;
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
  return `<button class="${"text-skin-base"}"><div class="${"text-skin-base mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none"}" aria-label="${"Toggle Light and Dark mode"}">${$theme === "dark" ? `<img class="${"h-8 w-8"}" src="${"/icons8-sun-48.png"}" alt="${"profile"}">` : `<div class="${"h-6 w-6"}"><img src="${"/icons8-moon-60.png"}" alt="${"light mode"}"></div>`}</div></button>`;
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
const load = async ({ fetch }) => {
  const resTv = await fetch("api/getTvGenres");
  const resTv_json = await resTv.json();
  const tv_genre = resTv_json.tv_genres;
  const resMovie = await fetch("api/getMovieGenres");
  const resMovie_json = await resMovie.json();
  const movie_genre = resMovie_json.movie_genres;
  const tvNetworks = await fetch("api/getTvNetworks");
  const resTvNetworks_json = await tvNetworks.json();
  const tv_networks = resTvNetworks_json.tv_network;
  return {
    props: { tv_genre, movie_genre, tv_networks }
  };
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tv_network, $$unsubscribe_tv_network;
  let $movie_genres, $$unsubscribe_movie_genres;
  let $tv_genres, $$unsubscribe_tv_genres;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_tv_network = subscribe(tv_network, (value) => $tv_network = value);
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { tv_genre } = $$props;
  let { movie_genre } = $$props;
  let { tv_networks } = $$props;
  theme.init();
  set_store_value(tv_genres, $tv_genres = tv_genre, $tv_genres);
  set_store_value(movie_genres, $movie_genres = movie_genre, $movie_genres);
  set_store_value(tv_network, $tv_network = tv_networks, $tv_network);
  if ($$props.tv_genre === void 0 && $$bindings.tv_genre && tv_genre !== void 0)
    $$bindings.tv_genre(tv_genre);
  if ($$props.movie_genre === void 0 && $$bindings.movie_genre && movie_genre !== void 0)
    $$bindings.movie_genre(movie_genre);
  if ($$props.tv_networks === void 0 && $$bindings.tv_networks && tv_networks !== void 0)
    $$bindings.tv_networks(tv_networks);
  $$unsubscribe_tv_network();
  $$unsubscribe_movie_genres();
  $$unsubscribe_tv_genres();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" data-svelte="svelte-wejjgj">${$$result.title = `<title>TMDB on Sveltekit</title>`, ""}<meta name="${"description"}" content="${"TMDB movie & tv database"}" data-svelte="svelte-wejjgj"><meta name="${"keywords"}" content="${"HTML, CSS, JavaScript, svelte"}" data-svelte="svelte-wejjgj"><meta name="${"author"}" content="${"Wayne Morgan"}" data-svelte="svelte-wejjgj">`, ""}

<main class="${["bg-skin-bg min-h-screen", $theme ? "$theme" : ""].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"max-w-7xl mx-auto"}">${slots.default ? slots.default({}) : ``}</section></main>`;
});
export { _layout as default, load };
