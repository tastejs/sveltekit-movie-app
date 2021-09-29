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
			file: assets + "/_app/start-0b66cad2.js",
			css: [assets + "/_app/assets/start-464e9d0a.css"],
			js: [assets + "/_app/start-0b66cad2.js",assets + "/_app/chunks/vendor-8fe9a59e.js",assets + "/_app/chunks/singletons-12a22614.js"]
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
	assets: [{"file":"default.jpg","size":30844,"type":"image/jpeg"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"icons8-moon-60.png","size":1338,"type":"image/png"},{"file":"icons8-sun-24.png","size":423,"type":"image/png"},{"file":"icons8-sun-48.png","size":2286,"type":"image/png"},{"file":"icons8-sun.svg","size":973,"type":"image/svg+xml"},{"file":"person.svg","size":2693,"type":"image/svg+xml"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"testl.d.ts","size":4087,"type":"video/mp2t"}],
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
						pattern: /^\/genre\/movie\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/genre/movie/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/genre\/tv\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/genre/tv/[id].svelte"],
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
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),"src/routes/__error.svelte": () => import("..\\..\\src\\routes\\__error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/NotFound.svelte": () => import("..\\..\\src\\routes\\NotFound.svelte"),"src/routes/episode/[id]/[season_number]/[episode_number].svelte": () => import("..\\..\\src\\routes\\episode\\[id]\\[season_number]\\[episode_number].svelte"),"src/routes/seasons/[id]/[season_number].svelte": () => import("..\\..\\src\\routes\\seasons\\[id]\\[season_number].svelte"),"src/routes/person/[id].svelte": () => import("..\\..\\src\\routes\\person\\[id].svelte"),"src/routes/search/[id].svelte": () => import("..\\..\\src\\routes\\search\\[id].svelte"),"src/routes/genre/movie/[id].svelte": () => import("..\\..\\src\\routes\\genre\\movie\\[id].svelte"),"src/routes/genre/tv/[id].svelte": () => import("..\\..\\src\\routes\\genre\\tv\\[id].svelte"),"src/routes/movie/[id].svelte": () => import("..\\..\\src\\routes\\movie\\[id].svelte"),"src/routes/tv/[id].svelte": () => import("..\\..\\src\\routes\\tv\\[id].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-4fcc0572.js","css":["assets/pages/__layout.svelte-87c9195c.css"],"js":["pages/__layout.svelte-4fcc0572.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-e843333a.js","css":["assets/pages/__error.svelte-8a5069d9.css"],"js":["pages/__error.svelte-e843333a.js","chunks/vendor-8fe9a59e.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-6a5dcc86.js","css":["assets/Spinner-11011231.css"],"js":["pages/index.svelte-6a5dcc86.js","chunks/vendor-8fe9a59e.js","chunks/MainSection-98c5ae27.js","chunks/store-892411d9.js","chunks/Spinner-b4526be0.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/NotFound.svelte":{"entry":"pages/NotFound.svelte-1e2d7744.js","css":[],"js":["pages/NotFound.svelte-1e2d7744.js","chunks/vendor-8fe9a59e.js"],"styles":[]},"src/routes/episode/[id]/[season_number]/[episode_number].svelte":{"entry":"pages/episode/[id]/[season_number]/[episode_number].svelte-b2314f8e.js","css":[],"js":["pages/episode/[id]/[season_number]/[episode_number].svelte-b2314f8e.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/seasons/[id]/[season_number].svelte":{"entry":"pages/seasons/[id]/[season_number].svelte-f916dde7.js","css":[],"js":["pages/seasons/[id]/[season_number].svelte-f916dde7.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/person/[id].svelte":{"entry":"pages/person/[id].svelte-88649804.js","css":[],"js":["pages/person/[id].svelte-88649804.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/search/[id].svelte":{"entry":"pages/search/[id].svelte-d421a237.js","css":["assets/Spinner-11011231.css"],"js":["pages/search/[id].svelte-d421a237.js","chunks/vendor-8fe9a59e.js","chunks/MainSection-98c5ae27.js","chunks/store-892411d9.js","chunks/Spinner-b4526be0.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/genre/movie/[id].svelte":{"entry":"pages/genre/movie/[id].svelte-9aaf69d3.js","css":["assets/Spinner-11011231.css"],"js":["pages/genre/movie/[id].svelte-9aaf69d3.js","chunks/vendor-8fe9a59e.js","chunks/MainSection-98c5ae27.js","chunks/store-892411d9.js","chunks/Spinner-b4526be0.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/genre/tv/[id].svelte":{"entry":"pages/genre/tv/[id].svelte-20260e3a.js","css":["assets/Spinner-11011231.css"],"js":["pages/genre/tv/[id].svelte-20260e3a.js","chunks/vendor-8fe9a59e.js","chunks/MainSection-98c5ae27.js","chunks/store-892411d9.js","chunks/Spinner-b4526be0.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/movie/[id].svelte":{"entry":"pages/movie/[id].svelte-6ee5b34d.js","css":["assets/Spinner-11011231.css"],"js":["pages/movie/[id].svelte-6ee5b34d.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/Spinner-b4526be0.js","chunks/Cast-72e210fe.js","chunks/stores-d4b77a7d.js"],"styles":[]},"src/routes/tv/[id].svelte":{"entry":"pages/tv/[id].svelte-3fe98bb0.js","css":["assets/Spinner-11011231.css"],"js":["pages/tv/[id].svelte-3fe98bb0.js","chunks/vendor-8fe9a59e.js","chunks/store-892411d9.js","chunks/stores-d4b77a7d.js","chunks/Spinner-b4526be0.js","chunks/Cast-72e210fe.js"],"styles":[]}};

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