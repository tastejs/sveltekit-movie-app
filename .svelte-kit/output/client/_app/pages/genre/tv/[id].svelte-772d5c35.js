import {
	S as f,
	i as k,
	s as _,
	j as h,
	m as g,
	o as b,
	x as p,
	u,
	v as y,
	l as c,
	f as j,
	w as v,
	d as $,
	L as m,
	M as S,
	r as M,
	H as w
} from '../../../chunks/vendor-8fe9a59e.js';
import { M as q } from '../../../chunks/MainSection-1a73ad24.js';
import { a as l } from '../../../chunks/store-892411d9.js';
import { p as B } from '../../../chunks/stores-d4b77a7d.js';
import '../../../chunks/Spinner-b4526be0.js';
function d(n) {
	let s, a;
	return (
		(s = new q({ props: { api_url_start: n[2], api_url_end: n[1] } })),
		{
			c() {
				h(s.$$.fragment);
			},
			l(t) {
				g(s.$$.fragment, t);
			},
			m(t, r) {
				b(s, t, r), (a = !0);
			},
			p(t, r) {
				const e = {};
				r & 4 && (e.api_url_start = t[2]), r & 2 && (e.api_url_end = t[1]), s.$set(e);
			},
			i(t) {
				a || (p(s.$$.fragment, t), (a = !0));
			},
			o(t) {
				u(s.$$.fragment, t), (a = !1);
			},
			d(t) {
				y(s, t);
			}
		}
	);
}
function C(n) {
	let s = n[0].params.id,
		a,
		t,
		r = d(n);
	return {
		c() {
			r.c(), (a = c());
		},
		l(e) {
			r.l(e), (a = c());
		},
		m(e, o) {
			r.m(e, o), j(e, a, o), (t = !0);
		},
		p(e, [o]) {
			o & 1 && _(s, (s = e[0].params.id))
				? (M(), u(r, 1, 1, w), v(), (r = d(e)), r.c(), p(r), r.m(a.parentNode, a))
				: r.p(e, o);
		},
		i(e) {
			t || (p(r), (t = !0));
		},
		o(e) {
			u(r), (t = !1);
		},
		d(e) {
			e && $(a), r.d(e);
		}
	};
}
function D(n, s, a) {
	let t, r, e, o;
	return (
		m(n, B, (i) => a(0, (e = i))),
		m(n, l, (i) => a(3, (o = i))),
		S(l, (o = 'tv'), o),
		(n.$$.update = () => {
			n.$$.dirty & 1 && a(1, (r = `&with_genres=${e.params.id}&page=`));
		}),
		a(2, (t = 'https://api.themoviedb.org/3/discover/tv?api_key=')),
		[e, r, t]
	);
}
class A extends f {
	constructor(s) {
		super();
		k(this, s, D, C, _, {});
	}
}
export { A as default };
