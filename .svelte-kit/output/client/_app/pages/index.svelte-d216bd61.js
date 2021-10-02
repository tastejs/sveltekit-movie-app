import {
	S as d,
	i as k,
	s as c,
	j as h,
	m as g,
	o as b,
	x as u,
	u as p,
	v as y,
	l as _,
	f as j,
	w as $,
	d as S,
	L as l,
	M,
	r as v,
	H as w
} from '../chunks/vendor-8fe9a59e.js';
import { M as q } from '../chunks/MainSection-1a73ad24.js';
import { s as m, a as B } from '../chunks/store-892411d9.js';
import '../chunks/Spinner-b4526be0.js';
import '../chunks/stores-d4b77a7d.js';
function f(a) {
	let r, s;
	return (
		(r = new q({ props: { api_url_start: a[2], api_url_end: a[1] } })),
		{
			c() {
				h(r.$$.fragment);
			},
			l(t) {
				g(r.$$.fragment, t);
			},
			m(t, n) {
				b(r, t, n), (s = !0);
			},
			p(t, n) {
				const e = {};
				n & 4 && (e.api_url_start = t[2]), n & 2 && (e.api_url_end = t[1]), r.$set(e);
			},
			i(t) {
				s || (u(r.$$.fragment, t), (s = !0));
			},
			o(t) {
				p(r.$$.fragment, t), (s = !1);
			},
			d(t) {
				y(r, t);
			}
		}
	);
}
function C(a) {
	let r = a[0],
		s,
		t,
		n = f(a);
	return {
		c() {
			n.c(), (s = _());
		},
		l(e) {
			n.l(e), (s = _());
		},
		m(e, o) {
			n.m(e, o), j(e, s, o), (t = !0);
		},
		p(e, [o]) {
			o & 1 && c(r, (r = e[0]))
				? (v(), p(n, 1, 1, w), $(), (n = f(e)), n.c(), u(n), n.m(s.parentNode, s))
				: n.p(e, o);
		},
		i(e) {
			t || (u(n), (t = !0));
		},
		o(e) {
			p(n), (t = !1);
		},
		d(e) {
			e && S(s), n.d(e);
		}
	};
}
function G(a, r, s) {
	let t, n, e, o;
	return (
		l(a, B, (i) => s(0, (e = i))),
		l(a, m, (i) => s(3, (o = i))),
		M(m, (o = null), o),
		(a.$$.update = () => {
			a.$$.dirty & 1 && s(2, (t = `https://api.themoviedb.org/3/trending/${e}/week?api_key=`));
		}),
		s(1, (n = '&language=en-GB&page=')),
		[e, n, t]
	);
}
class A extends d {
	constructor(r) {
		super();
		k(this, r, G, C, c, {});
	}
}
export { A as default };
