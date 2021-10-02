import {
	S as Q,
	i as R,
	s as U,
	l as z,
	f as V,
	r as Y,
	u as k,
	w as F,
	x as g,
	d as h,
	L as se,
	j as T,
	m as C,
	o as P,
	H as N,
	v as A,
	e as $,
	k as H,
	t as Z,
	c as b,
	a as w,
	n as L,
	g as ee,
	b as f,
	O as oe,
	D as _,
	h as ae,
	K as _e,
	M as me,
	W as Ve,
	A as $e,
	X as Ne,
	Y as Te
} from './vendor-8fe9a59e.js';
import { a as he, b as be, m as Ce, t as Pe, c as pe } from './store-892411d9.js';
import { S as ge, P as ke } from './Spinner-b4526be0.js';
import { p as Ae } from './stores-d4b77a7d.js';
function He(a) {
	let t, r;
	return (
		(t = new ge({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Le(a) {
	let t,
		r,
		e,
		l,
		o,
		s,
		i,
		n,
		c,
		u = a[0].title + '',
		m,
		p,
		d,
		x = (a[0].release_date ? a[0].release_date.substring(0, 4) : '-') + '',
		j,
		S,
		M,
		E,
		J,
		I,
		G,
		K,
		B,
		O,
		X = a[0].overview + '',
		te,
		re,
		D;
	return (
		(E = new ke({ props: { progress: a[0].vote_average } })),
		{
			c() {
				(t = $('section')),
					(r = $('div')),
					(e = $('div')),
					(l = $('img')),
					(i = H()),
					(n = $('div')),
					(c = $('h6')),
					(m = Z(u)),
					(p = H()),
					(d = $('h6')),
					(j = Z(x)),
					(S = H()),
					(M = $('div')),
					T(E.$$.fragment),
					(J = H()),
					(I = $('a')),
					(G = $('h6')),
					(K = Z('Overview')),
					(B = H()),
					(O = $('p')),
					(te = Z(X)),
					this.h();
			},
			l(v) {
				t = b(v, 'SECTION', { id: !0, class: !0 });
				var y = w(t);
				r = b(y, 'DIV', { class: !0 });
				var q = w(r);
				e = b(q, 'DIV', { class: !0 });
				var W = w(e);
				(l = b(W, 'IMG', { class: !0, src: !0, alt: !0 })),
					(i = L(W)),
					(n = b(W, 'DIV', { class: !0 }));
				var le = w(n);
				c = b(le, 'H6', { class: !0 });
				var ie = w(c);
				(m = ee(ie, u)), ie.forEach(h), (p = L(le)), (d = b(le, 'H6', { class: !0 }));
				var ce = w(d);
				(j = ee(ce, x)), ce.forEach(h), le.forEach(h), (S = L(W)), (M = b(W, 'DIV', { class: !0 }));
				var ue = w(M);
				C(E.$$.fragment, ue),
					ue.forEach(h),
					W.forEach(h),
					(J = L(q)),
					(I = b(q, 'A', { class: !0, href: !0 }));
				var ne = w(I);
				G = b(ne, 'H6', { class: !0 });
				var fe = w(G);
				(K = ee(fe, 'Overview')), fe.forEach(h), (B = L(ne)), (O = b(ne, 'P', { class: !0 }));
				var de = w(O);
				(te = ee(de, X)), de.forEach(h), ne.forEach(h), q.forEach(h), y.forEach(h), this.h();
			},
			h() {
				f(l, 'class', 'oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted '),
					oe(l.src, (o = a[0].poster_path ? we + a[0].poster_path : '/default.jpg')) ||
						f(l, 'src', o),
					f(l, 'alt', (s = a[0].title)),
					f(
						c,
						'class',
						'text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'
					),
					f(d, 'class', 'xl:text-lg font-bold'),
					f(n, 'class', 'p-2 xl:ml-4'),
					f(M, 'class', 'transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80'),
					f(e, 'class', 'backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg'),
					f(G, 'class', 'mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded'),
					f(O, 'class', 'md:text-base mt-1'),
					f(
						I,
						'class',
						'w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10'
					),
					f(I, 'href', (re = `/${a[1]}/${a[0].id}`)),
					f(r, 'class', 'relative preserve-3d w-full duration-700 group-hover:rotate-y-180'),
					f(t, 'id', 'movie-card'),
					f(t, 'class', 'group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg');
			},
			m(v, y) {
				V(v, t, y),
					_(t, r),
					_(r, e),
					_(e, l),
					_(e, i),
					_(e, n),
					_(n, c),
					_(c, m),
					_(n, p),
					_(n, d),
					_(d, j),
					_(e, S),
					_(e, M),
					P(E, M, null),
					_(r, J),
					_(r, I),
					_(I, G),
					_(G, K),
					_(I, B),
					_(I, O),
					_(O, te),
					(D = !0);
			},
			p(v, y) {
				(!D ||
					(y & 1 && !oe(l.src, (o = v[0].poster_path ? we + v[0].poster_path : '/default.jpg')))) &&
					f(l, 'src', o),
					(!D || (y & 1 && s !== (s = v[0].title))) && f(l, 'alt', s),
					(!D || y & 1) && u !== (u = v[0].title + '') && ae(m, u),
					(!D || y & 1) &&
						x !== (x = (v[0].release_date ? v[0].release_date.substring(0, 4) : '-') + '') &&
						ae(j, x);
				const q = {};
				y & 1 && (q.progress = v[0].vote_average),
					E.$set(q),
					(!D || y & 1) && X !== (X = v[0].overview + '') && ae(te, X),
					(!D || (y & 3 && re !== (re = `/${v[1]}/${v[0].id}`))) && f(I, 'href', re);
			},
			i(v) {
				D || (g(E.$$.fragment, v), (D = !0));
			},
			o(v) {
				k(E.$$.fragment, v), (D = !1);
			},
			d(v) {
				v && h(t), A(E);
			}
		}
	);
}
function Ge(a) {
	let t, r, e, l;
	const o = [Le, He],
		s = [];
	function i(n, c) {
		return n[0].id ? 0 : 1;
	}
	return (
		(t = i(a)),
		(r = s[t] = o[t](a)),
		{
			c() {
				r.c(), (e = z());
			},
			l(n) {
				r.l(n), (e = z());
			},
			m(n, c) {
				s[t].m(n, c), V(n, e, c), (l = !0);
			},
			p(n, [c]) {
				let u = t;
				(t = i(n)),
					t === u
						? s[t].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (r = s[t]),
						  r ? r.p(n, c) : ((r = s[t] = o[t](n)), r.c()),
						  g(r, 1),
						  r.m(e.parentNode, e));
			},
			i(n) {
				l || (g(r), (l = !0));
			},
			o(n) {
				k(r), (l = !1);
			},
			d(n) {
				s[t].d(n), n && h(e);
			}
		}
	);
}
const we = 'https://image.tmdb.org/t/p/w300';
function Be(a, t, r) {
	let e;
	se(a, he, (o) => r(1, (e = o)));
	let { datum: l } = t;
	return (
		(a.$$set = (o) => {
			'datum' in o && r(0, (l = o.datum));
		}),
		[l, e]
	);
}
class qe extends Q {
	constructor(t) {
		super();
		R(this, t, Be, Ge, U, { datum: 0 });
	}
}
function ze(a, t, r) {
	const e = a.slice();
	return (e[0] = t[r]), e;
}
function We(a) {
	let t, r, e, l, o, s, i, n, c;
	return {
		c() {
			(t = $('section')),
				(r = $('div')),
				(e = $('div')),
				(l = H()),
				(o = $('div')),
				(s = $('div')),
				(i = H()),
				(n = $('div')),
				(c = H()),
				this.h();
		},
		l(u) {
			t = b(u, 'SECTION', { id: !0, class: !0 });
			var m = w(t);
			r = b(m, 'DIV', { class: !0 });
			var p = w(r);
			(e = b(p, 'DIV', { class: !0 })),
				w(e).forEach(h),
				(l = L(p)),
				(o = b(p, 'DIV', { class: !0 }));
			var d = w(o);
			(s = b(d, 'DIV', { class: !0 })),
				w(s).forEach(h),
				(i = L(d)),
				(n = b(d, 'DIV', { class: !0 })),
				w(n).forEach(h),
				d.forEach(h),
				p.forEach(h),
				(c = L(m)),
				m.forEach(h),
				this.h();
		},
		h() {
			f(e, 'class', 'w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg bg-skin-muted'),
				f(s, 'class', 'w-28 xl:w-40 h-5 bg-skin-muted rounded'),
				f(n, 'class', 'mt-2 w-20 xl:w-26 h-5 bg-skin-muted rounded'),
				f(o, 'class', 'py-4 xl:ml-6 h-18 w-44 xl:w-60'),
				f(r, 'class', 'top-0 right-0 text-textDark bg-skin-bg xl:rounded-lg'),
				f(t, 'id', 'movie-card'),
				f(t, 'class', 'w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg');
		},
		m(u, m) {
			V(u, t, m), _(t, r), _(r, e), _(r, l), _(r, o), _(o, s), _(o, i), _(o, n), _(t, c);
		},
		d(u) {
			u && h(t);
		}
	};
}
function Je(a) {
	let t,
		r = Array(20),
		e = [];
	for (let l = 0; l < r.length; l += 1) e[l] = We(ze(a, r, l));
	return {
		c() {
			for (let l = 0; l < e.length; l += 1) e[l].c();
			t = z();
		},
		l(l) {
			for (let o = 0; o < e.length; o += 1) e[o].l(l);
			t = z();
		},
		m(l, o) {
			for (let s = 0; s < e.length; s += 1) e[s].m(l, o);
			V(l, t, o);
		},
		p: N,
		i: N,
		o: N,
		d(l) {
			_e(e, l), l && h(t);
		}
	};
}
class ve extends Q {
	constructor(t) {
		super();
		R(this, t, null, Je, U, {});
	}
}
function xe(a, t, r) {
	const e = a.slice();
	return (e[1] = t[r]), e;
}
function Ke(a) {
	let t, r;
	return (
		(t = new ve({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Xe(a) {
	let t,
		r,
		e = a[0],
		l = [];
	for (let s = 0; s < e.length; s += 1) l[s] = Ee(xe(a, e, s));
	const o = (s) =>
		k(l[s], 1, 1, () => {
			l[s] = null;
		});
	return {
		c() {
			for (let s = 0; s < l.length; s += 1) l[s].c();
			t = z();
		},
		l(s) {
			for (let i = 0; i < l.length; i += 1) l[i].l(s);
			t = z();
		},
		m(s, i) {
			for (let n = 0; n < l.length; n += 1) l[n].m(s, i);
			V(s, t, i), (r = !0);
		},
		p(s, i) {
			if (i & 1) {
				e = s[0];
				let n;
				for (n = 0; n < e.length; n += 1) {
					const c = xe(s, e, n);
					l[n]
						? (l[n].p(c, i), g(l[n], 1))
						: ((l[n] = Ee(c)), l[n].c(), g(l[n], 1), l[n].m(t.parentNode, t));
				}
				for (Y(), n = e.length; n < l.length; n += 1) o(n);
				F();
			}
		},
		i(s) {
			if (!r) {
				for (let i = 0; i < e.length; i += 1) g(l[i]);
				r = !0;
			}
		},
		o(s) {
			l = l.filter(Boolean);
			for (let i = 0; i < l.length; i += 1) k(l[i]);
			r = !1;
		},
		d(s) {
			_e(l, s), s && h(t);
		}
	};
}
function Ee(a) {
	let t, r;
	return (
		(t = new qe({ props: { datum: a[1] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.datum = e[1]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Ye(a) {
	let t, r, e, l;
	const o = [Xe, Ke],
		s = [];
	function i(n, c) {
		return n[0].length > 0 ? 0 : 1;
	}
	return (
		(r = i(a)),
		(e = s[r] = o[r](a)),
		{
			c() {
				(t = $('section')), e.c(), this.h();
			},
			l(n) {
				t = b(n, 'SECTION', { id: !0, class: !0 });
				var c = w(t);
				e.l(c), c.forEach(h), this.h();
			},
			h() {
				f(t, 'id', 'movie-list'),
					f(
						t,
						'class',
						'bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl'
					);
			},
			m(n, c) {
				V(n, t, c), s[r].m(t, null), (l = !0);
			},
			p(n, [c]) {
				let u = r;
				(r = i(n)),
					r === u
						? s[r].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (e = s[r]),
						  e ? e.p(n, c) : ((e = s[r] = o[r](n)), e.c()),
						  g(e, 1),
						  e.m(t, null));
			},
			i(n) {
				l || (g(e), (l = !0));
			},
			o(n) {
				k(e), (l = !1);
			},
			d(n) {
				n && h(t), s[r].d();
			}
		}
	);
}
function Fe(a, t, r) {
	let { data: e = [] } = t;
	return (
		(a.$$set = (l) => {
			'data' in l && r(0, (e = l.data));
		}),
		[e]
	);
}
class Qe extends Q {
	constructor(t) {
		super();
		R(this, t, Fe, Ye, U, { data: 0 });
	}
}
function Re(a) {
	let t, r;
	return (
		(t = new ge({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Ue(a) {
	let t,
		r,
		e,
		l,
		o,
		s,
		i,
		n,
		c,
		u = a[0].name + '',
		m,
		p,
		d,
		x = (a[0].first_air_date ? a[0].first_air_date.substring(0, 4) : '-') + '',
		j,
		S,
		M,
		E,
		J,
		I,
		G,
		K,
		B,
		O,
		X = a[0].overview + '',
		te,
		re,
		D;
	return (
		(E = new ke({ props: { progress: a[0].vote_average } })),
		{
			c() {
				(t = $('section')),
					(r = $('div')),
					(e = $('div')),
					(l = $('img')),
					(i = H()),
					(n = $('div')),
					(c = $('h6')),
					(m = Z(u)),
					(p = H()),
					(d = $('h6')),
					(j = Z(x)),
					(S = H()),
					(M = $('div')),
					T(E.$$.fragment),
					(J = H()),
					(I = $('a')),
					(G = $('h6')),
					(K = Z('Overview')),
					(B = H()),
					(O = $('p')),
					(te = Z(X)),
					this.h();
			},
			l(v) {
				t = b(v, 'SECTION', { id: !0, class: !0 });
				var y = w(t);
				r = b(y, 'DIV', { class: !0 });
				var q = w(r);
				e = b(q, 'DIV', { class: !0 });
				var W = w(e);
				(l = b(W, 'IMG', { class: !0, src: !0, alt: !0 })),
					(i = L(W)),
					(n = b(W, 'DIV', { class: !0 }));
				var le = w(n);
				c = b(le, 'H6', { class: !0 });
				var ie = w(c);
				(m = ee(ie, u)), ie.forEach(h), (p = L(le)), (d = b(le, 'H6', { class: !0 }));
				var ce = w(d);
				(j = ee(ce, x)), ce.forEach(h), le.forEach(h), (S = L(W)), (M = b(W, 'DIV', { class: !0 }));
				var ue = w(M);
				C(E.$$.fragment, ue),
					ue.forEach(h),
					W.forEach(h),
					(J = L(q)),
					(I = b(q, 'A', { class: !0, href: !0 }));
				var ne = w(I);
				G = b(ne, 'H6', { class: !0 });
				var fe = w(G);
				(K = ee(fe, 'Overview')), fe.forEach(h), (B = L(ne)), (O = b(ne, 'P', { class: !0 }));
				var de = w(O);
				(te = ee(de, X)), de.forEach(h), ne.forEach(h), q.forEach(h), y.forEach(h), this.h();
			},
			h() {
				f(l, 'class', 'oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted '),
					oe(l.src, (o = a[0].poster_path ? ye + a[0].poster_path : '/default.jpg')) ||
						f(l, 'src', o),
					f(l, 'alt', (s = a[0].name)),
					f(
						c,
						'class',
						'text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'
					),
					f(d, 'class', 'xl:text-lg font-bold'),
					f(n, 'class', 'p-2 xl:ml-4'),
					f(M, 'class', 'transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80'),
					f(e, 'class', 'backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg'),
					f(G, 'class', 'mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded'),
					f(O, 'class', 'md:text-base mt-1'),
					f(
						I,
						'class',
						'w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10'
					),
					f(I, 'href', (re = `/${a[1]}/${a[0].id}`)),
					f(r, 'class', 'relative preserve-3d w-full duration-700 group-hover:rotate-y-180'),
					f(t, 'id', 'tv-card'),
					f(t, 'class', 'group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg');
			},
			m(v, y) {
				V(v, t, y),
					_(t, r),
					_(r, e),
					_(e, l),
					_(e, i),
					_(e, n),
					_(n, c),
					_(c, m),
					_(n, p),
					_(n, d),
					_(d, j),
					_(e, S),
					_(e, M),
					P(E, M, null),
					_(r, J),
					_(r, I),
					_(I, G),
					_(G, K),
					_(I, B),
					_(I, O),
					_(O, te),
					(D = !0);
			},
			p(v, y) {
				(!D ||
					(y & 1 && !oe(l.src, (o = v[0].poster_path ? ye + v[0].poster_path : '/default.jpg')))) &&
					f(l, 'src', o),
					(!D || (y & 1 && s !== (s = v[0].name))) && f(l, 'alt', s),
					(!D || y & 1) && u !== (u = v[0].name + '') && ae(m, u),
					(!D || y & 1) &&
						x !== (x = (v[0].first_air_date ? v[0].first_air_date.substring(0, 4) : '-') + '') &&
						ae(j, x);
				const q = {};
				y & 1 && (q.progress = v[0].vote_average),
					E.$set(q),
					(!D || y & 1) && X !== (X = v[0].overview + '') && ae(te, X),
					(!D || (y & 3 && re !== (re = `/${v[1]}/${v[0].id}`))) && f(I, 'href', re);
			},
			i(v) {
				D || (g(E.$$.fragment, v), (D = !0));
			},
			o(v) {
				k(E.$$.fragment, v), (D = !1);
			},
			d(v) {
				v && h(t), A(E);
			}
		}
	);
}
function Ze(a) {
	let t, r, e, l;
	const o = [Ue, Re],
		s = [];
	function i(n, c) {
		return n[0].id ? 0 : 1;
	}
	return (
		(t = i(a)),
		(r = s[t] = o[t](a)),
		{
			c() {
				r.c(), (e = z());
			},
			l(n) {
				r.l(n), (e = z());
			},
			m(n, c) {
				s[t].m(n, c), V(n, e, c), (l = !0);
			},
			p(n, [c]) {
				let u = t;
				(t = i(n)),
					t === u
						? s[t].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (r = s[t]),
						  r ? r.p(n, c) : ((r = s[t] = o[t](n)), r.c()),
						  g(r, 1),
						  r.m(e.parentNode, e));
			},
			i(n) {
				l || (g(r), (l = !0));
			},
			o(n) {
				k(r), (l = !1);
			},
			d(n) {
				s[t].d(n), n && h(e);
			}
		}
	);
}
const ye = 'https://image.tmdb.org/t/p/w300';
function et(a, t, r) {
	let e, l;
	se(a, be, (s) => r(2, (e = s))), se(a, he, (s) => r(1, (l = s)));
	let { datum: o } = t;
	return (
		me(be, (e = o.name), e),
		(a.$$set = (s) => {
			'datum' in s && r(0, (o = s.datum));
		}),
		[o, l]
	);
}
class tt extends Q {
	constructor(t) {
		super();
		R(this, t, et, Ze, U, { datum: 0 });
	}
}
function Ie(a, t, r) {
	const e = a.slice();
	return (e[1] = t[r]), e;
}
function rt(a) {
	let t, r;
	return (
		(t = new ve({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function lt(a) {
	let t,
		r,
		e = a[0],
		l = [];
	for (let s = 0; s < e.length; s += 1) l[s] = De(Ie(a, e, s));
	const o = (s) =>
		k(l[s], 1, 1, () => {
			l[s] = null;
		});
	return {
		c() {
			for (let s = 0; s < l.length; s += 1) l[s].c();
			t = z();
		},
		l(s) {
			for (let i = 0; i < l.length; i += 1) l[i].l(s);
			t = z();
		},
		m(s, i) {
			for (let n = 0; n < l.length; n += 1) l[n].m(s, i);
			V(s, t, i), (r = !0);
		},
		p(s, i) {
			if (i & 1) {
				e = s[0];
				let n;
				for (n = 0; n < e.length; n += 1) {
					const c = Ie(s, e, n);
					l[n]
						? (l[n].p(c, i), g(l[n], 1))
						: ((l[n] = De(c)), l[n].c(), g(l[n], 1), l[n].m(t.parentNode, t));
				}
				for (Y(), n = e.length; n < l.length; n += 1) o(n);
				F();
			}
		},
		i(s) {
			if (!r) {
				for (let i = 0; i < e.length; i += 1) g(l[i]);
				r = !0;
			}
		},
		o(s) {
			l = l.filter(Boolean);
			for (let i = 0; i < l.length; i += 1) k(l[i]);
			r = !1;
		},
		d(s) {
			_e(l, s), s && h(t);
		}
	};
}
function De(a) {
	let t, r;
	return (
		(t = new tt({ props: { datum: a[1] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.datum = e[1]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function nt(a) {
	let t, r, e, l;
	const o = [lt, rt],
		s = [];
	function i(n, c) {
		return n[0].length > 0 ? 0 : 1;
	}
	return (
		(r = i(a)),
		(e = s[r] = o[r](a)),
		{
			c() {
				(t = $('section')), e.c(), this.h();
			},
			l(n) {
				t = b(n, 'SECTION', { id: !0, class: !0 });
				var c = w(t);
				e.l(c), c.forEach(h), this.h();
			},
			h() {
				f(t, 'id', 'movie-list'),
					f(
						t,
						'class',
						'bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl'
					);
			},
			m(n, c) {
				V(n, t, c), s[r].m(t, null), (l = !0);
			},
			p(n, [c]) {
				let u = r;
				(r = i(n)),
					r === u
						? s[r].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (e = s[r]),
						  e ? e.p(n, c) : ((e = s[r] = o[r](n)), e.c()),
						  g(e, 1),
						  e.m(t, null));
			},
			i(n) {
				l || (g(e), (l = !0));
			},
			o(n) {
				k(e), (l = !1);
			},
			d(n) {
				n && h(t), s[r].d();
			}
		}
	);
}
function st(a, t, r) {
	let { data: e = [] } = t;
	return (
		(a.$$set = (l) => {
			'data' in l && r(0, (e = l.data));
		}),
		[e]
	);
}
class at extends Q {
	constructor(t) {
		super();
		R(this, t, st, nt, U, { data: 0 });
	}
}
function ot(a) {
	let t, r;
	return (
		(t = new ge({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function it(a) {
	let t,
		r,
		e,
		l,
		o,
		s,
		i,
		n,
		c,
		u = a[0].name + '',
		m,
		p;
	return {
		c() {
			(t = $('section')),
				(r = $('section')),
				(e = $('a')),
				(l = $('img')),
				(i = H()),
				(n = $('div')),
				(c = $('h6')),
				(m = Z(u)),
				this.h();
		},
		l(d) {
			t = b(d, 'SECTION', { id: !0, class: !0 });
			var x = w(t);
			r = b(x, 'SECTION', { id: !0, class: !0 });
			var j = w(r);
			e = b(j, 'A', { href: !0, class: !0 });
			var S = w(e);
			(l = b(S, 'IMG', { class: !0, src: !0, alt: !0 })),
				(i = L(S)),
				(n = b(S, 'DIV', { class: !0 }));
			var M = w(n);
			c = b(M, 'H6', { class: !0 });
			var E = w(c);
			(m = ee(E, u)),
				E.forEach(h),
				M.forEach(h),
				S.forEach(h),
				j.forEach(h),
				x.forEach(h),
				this.h();
		},
		h() {
			f(l, 'class', 'oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base'),
				oe(l.src, (o = a[0].profile_path === null ? '/person.svg' : Se + a[0].profile_path)) ||
					f(l, 'src', o),
				f(l, 'alt', (s = a[0].name)),
				f(
					c,
					'class',
					'text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'
				),
				f(n, 'class', 'p-2 h-18 w-44 xl:w-60 bg-skin-bg'),
				f(e, 'href', (p = `/person/${a[0].id}`)),
				f(e, 'class', 'top-0 right-0 text-skin-base xl:rounded-lg'),
				f(r, 'id', 'person-card'),
				f(r, 'class', 'w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-primary xl:rounded-lg'),
				f(t, 'id', 'main'),
				f(t, 'class', 'h-full');
		},
		m(d, x) {
			V(d, t, x), _(t, r), _(r, e), _(e, l), _(e, i), _(e, n), _(n, c), _(c, m);
		},
		p(d, x) {
			x & 1 &&
				!oe(l.src, (o = d[0].profile_path === null ? '/person.svg' : Se + d[0].profile_path)) &&
				f(l, 'src', o),
				x & 1 && s !== (s = d[0].name) && f(l, 'alt', s),
				x & 1 && u !== (u = d[0].name + '') && ae(m, u),
				x & 1 && p !== (p = `/person/${d[0].id}`) && f(e, 'href', p);
		},
		i: N,
		o: N,
		d(d) {
			d && h(t);
		}
	};
}
function ct(a) {
	let t, r, e, l;
	const o = [it, ot],
		s = [];
	function i(n, c) {
		return n[0].id ? 0 : 1;
	}
	return (
		(t = i(a)),
		(r = s[t] = o[t](a)),
		{
			c() {
				r.c(), (e = z());
			},
			l(n) {
				r.l(n), (e = z());
			},
			m(n, c) {
				s[t].m(n, c), V(n, e, c), (l = !0);
			},
			p(n, [c]) {
				let u = t;
				(t = i(n)),
					t === u
						? s[t].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (r = s[t]),
						  r ? r.p(n, c) : ((r = s[t] = o[t](n)), r.c()),
						  g(r, 1),
						  r.m(e.parentNode, e));
			},
			i(n) {
				l || (g(r), (l = !0));
			},
			o(n) {
				k(r), (l = !1);
			},
			d(n) {
				s[t].d(n), n && h(e);
			}
		}
	);
}
const Se = 'https://image.tmdb.org/t/p/w500';
function ut(a, t, r) {
	let { datum: e } = t;
	return (
		(a.$$set = (l) => {
			'datum' in l && r(0, (e = l.datum));
		}),
		[e]
	);
}
class ft extends Q {
	constructor(t) {
		super();
		R(this, t, ut, ct, U, { datum: 0 });
	}
}
function je(a, t, r) {
	const e = a.slice();
	return (e[1] = t[r]), e;
}
function dt(a) {
	let t, r;
	return (
		(t = new ve({})),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function _t(a) {
	let t,
		r,
		e = a[0],
		l = [];
	for (let s = 0; s < e.length; s += 1) l[s] = Me(je(a, e, s));
	const o = (s) =>
		k(l[s], 1, 1, () => {
			l[s] = null;
		});
	return {
		c() {
			for (let s = 0; s < l.length; s += 1) l[s].c();
			t = z();
		},
		l(s) {
			for (let i = 0; i < l.length; i += 1) l[i].l(s);
			t = z();
		},
		m(s, i) {
			for (let n = 0; n < l.length; n += 1) l[n].m(s, i);
			V(s, t, i), (r = !0);
		},
		p(s, i) {
			if (i & 1) {
				e = s[0];
				let n;
				for (n = 0; n < e.length; n += 1) {
					const c = je(s, e, n);
					l[n]
						? (l[n].p(c, i), g(l[n], 1))
						: ((l[n] = Me(c)), l[n].c(), g(l[n], 1), l[n].m(t.parentNode, t));
				}
				for (Y(), n = e.length; n < l.length; n += 1) o(n);
				F();
			}
		},
		i(s) {
			if (!r) {
				for (let i = 0; i < e.length; i += 1) g(l[i]);
				r = !0;
			}
		},
		o(s) {
			l = l.filter(Boolean);
			for (let i = 0; i < l.length; i += 1) k(l[i]);
			r = !1;
		},
		d(s) {
			_e(l, s), s && h(t);
		}
	};
}
function Me(a) {
	let t, r;
	return (
		(t = new ft({ props: { datum: a[1] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.datum = e[1]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function ht(a) {
	let t, r, e, l;
	const o = [_t, dt],
		s = [];
	function i(n, c) {
		return n[0].length > 0 ? 0 : 1;
	}
	return (
		(r = i(a)),
		(e = s[r] = o[r](a)),
		{
			c() {
				(t = $('section')), e.c(), this.h();
			},
			l(n) {
				t = b(n, 'SECTION', { id: !0, class: !0 });
				var c = w(t);
				e.l(c), c.forEach(h), this.h();
			},
			h() {
				f(t, 'id', 'movie-list'),
					f(
						t,
						'class',
						'bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl'
					);
			},
			m(n, c) {
				V(n, t, c), s[r].m(t, null), (l = !0);
			},
			p(n, [c]) {
				let u = r;
				(r = i(n)),
					r === u
						? s[r].p(n, c)
						: (Y(),
						  k(s[u], 1, 1, () => {
								s[u] = null;
						  }),
						  F(),
						  (e = s[r]),
						  e ? e.p(n, c) : ((e = s[r] = o[r](n)), e.c()),
						  g(e, 1),
						  e.m(t, null));
			},
			i(n) {
				l || (g(e), (l = !0));
			},
			o(n) {
				k(e), (l = !1);
			},
			d(n) {
				n && h(t), s[r].d();
			}
		}
	);
}
function mt(a, t, r) {
	let { data: e = [] } = t;
	return (
		(a.$$set = (l) => {
			'data' in l && r(0, (e = l.data));
		}),
		[e]
	);
}
class pt extends Q {
	constructor(t) {
		super();
		R(this, t, mt, ht, U, { data: 0 });
	}
}
function gt(a) {
	let t, r, e;
	return {
		c() {
			(t = $('div')), (r = $('h4')), (e = Z(a[0])), this.h();
		},
		l(l) {
			t = b(l, 'DIV', { class: !0 });
			var o = w(t);
			r = b(o, 'H4', { class: !0 });
			var s = w(r);
			(e = ee(s, a[0])), s.forEach(h), o.forEach(h), this.h();
		},
		h() {
			f(r, 'class', 'py-2 ml-4'),
				f(t, 'class', 'bg-skin-primary text-skin-base max-w-7xl xl:rounded-2xl xl:mt-2');
		},
		m(l, o) {
			V(l, t, o), _(t, r), _(r, e);
		},
		p(l, [o]) {
			o & 1 && ae(e, l[0]);
		},
		i: N,
		o: N,
		d(l) {
			l && h(t);
		}
	};
}
function vt(a, t, r) {
	let e, l, o, s;
	se(a, Ae, (u) => r(3, (e = u))),
		se(a, Ce, (u) => r(4, (l = u))),
		se(a, Pe, (u) => r(5, (o = u))),
		se(a, he, (u) => r(6, (s = u)));
	let i, n, c;
	return (
		s === 'tv' ? (n = 'TV') : s === 'person' ? (n = 'People') : (n = 'Movies'),
		e.path.startsWith('/search/')
			? (i = n + ' > Search > ' + e.path.substring(8))
			: e.path !== '/'
			? (s === 'tv'
					? (c = o.find((u) => u.id == e.params.id).name)
					: (c = l.find((u) => u.id == e.params.id).name),
			  (i = n + ' > ' + c))
			: (i = 'Popular ' + n),
		[i]
	);
}
class $t extends Q {
	constructor(t) {
		super();
		R(this, t, vt, gt, U, {});
	}
}
function bt(a) {
	let t;
	return {
		c() {
			(t = $('div')), this.h();
		},
		l(r) {
			(t = b(r, 'DIV', { id: !0, class: !0 })), w(t).forEach(h), this.h();
		},
		h() {
			f(t, 'id', 'svelte-infinite-scroll'), f(t, 'class', 'w-0');
		},
		m(r, e) {
			V(r, t, e), a[2](t);
		},
		p: N,
		i: N,
		o: N,
		d(r) {
			r && h(t), a[2](null);
		}
	};
}
function kt(a, t, r) {
	const e = Ve();
	let l = !1,
		o,
		s;
	$e(() => {
		r(1, (s = document));
	});
	const i = (u) => {
			n(u) <= 450 ? (l || e('loadMore'), (l = !0)) : (l = !1);
		},
		n = (u) => {
			const p = u.target.documentElement;
			return p.scrollHeight - p.clientHeight - p.scrollTop;
		};
	Ne(() => {
		s && s.removeEventListener('scroll', i);
	});
	function c(u) {
		Te[u ? 'unshift' : 'push'](() => {
			(o = u), r(0, o);
		});
	}
	return (
		(a.$$.update = () => {
			a.$$.dirty & 2 && s && s.addEventListener('scroll', i);
		}),
		[o, s, c]
	);
}
class wt extends Q {
	constructor(t) {
		super();
		R(this, t, kt, bt, U, {});
	}
}
function xt(a) {
	let t, r;
	return (
		(t = new at({ props: { data: a[0] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.data = e[0]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Et(a) {
	let t, r;
	return (
		(t = new Qe({ props: { data: a[0] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.data = e[0]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function yt(a) {
	let t, r;
	return (
		(t = new pt({ props: { data: a[0] } })),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p(e, l) {
				const o = {};
				l & 1 && (o.data = e[0]), t.$set(o);
			},
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function Oe(a) {
	let t, r;
	return (
		(t = new wt({})),
		t.$on('loadMore', a[7]),
		{
			c() {
				T(t.$$.fragment);
			},
			l(e) {
				C(t.$$.fragment, e);
			},
			m(e, l) {
				P(t, e, l), (r = !0);
			},
			p: N,
			i(e) {
				r || (g(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				A(t, e);
			}
		}
	);
}
function It(a) {
	let t, r, e, l, o, s, i;
	r = new $t({});
	const n = [yt, Et, xt],
		c = [];
	function u(p, d) {
		return p[3] === 'person' ? 0 : p[3] === 'movie' ? 1 : p[3] === 'tv' ? 2 : -1;
	}
	~(l = u(a)) && (o = c[l] = n[l](a));
	let m = a[2] < a[1] && Oe(a);
	return {
		c() {
			(t = $('section')), T(r.$$.fragment), (e = H()), o && o.c(), (s = H()), m && m.c(), this.h();
		},
		l(p) {
			t = b(p, 'SECTION', { id: !0, class: !0 });
			var d = w(t);
			C(r.$$.fragment, d), (e = L(d)), o && o.l(d), (s = L(d)), m && m.l(d), d.forEach(h), this.h();
		},
		h() {
			f(t, 'id', 'main'), f(t, 'class', 'h-full');
		},
		m(p, d) {
			V(p, t, d),
				P(r, t, null),
				_(t, e),
				~l && c[l].m(t, null),
				_(t, s),
				m && m.m(t, null),
				(i = !0);
		},
		p(p, [d]) {
			let x = l;
			(l = u(p)),
				l === x
					? ~l && c[l].p(p, d)
					: (o &&
							(Y(),
							k(c[x], 1, 1, () => {
								c[x] = null;
							}),
							F()),
					  ~l
							? ((o = c[l]), o ? o.p(p, d) : ((o = c[l] = n[l](p)), o.c()), g(o, 1), o.m(t, s))
							: (o = null)),
				p[2] < p[1]
					? m
						? (m.p(p, d), d & 6 && g(m, 1))
						: ((m = Oe(p)), m.c(), g(m, 1), m.m(t, null))
					: m &&
					  (Y(),
					  k(m, 1, 1, () => {
							m = null;
					  }),
					  F());
		},
		i(p) {
			i || (g(r.$$.fragment, p), g(o), g(m), (i = !0));
		},
		o(p) {
			k(r.$$.fragment, p), k(o), k(m), (i = !1);
		},
		d(p) {
			p && h(t), A(r), ~l && c[l].d(), m && m.d();
		}
	};
}
function Dt(a, t, r) {
	let e, l;
	se(a, pe, (d) => r(2, (e = d))), se(a, he, (d) => r(3, (l = d)));
	var o =
		(this && this.__awaiter) ||
		function (d, x, j, S) {
			function M(E) {
				return E instanceof j
					? E
					: new j(function (J) {
							J(E);
					  });
			}
			return new (j || (j = Promise))(function (E, J) {
				function I(B) {
					try {
						K(S.next(B));
					} catch (O) {
						J(O);
					}
				}
				function G(B) {
					try {
						K(S.throw(B));
					} catch (O) {
						J(O);
					}
				}
				function K(B) {
					B.done ? E(B.value) : M(B.value).then(I, G);
				}
				K((S = S.apply(d, x || [])).next());
			});
		};
	let { api_url_start: s } = t,
		{ api_url_end: i } = t;
	me(pe, (e = 1), e);
	let n = [],
		c = 0;
	$e(() =>
		o(void 0, void 0, void 0, function* () {
			const d = yield fetch('/.netlify/functions/api-call', {
				method: 'POST',
				body: JSON.stringify({ url1: s, url2: i + e })
			}).then((x) => x.json());
			r(0, (n = d.res.results)), r(1, (c = d.res.total_pages));
		})
	);
	function u(d) {
		return o(this, void 0, void 0, function* () {
			const S = yield (yield (yield fetch(d)).json()).results;
			r(0, (n = [...n, ...S]));
		});
	}
	function m() {
		me(pe, e++, e), u(api_url + e);
	}
	const p = () => m();
	return (
		(a.$$set = (d) => {
			'api_url_start' in d && r(5, (s = d.api_url_start)),
				'api_url_end' in d && r(6, (i = d.api_url_end));
		}),
		[n, c, e, l, m, s, i, p]
	);
}
class Vt extends Q {
	constructor(t) {
		super();
		R(this, t, Dt, It, U, { api_url_start: 5, api_url_end: 6 });
	}
}
export { Vt as M, ve as S };
