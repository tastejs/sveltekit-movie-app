const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\NotFound.svelte"),
	() => import("..\\..\\..\\src\\routes\\trending\\[media].svelte"),
	() => import("..\\..\\..\\src\\routes\\episode\\[id]\\[season_number]\\[episode_number].svelte"),
	() => import("..\\..\\..\\src\\routes\\seasons\\[id]\\[season_number].svelte"),
	() => import("..\\..\\..\\src\\routes\\person\\[id].svelte"),
	() => import("..\\..\\..\\src\\routes\\search\\[id].svelte"),
	() => import("..\\..\\..\\src\\routes\\genre\\[media]\\[id].svelte"),
	() => import("..\\..\\..\\src\\routes\\movie\\[id].svelte"),
	() => import("..\\..\\..\\src\\routes\\tv\\[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/NotFound.svelte
	[/^\/NotFound\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/trending/[media].svelte
	[/^\/trending\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ media: d(m[1])})],

	// src/routes/episode/[id]/[season_number]/[episode_number].svelte
	[/^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1]), season_number: d(m[2]), episode_number: d(m[3])})],

	// src/routes/seasons/[id]/[season_number].svelte
	[/^\/seasons\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ id: d(m[1]), season_number: d(m[2])})],

	// src/routes/person/[id].svelte
	[/^\/person\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/search/[id].svelte
	[/^\/search\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/genre/[media]/[id].svelte
	[/^\/genre\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[9]], [c[1]], (m) => ({ media: d(m[1]), id: d(m[2])})],

	// src/routes/movie/[id].svelte
	[/^\/movie\/([^/]+?)\/?$/, [c[0], c[10]], [c[1]], (m) => ({ id: d(m[1])})],

	,

	,

	,

	,

	// src/routes/tv/[id].svelte
	[/^\/tv\/([^/]+?)\/?$/, [c[0], c[11]], [c[1]], (m) => ({ id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];