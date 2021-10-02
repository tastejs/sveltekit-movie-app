import {
	S as M,
	i as q,
	s as m,
	l as _,
	f as d,
	u,
	w as k,
	x as p,
	d as b,
	L as g,
	r as $,
	j as y,
	m as h,
	o as S,
	H as j,
	v
} from '../../chunks/vendor-8fe9a59e.js';
import { S as B, M as N } from '../../chunks/MainSection-1a73ad24.js';
import { p as C } from '../../chunks/stores-d4b77a7d.js';
import { a as D } from '../../chunks/store-892411d9.js';
import '../../chunks/Spinner-b4526be0.js';
function G(s) {
	let t, r;
	return (
		(t = new B({})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				S(t, e, n), (r = !0);
			},
			p: j,
			i(e) {
				r || (p(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				u(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				v(t, e);
			}
		}
	);
}
function H(s) {
	let t = s[0],
		r,
		e,
		n = w(s);
	return {
		c() {
			n.c(), (r = _());
		},
		l(o) {
			n.l(o), (r = _());
		},
		m(o, a) {
			n.m(o, a), d(o, r, a), (e = !0);
		},
		p(o, a) {
			a & 1 && m(t, (t = o[0]))
				? ($(), u(n, 1, 1, j), k(), (n = w(o)), n.c(), p(n), n.m(r.parentNode, r))
				: n.p(o, a);
		},
		i(o) {
			e || (p(n), (e = !0));
		},
		o(o) {
			u(n), (e = !1);
		},
		d(o) {
			o && b(r), n.d(o);
		}
	};
}
function w(s) {
	let t, r;
	return (
		(t = new N({ props: { api_url_start: s[2], api_url_end: s[1] } })),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				S(t, e, n), (r = !0);
			},
			p(e, n) {
				const o = {};
				n & 4 && (o.api_url_start = e[2]), n & 2 && (o.api_url_end = e[1]), t.$set(o);
			},
			i(e) {
				r || (p(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				u(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				v(t, e);
			}
		}
	);
}
function L(s) {
	let t, r, e, n;
	const o = [H, G],
		a = [];
	function l(i, c) {
		return i[0].params.id ? 0 : 1;
	}
	return (
		(t = l(s)),
		(r = a[t] = o[t](s)),
		{
			c() {
				r.c(), (e = _());
			},
			l(i) {
				r.l(i), (e = _());
			},
			m(i, c) {
				a[t].m(i, c), d(i, e, c), (n = !0);
			},
			p(i, [c]) {
				let f = t;
				(t = l(i)),
					t === f
						? a[t].p(i, c)
						: ($(),
						  u(a[f], 1, 1, () => {
								a[f] = null;
						  }),
						  k(),
						  (r = a[t]),
						  r ? r.p(i, c) : ((r = a[t] = o[t](i)), r.c()),
						  p(r, 1),
						  r.m(e.parentNode, e));
			},
			i(i) {
				n || (p(r), (n = !0));
			},
			o(i) {
				u(r), (n = !1);
			},
			d(i) {
				a[t].d(i), i && b(e);
			}
		}
	);
}
function U(s, t, r) {
	let e, n, o, a;
	return (
		g(s, C, (l) => r(0, (o = l))),
		g(s, D, (l) => r(3, (a = l))),
		(s.$$.update = () => {
			s.$$.dirty & 8 && r(2, (e = `https://api.themoviedb.org/3/search/${a}?api_key=`)),
				s.$$.dirty & 1 &&
					r(1, (n = '&language=en-GB"&page=1&include_adult=false&query=' + o.params.id + '&page='));
		}),
		[o, n, e, a]
	);
}
class J extends M {
	constructor(t) {
		super();
		q(this, t, U, L, m, {});
	}
}
export { J as default };
