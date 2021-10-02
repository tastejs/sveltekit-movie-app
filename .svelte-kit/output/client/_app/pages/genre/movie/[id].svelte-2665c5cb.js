import {
	S as f,
	i as k,
	s as m,
	j as h,
	m as g,
	o as b,
	x as p,
	u,
	v as y,
	l as _,
	f as j,
	w as v,
	d as $,
	L as c,
	M as S,
	r as M,
	H as w
} from '../../../chunks/vendor-8fe9a59e.js';
import { M as q } from '../../../chunks/MainSection-1a73ad24.js';
import { a as l } from '../../../chunks/store-892411d9.js';
import { p as B } from '../../../chunks/stores-d4b77a7d.js';
import '../../../chunks/Spinner-b4526be0.js';
function d(o) {
	let s, a;
	return (
		(s = new q({ props: { api_url_start: o[2], api_url_end: o[1] } })),
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
function C(o) {
	let s = o[0].params.id,
		a,
		t,
		r = d(o);
	return {
		c() {
			r.c(), (a = _());
		},
		l(e) {
			r.l(e), (a = _());
		},
		m(e, n) {
			r.m(e, n), j(e, a, n), (t = !0);
		},
		p(e, [n]) {
			n & 1 && m(s, (s = e[0].params.id))
				? (M(), u(r, 1, 1, w), v(), (r = d(e)), r.c(), p(r), r.m(a.parentNode, a))
				: r.p(e, n);
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
function D(o, s, a) {
	let t, r, e, n;
	return (
		c(o, B, (i) => a(0, (e = i))),
		c(o, l, (i) => a(3, (n = i))),
		S(l, (n = 'movie'), n),
		(o.$$.update = () => {
			o.$$.dirty & 1 && a(1, (r = `&with_genres=${e.params.id}&page=`));
		}),
		a(2, (t = 'https://api.themoviedb.org/3/discover/movie?api_key=')),
		[e, r, t]
	);
}
class A extends f {
	constructor(s) {
		super();
		k(this, s, D, C, m, {});
	}
}
export { A as default };
