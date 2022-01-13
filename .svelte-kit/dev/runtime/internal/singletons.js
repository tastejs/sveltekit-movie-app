/** @type {import('./router').Router?} */
let router;

/** @type {import('./renderer').Renderer} */
let renderer;

/**
 * @param {{
 *   router: import('./router').Router?;
 *   renderer: import('./renderer').Renderer;
 * }} opts
 */
function init(opts) {
	router = opts.router;
	renderer = opts.renderer;
}

export { init, renderer, router };
