import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-ae56e48a.js",
			css: [assets + "/_app/assets/start-464e9d0a.css"],
			js: [assets + "/_app/start-ae56e48a.js",assets + "/_app/chunks/vendor-fc6286ba.js",assets + "/_app/chunks/singletons-12a22614.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"default.jpg","size":30844,"type":"image/jpeg"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"icons8-moon-60.png","size":1338,"type":"image/png"},{"file":"icons8-sun-24.png","size":423,"type":"image/png"},{"file":"icons8-sun-48.png","size":2286,"type":"image/png"},{"file":"icons8-sun.svg","size":973,"type":"image/svg+xml"},{"file":"person.svg","size":2693,"type":"image/svg+xml"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"sun_light_mode_day-512.webp","size":8424,"type":"image/webp"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/NotFound\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/NotFound.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/trending\/api\/getMovieGenres\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\trending\\api\\getMovieGenres.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/trending\/api\/getTvGenres\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\trending\\api\\getTvGenres.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/trending\/api\/getShow\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\trending\\api\\getShow.ts")
					},
		{
						type: 'page',
						pattern: /^\/trending\/([^/]+?)\/?$/,
						params: (m) => ({ media: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/trending/[media].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1]), season_number: d(m[2]), episode_number: d(m[3])}),
						a: ["src/routes/__layout.svelte", "src/routes/episode/[id]/[season_number]/[episode_number].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1]), season_number: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/seasons/[id]/[season_number].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/person\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/person/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/search\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/search/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/genre\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ media: d(m[1]), id: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/genre/[media]/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/movie\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/movie/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getMovieGenres\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getMovieGenres.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getTvNetworks\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getTvNetworks.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getShowGenre\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getShowGenre.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getKnownFor\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getKnownFor.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getTvGenres\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getTvGenres.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getEpisode\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getEpisode.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getTrailer\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getTrailer.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getPerson\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getPerson.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getSearch\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getSearch.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getSeason\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getSeason.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/apiCalls\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\apiCalls.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getMovie\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getMovie.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getCast\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getCast.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/getShow\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\getShow.ts")
					},
		{
						type: 'page',
						pattern: /^\/tv\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/tv/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),"src/routes/__error.svelte": () => import("..\\..\\src\\routes\\__error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/NotFound.svelte": () => import("..\\..\\src\\routes\\NotFound.svelte"),"src/routes/trending/[media].svelte": () => import("..\\..\\src\\routes\\trending\\[media].svelte"),"src/routes/episode/[id]/[season_number]/[episode_number].svelte": () => import("..\\..\\src\\routes\\episode\\[id]\\[season_number]\\[episode_number].svelte"),"src/routes/seasons/[id]/[season_number].svelte": () => import("..\\..\\src\\routes\\seasons\\[id]\\[season_number].svelte"),"src/routes/person/[id].svelte": () => import("..\\..\\src\\routes\\person\\[id].svelte"),"src/routes/search/[id].svelte": () => import("..\\..\\src\\routes\\search\\[id].svelte"),"src/routes/genre/[media]/[id].svelte": () => import("..\\..\\src\\routes\\genre\\[media]\\[id].svelte"),"src/routes/movie/[id].svelte": () => import("..\\..\\src\\routes\\movie\\[id].svelte"),"src/routes/tv/[id].svelte": () => import("..\\..\\src\\routes\\tv\\[id].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-f4eb42df.js","css":["assets/pages/__layout.svelte-d7d8cb99.css"],"js":["pages/__layout.svelte-f4eb42df.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-1cf9c0b1.js","css":["assets/pages/__error.svelte-8a5069d9.css"],"js":["pages/__error.svelte-1cf9c0b1.js","chunks/vendor-fc6286ba.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-0b7a5c7b.js","css":[],"js":["pages/index.svelte-0b7a5c7b.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"],"styles":[]},"src/routes/NotFound.svelte":{"entry":"pages/NotFound.svelte-9659fd5f.js","css":[],"js":["pages/NotFound.svelte-9659fd5f.js","chunks/vendor-fc6286ba.js"],"styles":[]},"src/routes/trending/[media].svelte":{"entry":"pages/trending/[media].svelte-40e542c5.js","css":[],"js":["pages/trending/[media].svelte-40e542c5.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"],"styles":[]},"src/routes/episode/[id]/[season_number]/[episode_number].svelte":{"entry":"pages/episode/[id]/[season_number]/[episode_number].svelte-a1e7498f.js","css":[],"js":["pages/episode/[id]/[season_number]/[episode_number].svelte-a1e7498f.js","chunks/vendor-fc6286ba.js"],"styles":[]},"src/routes/seasons/[id]/[season_number].svelte":{"entry":"pages/seasons/[id]/[season_number].svelte-7534c8b0.js","css":[],"js":["pages/seasons/[id]/[season_number].svelte-7534c8b0.js","chunks/vendor-fc6286ba.js","chunks/stores-462c50b9.js"],"styles":[]},"src/routes/person/[id].svelte":{"entry":"pages/person/[id].svelte-c20e0cad.js","css":[],"js":["pages/person/[id].svelte-c20e0cad.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js"],"styles":[]},"src/routes/search/[id].svelte":{"entry":"pages/search/[id].svelte-63c2cd3f.js","css":[],"js":["pages/search/[id].svelte-63c2cd3f.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"],"styles":[]},"src/routes/genre/[media]/[id].svelte":{"entry":"pages/genre/[media]/[id].svelte-5293c531.js","css":[],"js":["pages/genre/[media]/[id].svelte-5293c531.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"],"styles":[]},"src/routes/movie/[id].svelte":{"entry":"pages/movie/[id].svelte-cb05cc7d.js","css":["assets/Cast-cd25fbf7.css"],"js":["pages/movie/[id].svelte-cb05cc7d.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/ProgressBar-f61e37f1.js","chunks/Cast-6bfa9e9c.js"],"styles":[]},"src/routes/tv/[id].svelte":{"entry":"pages/tv/[id].svelte-6c7edfff.js","css":["assets/Cast-cd25fbf7.css"],"js":["pages/tv/[id].svelte-6c7edfff.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/ProgressBar-f61e37f1.js","chunks/Cast-6bfa9e9c.js","chunks/stores-462c50b9.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}