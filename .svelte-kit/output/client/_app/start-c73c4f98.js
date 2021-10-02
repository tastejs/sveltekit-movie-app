var ae = Object.defineProperty,
	le = Object.defineProperties;
var ue = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
	Y = Object.prototype.propertyIsEnumerable;
var X = (r, e, t) =>
		e in r ? ae(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
	R = (r, e) => {
		for (var t in e || (e = {})) M.call(e, t) && X(r, t, e[t]);
		if (N) for (var t of N(e)) Y.call(e, t) && X(r, t, e[t]);
		return r;
	},
	H = (r, e) => le(r, ue(e));
var Q = (r, e) => {
	var t = {};
	for (var s in r) M.call(r, s) && e.indexOf(s) < 0 && (t[s] = r[s]);
	if (r != null && N) for (var s of N(r)) e.indexOf(s) < 0 && Y.call(r, s) && (t[s] = r[s]);
	return t;
};
import {
	S as ce,
	i as fe,
	s as he,
	e as de,
	c as _e,
	a as pe,
	d as $,
	b as C,
	f as k,
	t as me,
	g as ge,
	h as we,
	j as A,
	k as be,
	l as y,
	m as B,
	n as ve,
	o as j,
	p as K,
	q as W,
	r as P,
	u as E,
	v as T,
	w as O,
	x as g,
	y as ye,
	z as Ee,
	A as $e,
	B as z,
	C as F
} from './chunks/vendor-8fe9a59e.js';
import { i as Re } from './chunks/singletons-12a22614.js';
function Z(r) {
	let e, t, s;
	const i = [r[2] || {}];
	var o = r[0][1];
	function n(a) {
		let l = { $$slots: { default: [ke] }, $$scope: { ctx: a } };
		for (let u = 0; u < i.length; u += 1) l = z(l, i[u]);
		return { props: l };
	}
	return (
		o && (e = new o(n(r))),
		{
			c() {
				e && A(e.$$.fragment), (t = y());
			},
			l(a) {
				e && B(e.$$.fragment, a), (t = y());
			},
			m(a, l) {
				e && j(e, a, l), k(a, t, l), (s = !0);
			},
			p(a, l) {
				const u = l & 4 ? K(i, [W(a[2] || {})]) : {};
				if ((l & 521 && (u.$$scope = { dirty: l, ctx: a }), o !== (o = a[0][1]))) {
					if (e) {
						P();
						const c = e;
						E(c.$$.fragment, 1, 0, () => {
							T(c, 1);
						}),
							O();
					}
					o
						? ((e = new o(n(a))), A(e.$$.fragment), g(e.$$.fragment, 1), j(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(u);
			},
			i(a) {
				s || (e && g(e.$$.fragment, a), (s = !0));
			},
			o(a) {
				e && E(e.$$.fragment, a), (s = !1);
			},
			d(a) {
				a && $(t), e && T(e, a);
			}
		}
	);
}
function x(r) {
	let e, t, s;
	const i = [r[3] || {}];
	var o = r[0][2];
	function n(a) {
		let l = {};
		for (let u = 0; u < i.length; u += 1) l = z(l, i[u]);
		return { props: l };
	}
	return (
		o && (e = new o(n())),
		{
			c() {
				e && A(e.$$.fragment), (t = y());
			},
			l(a) {
				e && B(e.$$.fragment, a), (t = y());
			},
			m(a, l) {
				e && j(e, a, l), k(a, t, l), (s = !0);
			},
			p(a, l) {
				const u = l & 8 ? K(i, [W(a[3] || {})]) : {};
				if (o !== (o = a[0][2])) {
					if (e) {
						P();
						const c = e;
						E(c.$$.fragment, 1, 0, () => {
							T(c, 1);
						}),
							O();
					}
					o
						? ((e = new o(n())), A(e.$$.fragment), g(e.$$.fragment, 1), j(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(u);
			},
			i(a) {
				s || (e && g(e.$$.fragment, a), (s = !0));
			},
			o(a) {
				e && E(e.$$.fragment, a), (s = !1);
			},
			d(a) {
				a && $(t), e && T(e, a);
			}
		}
	);
}
function ke(r) {
	let e,
		t,
		s = r[0][2] && x(r);
	return {
		c() {
			s && s.c(), (e = y());
		},
		l(i) {
			s && s.l(i), (e = y());
		},
		m(i, o) {
			s && s.m(i, o), k(i, e, o), (t = !0);
		},
		p(i, o) {
			i[0][2]
				? s
					? (s.p(i, o), o & 1 && g(s, 1))
					: ((s = x(i)), s.c(), g(s, 1), s.m(e.parentNode, e))
				: s &&
				  (P(),
				  E(s, 1, 1, () => {
						s = null;
				  }),
				  O());
		},
		i(i) {
			t || (g(s), (t = !0));
		},
		o(i) {
			E(s), (t = !1);
		},
		d(i) {
			s && s.d(i), i && $(e);
		}
	};
}
function Le(r) {
	let e,
		t,
		s = r[0][1] && Z(r);
	return {
		c() {
			s && s.c(), (e = y());
		},
		l(i) {
			s && s.l(i), (e = y());
		},
		m(i, o) {
			s && s.m(i, o), k(i, e, o), (t = !0);
		},
		p(i, o) {
			i[0][1]
				? s
					? (s.p(i, o), o & 1 && g(s, 1))
					: ((s = Z(i)), s.c(), g(s, 1), s.m(e.parentNode, e))
				: s &&
				  (P(),
				  E(s, 1, 1, () => {
						s = null;
				  }),
				  O());
		},
		i(i) {
			t || (g(s), (t = !0));
		},
		o(i) {
			E(s), (t = !1);
		},
		d(i) {
			s && s.d(i), i && $(e);
		}
	};
}
function ee(r) {
	let e,
		t = r[5] && te(r);
	return {
		c() {
			(e = de('div')), t && t.c(), this.h();
		},
		l(s) {
			e = _e(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var i = pe(e);
			t && t.l(i), i.forEach($), this.h();
		},
		h() {
			C(e, 'id', 'svelte-announcer'),
				C(e, 'aria-live', 'assertive'),
				C(e, 'aria-atomic', 'true'),
				C(e, 'class', 'svelte-1pdgbjn');
		},
		m(s, i) {
			k(s, e, i), t && t.m(e, null);
		},
		p(s, i) {
			s[5] ? (t ? t.p(s, i) : ((t = te(s)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(s) {
			s && $(e), t && t.d();
		}
	};
}
function te(r) {
	let e;
	return {
		c() {
			e = me(r[6]);
		},
		l(t) {
			e = ge(t, r[6]);
		},
		m(t, s) {
			k(t, e, s);
		},
		p(t, s) {
			s & 64 && we(e, t[6]);
		},
		d(t) {
			t && $(e);
		}
	};
}
function Se(r) {
	let e, t, s, i;
	const o = [r[1] || {}];
	var n = r[0][0];
	function a(u) {
		let c = { $$slots: { default: [Le] }, $$scope: { ctx: u } };
		for (let h = 0; h < o.length; h += 1) c = z(c, o[h]);
		return { props: c };
	}
	n && (e = new n(a(r)));
	let l = r[4] && ee(r);
	return {
		c() {
			e && A(e.$$.fragment), (t = be()), l && l.c(), (s = y());
		},
		l(u) {
			e && B(e.$$.fragment, u), (t = ve(u)), l && l.l(u), (s = y());
		},
		m(u, c) {
			e && j(e, u, c), k(u, t, c), l && l.m(u, c), k(u, s, c), (i = !0);
		},
		p(u, [c]) {
			const h = c & 2 ? K(o, [W(u[1] || {})]) : {};
			if ((c & 525 && (h.$$scope = { dirty: c, ctx: u }), n !== (n = u[0][0]))) {
				if (e) {
					P();
					const d = e;
					E(d.$$.fragment, 1, 0, () => {
						T(d, 1);
					}),
						O();
				}
				n
					? ((e = new n(a(u))), A(e.$$.fragment), g(e.$$.fragment, 1), j(e, t.parentNode, t))
					: (e = null);
			} else n && e.$set(h);
			u[4]
				? l
					? l.p(u, c)
					: ((l = ee(u)), l.c(), l.m(s.parentNode, s))
				: l && (l.d(1), (l = null));
		},
		i(u) {
			i || (e && g(e.$$.fragment, u), (i = !0));
		},
		o(u) {
			e && E(e.$$.fragment, u), (i = !1);
		},
		d(u) {
			e && T(e, u), u && $(t), l && l.d(u), u && $(s);
		}
	};
}
function qe(r, e, t) {
	let { stores: s } = e,
		{ page: i } = e,
		{ components: o } = e,
		{ props_0: n = null } = e,
		{ props_1: a = null } = e,
		{ props_2: l = null } = e;
	ye('__svelte__', s), Ee(s.page.notify);
	let u = !1,
		c = !1,
		h = null;
	return (
		$e(() => {
			const d = s.page.subscribe(() => {
				u && (t(5, (c = !0)), t(6, (h = document.title || 'untitled page')));
			});
			return t(4, (u = !0)), d;
		}),
		(r.$$set = (d) => {
			'stores' in d && t(7, (s = d.stores)),
				'page' in d && t(8, (i = d.page)),
				'components' in d && t(0, (o = d.components)),
				'props_0' in d && t(1, (n = d.props_0)),
				'props_1' in d && t(2, (a = d.props_1)),
				'props_2' in d && t(3, (l = d.props_2));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 384 && s.page.set(i);
		}),
		[o, n, a, l, u, c, h, s, i]
	);
}
class Ae extends ce {
	constructor(e) {
		super();
		fe(this, e, qe, Se, he, {
			stores: 7,
			page: 8,
			components: 0,
			props_0: 1,
			props_1: 2,
			props_2: 3
		});
	}
}
const je = 'modulepreload',
	se = {},
	Te = '/_app/',
	w = function (e, t) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((s) => {
						if (((s = `${Te}${s}`), s in se)) return;
						se[s] = !0;
						const i = s.endsWith('.css'),
							o = i ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${s}"]${o}`)) return;
						const n = document.createElement('link');
						if (
							((n.rel = i ? 'stylesheet' : je),
							i || ((n.as = 'script'), (n.crossOrigin = '')),
							(n.href = s),
							document.head.appendChild(n),
							i)
						)
							return new Promise((a, l) => {
								n.addEventListener('load', a), n.addEventListener('error', l);
							});
					})
			  ).then(() => e());
	},
	f = [
		() =>
			w(
				() => import('./pages/__layout.svelte-4fcc0572.js'),
				[
					'pages/__layout.svelte-4fcc0572.js',
					'assets/pages/__layout.svelte-87c9195c.css',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/singletons-12a22614.js'
				]
			),
		() =>
			w(
				() => import('./pages/__error.svelte-e843333a.js'),
				[
					'pages/__error.svelte-e843333a.js',
					'assets/pages/__error.svelte-8a5069d9.css',
					'chunks/vendor-8fe9a59e.js'
				]
			),
		() =>
			w(
				() => import('./pages/index.svelte-d216bd61.js'),
				[
					'pages/index.svelte-d216bd61.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/MainSection-1a73ad24.js',
					'chunks/store-892411d9.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/NotFound.svelte-1e2d7744.js'),
				['pages/NotFound.svelte-1e2d7744.js', 'chunks/vendor-8fe9a59e.js']
			),
		() =>
			w(
				() => import('./pages/episode/[id]/[season_number]/[episode_number].svelte-b2314f8e.js'),
				[
					'pages/episode/[id]/[season_number]/[episode_number].svelte-b2314f8e.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/seasons/[id]/[season_number].svelte-d02d9a7a.js'),
				[
					'pages/seasons/[id]/[season_number].svelte-d02d9a7a.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/person/[id].svelte-760f9303.js'),
				[
					'pages/person/[id].svelte-760f9303.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/search/[id].svelte-1dddffde.js'),
				[
					'pages/search/[id].svelte-1dddffde.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/MainSection-1a73ad24.js',
					'chunks/store-892411d9.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/genre/movie/[id].svelte-2665c5cb.js'),
				[
					'pages/genre/movie/[id].svelte-2665c5cb.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/MainSection-1a73ad24.js',
					'chunks/store-892411d9.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/genre/tv/[id].svelte-772d5c35.js'),
				[
					'pages/genre/tv/[id].svelte-772d5c35.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/MainSection-1a73ad24.js',
					'chunks/store-892411d9.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/movie/[id].svelte-6ee5b34d.js'),
				[
					'pages/movie/[id].svelte-6ee5b34d.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/Cast-72e210fe.js',
					'chunks/stores-d4b77a7d.js'
				]
			),
		() =>
			w(
				() => import('./pages/tv/[id].svelte-b0f450f9.js'),
				[
					'pages/tv/[id].svelte-b0f450f9.js',
					'chunks/vendor-8fe9a59e.js',
					'chunks/store-892411d9.js',
					'chunks/stores-d4b77a7d.js',
					'chunks/Spinner-b4526be0.js',
					'assets/Spinner-11011231.css',
					'chunks/Cast-72e210fe.js'
				]
			)
	],
	v = decodeURIComponent,
	Ue = [
		[/^\/$/, [f[0], f[2]], [f[1]]],
		[/^\/NotFound\/?$/, [f[0], f[3]], [f[1]]],
		[
			/^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
			[f[0], f[4]],
			[f[1]],
			(r) => ({ id: v(r[1]), season_number: v(r[2]), episode_number: v(r[3]) })
		],
		[
			/^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,
			[f[0], f[5]],
			[f[1]],
			(r) => ({ id: v(r[1]), season_number: v(r[2]) })
		],
		[/^\/person\/([^/]+?)\/?$/, [f[0], f[6]], [f[1]], (r) => ({ id: v(r[1]) })],
		[/^\/search\/([^/]+?)\/?$/, [f[0], f[7]], [f[1]], (r) => ({ id: v(r[1]) })],
		[/^\/genre\/movie\/([^/]+?)\/?$/, [f[0], f[8]], [f[1]], (r) => ({ id: v(r[1]) })],
		[/^\/genre\/tv\/([^/]+?)\/?$/, [f[0], f[9]], [f[1]], (r) => ({ id: v(r[1]) })],
		[/^\/movie\/([^/]+?)\/?$/, [f[0], f[10]], [f[1]], (r) => ({ id: v(r[1]) })],
		[/^\/tv\/([^/]+?)\/?$/, [f[0], f[11]], [f[1]], (r) => ({ id: v(r[1]) })]
	],
	Ie = [f[0](), f[1]()];
function Pe(r) {
	let e = r.baseURI;
	if (!e) {
		const t = r.getElementsByTagName('base');
		e = t.length ? t[0].href : r.URL;
	}
	return e;
}
let re = '';
function Oe(r) {
	(re = r.base), r.assets;
}
function G() {
	return { x: pageXOffset, y: pageYOffset };
}
function ie(r) {
	for (; r && r.nodeName.toUpperCase() !== 'A'; ) r = r.parentNode;
	return r;
}
function ne(r) {
	return r instanceof SVGAElement ? new URL(r.href.baseVal, document.baseURI) : new URL(r.href);
}
class Ve {
	constructor({ base: e, routes: t, trailing_slash: s, renderer: i }) {
		(this.base = e),
			(this.routes = t),
			(this.trailing_slash = s),
			(this.renderer = i),
			(i.router = this),
			(this.enabled = !0),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	init_listeners() {
		'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			});
		let e;
		addEventListener('scroll', () => {
			clearTimeout(e),
				(e = setTimeout(() => {
					const o = H(R({}, history.state || {}), { 'sveltekit:scroll': G() });
					history.replaceState(o, document.title, window.location.href);
				}, 50));
		});
		const t = (o) => {
			const n = ie(o.target);
			n && n.href && n.hasAttribute('sveltekit:prefetch') && this.prefetch(ne(n));
		};
		let s;
		const i = (o) => {
			clearTimeout(s),
				(s = setTimeout(() => {
					t(o);
				}, 20));
		};
		addEventListener('touchstart', t),
			addEventListener('mousemove', i),
			addEventListener('click', (o) => {
				if (
					!this.enabled ||
					o.button ||
					o.which !== 1 ||
					o.metaKey ||
					o.ctrlKey ||
					o.shiftKey ||
					o.altKey ||
					o.defaultPrevented
				)
					return;
				const n = ie(o.target);
				if (!n || !n.href) return;
				const a = ne(n);
				if (a.toString() === location.href) {
					location.hash || o.preventDefault();
					return;
				}
				const l = (n.getAttribute('rel') || '').split(/\s+/);
				if (
					n.hasAttribute('download') ||
					(l && l.includes('external')) ||
					(n instanceof SVGAElement ? n.target.baseVal : n.target) ||
					!this.owns(a)
				)
					return;
				const u = n.hasAttribute('sveltekit:noscroll');
				history.pushState({}, '', a.href),
					this._navigate(a, u ? G() : null, !1, [], a.hash),
					o.preventDefault();
			}),
			addEventListener('popstate', (o) => {
				if (o.state && this.enabled) {
					const n = new URL(location.href);
					this._navigate(n, o.state['sveltekit:scroll'], !1, []);
				}
			});
	}
	owns(e) {
		return e.origin === location.origin && e.pathname.startsWith(this.base);
	}
	parse(e) {
		if (this.owns(e)) {
			const t = e.pathname.slice(this.base.length) || '/',
				s = decodeURI(t),
				i = this.routes.filter(([a]) => a.test(s)),
				o = new URLSearchParams(e.search);
			return { id: `${t}?${o}`, routes: i, path: t, decoded_path: s, query: o };
		}
	}
	async goto(
		e,
		{ noscroll: t = !1, replaceState: s = !1, keepfocus: i = !1, state: o = {} } = {},
		n
	) {
		const a = new URL(e, Pe(document));
		return this.enabled && this.owns(a)
			? (history[s ? 'replaceState' : 'pushState'](o, '', e),
			  this._navigate(a, t ? G() : null, i, n, a.hash))
			: ((location.href = a.href), new Promise(() => {}));
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(e) {
		const t = this.parse(e);
		if (!t) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return this.renderer.load(t);
	}
	async _navigate(e, t, s, i, o) {
		const n = this.parse(e);
		if (!n) throw new Error('Attempted to navigate to a URL that does not belong to this app');
		if (n.path !== '/') {
			const a = n.path.endsWith('/');
			((a && this.trailing_slash === 'never') ||
				(!a &&
					this.trailing_slash === 'always' &&
					!(n.path.split('/').pop() || '').includes('.'))) &&
				((n.path = a ? n.path.slice(0, -1) : n.path + '/'),
				history.replaceState({}, '', `${this.base}${n.path}${location.search}`));
		}
		this.renderer.notify({ path: n.path, query: n.query }),
			await this.renderer.update(n, i, !1, { hash: o, scroll: t, keepfocus: s });
	}
}
function oe(r) {
	return r instanceof Error || (r && r.name && r.message) ? r : new Error(JSON.stringify(r));
}
function De(r) {
	let e = 5381,
		t = r.length;
	if (typeof r == 'string') for (; t; ) e = (e * 33) ^ r.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ r[--t];
	return (e >>> 0).toString(36);
}
function Ne(r) {
	const e = r.status && r.status >= 400 && r.status <= 599 && !r.redirect;
	if (r.error || e) {
		const t = r.status;
		if (!r.error && e) return { status: t || 500, error: new Error() };
		const s = typeof r.error == 'string' ? new Error(r.error) : r.error;
		return s instanceof Error
			? !t || t < 400 || t > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: s })
				: { status: t, error: s }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`
					)
			  };
	}
	if (r.redirect) {
		if (!r.status || Math.floor(r.status / 100) !== 3)
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if (typeof r.redirect != 'string')
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	if (r.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return r;
}
function Ce(r) {
	const e = F(r);
	let t = !0;
	function s() {
		(t = !0), e.update((n) => n);
	}
	function i(n) {
		(t = !1), e.set(n);
	}
	function o(n) {
		let a;
		return e.subscribe((l) => {
			(a === void 0 || (t && l !== a)) && n((a = l));
		});
	}
	return { notify: s, set: i, subscribe: o };
}
function Be(r, e) {
	let s = `script[data-type="svelte-data"][data-url="${typeof r == 'string' ? r : r.url}"]`;
	e && typeof e.body == 'string' && (s += `[data-body="${De(e.body)}"]`);
	const i = document.querySelector(s);
	if (i && i.textContent) {
		const o = JSON.parse(i.textContent),
			{ body: n } = o,
			a = Q(o, ['body']);
		return Promise.resolve(new Response(n, a));
	}
	return fetch(r, e);
}
class Ke {
	constructor({ Root: e, fallback: t, target: s, session: i, host: o }) {
		(this.Root = e),
			(this.fallback = t),
			(this.host = o),
			this.router,
			(this.target = s),
			(this.started = !1),
			(this.session_id = 1),
			(this.invalid = new Set()),
			(this.invalidating = null),
			(this.current = { page: null, session_id: 0, branch: [] }),
			(this.cache = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: Ce({}), navigating: F(null), session: F(i) }),
			(this.$session = null),
			(this.root = null);
		let n = !1;
		this.stores.session.subscribe(async (a) => {
			if (((this.$session = a), !n || !this.router)) return;
			this.session_id += 1;
			const l = this.router.parse(new URL(location.href));
			l && this.update(l, [], !0);
		}),
			(n = !0);
	}
	async start({ status: e, error: t, nodes: s, page: i }) {
		const o = [];
		let n = {},
			a,
			l;
		try {
			for (let u = 0; u < s.length; u += 1) {
				const c = u === s.length - 1,
					h = await this._load_node({
						module: await s[u],
						page: i,
						stuff: n,
						status: c ? e : void 0,
						error: c ? t : void 0
					});
				if ((o.push(h), h && h.loaded))
					if (h.loaded.error) {
						if (t) throw h.loaded.error;
						l = { status: h.loaded.status, error: h.loaded.error, path: i.path, query: i.query };
					} else h.loaded.stuff && (n = R(R({}, n), h.loaded.stuff));
			}
			a = l
				? await this._load_error(l)
				: await this._get_navigation_result_from_branch({ page: i, branch: o });
		} catch (u) {
			if (t) throw u;
			a = await this._load_error({ status: 500, error: oe(u), path: i.path, query: i.query });
		}
		if (a.redirect) {
			location.href = new URL(a.redirect, location.href).href;
			return;
		}
		this._init(a);
	}
	notify({ path: e, query: t }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: e, query: t }
				});
	}
	async update(e, t, s, i) {
		const o = (this.token = {});
		let n = await this._get_navigation_result(e, s);
		if (o !== this.token) return;
		if ((this.invalid.clear(), n.redirect))
			if (t.length > 10 || t.includes(e.path))
				n = await this._load_error({
					status: 500,
					error: new Error('Redirect loop'),
					path: e.path,
					query: e.query
				});
			else {
				this.router
					? this.router.goto(n.redirect, { replaceState: !0 }, [...t, e.path])
					: (location.href = new URL(n.redirect, location.href).href);
				return;
			}
		if (
			(n.reload
				? location.reload()
				: this.started
				? ((this.current = n.state), this.root.$set(n.props), this.stores.navigating.set(null))
				: this._init(n),
			i)
		) {
			const { hash: l, scroll: u, keepfocus: c } = i;
			c || document.body.focus();
			const h = l && document.getElementById(l.slice(1));
			u ? scrollTo(u.x, u.y) : h ? h.scrollIntoView() : scrollTo(0, 0);
		}
		if (
			(await 0,
			dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null),
			!this.router)
		)
			return;
		const a = n.state.branch[n.state.branch.length - 1];
		a && a.module.router === !1 ? this.router.disable() : this.router.enable();
	}
	load(e) {
		return (
			(this.loading.promise = this._get_navigation_result(e, !1)),
			(this.loading.id = e.id),
			this.loading.promise
		);
	}
	invalidate(e) {
		return (
			this.invalid.add(e),
			this.invalidating ||
				(this.invalidating = Promise.resolve().then(async () => {
					const t = this.router && this.router.parse(new URL(location.href));
					t && (await this.update(t, [], !0)), (this.invalidating = null);
				})),
			this.invalidating
		);
	}
	_init(e) {
		this.current = e.state;
		const t = document.querySelector('style[data-svelte]');
		t && t.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: R({ stores: this.stores }, e.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _get_navigation_result(e, t) {
		if (this.loading.id === e.id && this.loading.promise) return this.loading.promise;
		for (let s = 0; s < e.routes.length; s += 1) {
			const i = e.routes[s];
			if (i.length === 1) return { reload: !0, props: {}, state: this.current };
			let o = s + 1;
			for (; o < e.routes.length; ) {
				const a = e.routes[o];
				if (a[0].toString() === i[0].toString())
					a.length !== 1 && a[1].forEach((l) => l()), (o += 1);
				else break;
			}
			const n = await this._load({ route: i, info: e }, t);
			if (n) return n;
		}
		return await this._load_error({
			status: 404,
			error: new Error(`Not found: ${e.path}`),
			path: e.path,
			query: e.query
		});
	}
	async _get_navigation_result_from_branch({ page: e, branch: t }) {
		const s = t.filter(Boolean),
			i = s.find((l) => l.loaded && l.loaded.redirect),
			o = {
				redirect: i && i.loaded ? i.loaded.redirect : void 0,
				state: { page: e, branch: t, session_id: this.session_id },
				props: { components: s.map((l) => l.module.default) }
			};
		for (let l = 0; l < s.length; l += 1) {
			const u = s[l].loaded;
			o.props[`props_${l}`] = u ? await u.props : null;
		}
		(!this.current.page ||
			e.path !== this.current.page.path ||
			e.query.toString() !== this.current.page.query.toString()) &&
			(o.props.page = e);
		const n = s[s.length - 1],
			a = n.loaded && n.loaded.maxage;
		if (a) {
			const l = `${e.path}?${e.query}`;
			let u = !1;
			const c = () => {
					this.cache.get(l) === o && this.cache.delete(l), d(), clearTimeout(h);
				},
				h = setTimeout(c, a * 1e3),
				d = this.stores.session.subscribe(() => {
					u && c();
				});
			(u = !0), this.cache.set(l, o);
		}
		return o;
	}
	async _load_node({ status: e, error: t, module: s, page: i, stuff: o }) {
		const n = {
				module: s,
				uses: { params: new Set(), path: !1, query: !1, session: !1, stuff: !1, dependencies: [] },
				loaded: null,
				stuff: o
			},
			a = {};
		for (const u in i.params)
			Object.defineProperty(a, u, {
				get() {
					return n.uses.params.add(u), i.params[u];
				},
				enumerable: !0
			});
		const l = this.$session;
		if (s.load) {
			const { started: u } = this,
				c = {
					page: {
						host: i.host,
						params: a,
						get path() {
							return (n.uses.path = !0), i.path;
						},
						get query() {
							return (n.uses.query = !0), i.query;
						}
					},
					get session() {
						return (n.uses.session = !0), l;
					},
					get stuff() {
						return (n.uses.stuff = !0), R({}, o);
					},
					fetch(d, S) {
						const L = typeof d == 'string' ? d : d.url,
							{ href: U } = new URL(L, new URL(i.path, document.baseURI));
						return n.uses.dependencies.push(U), u ? fetch(d, S) : Be(d, S);
					}
				};
			t && ((c.status = e), (c.error = t));
			const h = await s.load.call(null, c);
			if (!h) return;
			(n.loaded = Ne(h)), n.loaded.stuff && (n.stuff = n.loaded.stuff);
		}
		return n;
	}
	async _load({ route: e, info: { path: t, decoded_path: s, query: i } }, o) {
		const n = `${s}?${i}`;
		if (!o) {
			const _ = this.cache.get(n);
			if (_) return _;
		}
		const [a, l, u, c] = e,
			h = c ? c(a.exec(s)) : {},
			d = this.current.page && {
				path: t !== this.current.page.path,
				params: Object.keys(h).filter((_) => this.current.page.params[_] !== h[_]),
				query: i.toString() !== this.current.page.query.toString(),
				session: this.session_id !== this.current.session_id
			},
			S = { host: this.host, path: t, query: i, params: h };
		let L = [],
			U = {},
			J = !1,
			V = 200,
			I;
		l.forEach((_) => _());
		e: for (let _ = 0; _ < l.length; _ += 1) {
			let p;
			try {
				if (!l[_]) continue;
				const b = await l[_](),
					m = this.current.branch[_];
				if (
					!m ||
					b !== m.module ||
					(d.path && m.uses.path) ||
					d.params.some((q) => m.uses.params.has(q)) ||
					(d.query && m.uses.query) ||
					(d.session && m.uses.session) ||
					m.uses.dependencies.some((q) => this.invalid.has(q)) ||
					(J && m.uses.stuff)
				) {
					p = await this._load_node({ module: b, page: S, stuff: U });
					const q = _ === l.length - 1;
					if (p && p.loaded) {
						if (
							(p.loaded.error && ((V = p.loaded.status), (I = p.loaded.error)), p.loaded.redirect)
						)
							return { redirect: p.loaded.redirect, props: {}, state: this.current };
						p.loaded.stuff && (J = !0);
					} else if (q && b.load) return;
				} else p = m;
			} catch (b) {
				(V = 500), (I = oe(b));
			}
			if (I) {
				for (; _--; )
					if (u[_]) {
						let b,
							m,
							D = _;
						for (; !(m = L[D]); ) D -= 1;
						try {
							if (
								((b = await this._load_node({
									status: V,
									error: I,
									module: await u[_](),
									page: S,
									stuff: m.stuff
								})),
								b && b.loaded && b.loaded.error)
							)
								continue;
							L = L.slice(0, D + 1).concat(b);
							break e;
						} catch (q) {
							continue;
						}
					}
				return await this._load_error({ status: V, error: I, path: t, query: i });
			} else p && p.loaded && p.loaded.stuff && (U = R(R({}, U), p.loaded.stuff)), L.push(p);
		}
		return await this._get_navigation_result_from_branch({ page: S, branch: L });
	}
	async _load_error({ status: e, error: t, path: s, query: i }) {
		const o = { host: this.host, path: s, query: i, params: {} },
			n = await this._load_node({ module: await this.fallback[0], page: o, stuff: {} }),
			a = [
				n,
				await this._load_node({
					status: e,
					error: t,
					module: await this.fallback[1],
					page: o,
					stuff: (n && n.loaded && n.loaded.stuff) || {}
				})
			];
		return await this._get_navigation_result_from_branch({ page: o, branch: a });
	}
}
async function Ge({
	paths: r,
	target: e,
	session: t,
	host: s,
	route: i,
	spa: o,
	trailing_slash: n,
	hydrate: a
}) {
	const l = new Ke({ Root: Ae, fallback: Ie, target: e, session: t, host: s }),
		u = i ? new Ve({ base: r.base, routes: Ue, trailing_slash: n, renderer: l }) : null;
	Re(u),
		Oe(r),
		a && (await l.start(a)),
		u && (o && u.goto(location.href, { replaceState: !0 }, []), u.init_listeners()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Ge as start };
