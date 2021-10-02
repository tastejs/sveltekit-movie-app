import {
	S as P,
	i as ee,
	s as T,
	e as v,
	t as A,
	k as $,
	l as K,
	c as b,
	a as k,
	g as H,
	d as _,
	n as D,
	b as h,
	f as S,
	D as f,
	O as te,
	h as z,
	K as oe,
	H as F,
	N as re,
	j as ce,
	m as fe,
	o as ue,
	x as J,
	u as Q,
	v as _e,
	w as de,
	L as he,
	r as me
} from '../../../chunks/vendor-8fe9a59e.js';
import { A as pe } from '../../../chunks/store-892411d9.js';
import { p as ve } from '../../../chunks/stores-d4b77a7d.js';
function se(r, t, a) {
	const e = r.slice();
	return (e[2] = t[a]), e;
}
function ae(r) {
	let t,
		a,
		e,
		s,
		n = r[0].episodes,
		i = [];
	for (let l = 0; l < n.length; l += 1) i[l] = ne(se(r, n, l));
	return {
		c() {
			(t = v('h4')), (a = A('Season Information')), (e = $());
			for (let l = 0; l < i.length; l += 1) i[l].c();
			(s = K()), this.h();
		},
		l(l) {
			t = b(l, 'H4', { class: !0 });
			var c = k(t);
			(a = H(c, 'Season Information')), c.forEach(_), (e = D(l));
			for (let o = 0; o < i.length; o += 1) i[o].l(l);
			(s = K()), this.h();
		},
		h() {
			h(t, 'class', 'pb-8');
		},
		m(l, c) {
			S(l, t, c), f(t, a), S(l, e, c);
			for (let o = 0; o < i.length; o += 1) i[o].m(l, c);
			S(l, s, c);
		},
		p(l, c) {
			if (c & 3) {
				n = l[0].episodes;
				let o;
				for (o = 0; o < n.length; o += 1) {
					const u = se(l, n, o);
					i[o] ? i[o].p(u, c) : ((i[o] = ne(u)), i[o].c(), i[o].m(s.parentNode, s));
				}
				for (; o < i.length; o += 1) i[o].d(1);
				i.length = n.length;
			}
		},
		d(l) {
			l && _(t), l && _(e), oe(i, l), l && _(s);
		}
	};
}
function ne(r) {
	let t,
		a,
		e,
		s,
		n,
		i,
		l,
		c,
		o = r[2].name + '',
		u,
		m,
		g,
		N,
		y,
		I,
		p = r[2].air_date + '',
		E,
		M,
		O,
		U,
		B,
		j,
		V = r[2].overview + '',
		q,
		C,
		L;
	return {
		c() {
			(t = v('div')),
				(a = v('a')),
				(e = v('div')),
				(s = v('img')),
				(i = $()),
				(l = v('div')),
				(c = v('h4')),
				(u = A(o)),
				(m = $()),
				(g = v('hr')),
				(N = $()),
				(y = v('h6')),
				(I = A('Air Date: ')),
				(E = A(p)),
				(M = $()),
				(O = v('h6')),
				(U = A('Overview:')),
				(B = $()),
				(j = v('h6')),
				(q = A(V)),
				(L = $()),
				this.h();
		},
		l(d) {
			t = b(d, 'DIV', { class: !0 });
			var x = k(t);
			a = b(x, 'A', { href: !0, class: !0 });
			var G = k(a);
			e = b(G, 'DIV', { class: !0 });
			var W = k(e);
			(s = b(W, 'IMG', { class: !0, src: !0, alt: !0 })),
				W.forEach(_),
				(i = D(G)),
				(l = b(G, 'DIV', { class: !0 }));
			var w = k(l);
			c = b(w, 'H4', {});
			var X = k(c);
			(u = H(X, o)),
				X.forEach(_),
				(m = D(w)),
				(g = b(w, 'HR', {})),
				(N = D(w)),
				(y = b(w, 'H6', {}));
			var R = k(y);
			(I = H(R, 'Air Date: ')), (E = H(R, p)), R.forEach(_), (M = D(w)), (O = b(w, 'H6', {}));
			var Y = k(O);
			(U = H(Y, 'Overview:')), Y.forEach(_), (B = D(w)), (j = b(w, 'H6', { class: !0 }));
			var Z = k(j);
			(q = H(Z, V)), Z.forEach(_), w.forEach(_), G.forEach(_), (L = D(x)), x.forEach(_), this.h();
		},
		h() {
			h(s, 'class', 'flex xl:w-80 xl:h-44 items-start'),
				te(s.src, (n = r[2].still_path ? le + r[2].still_path : '/default.jpg')) || h(s, 'src', n),
				h(s, 'alt', 'episode'),
				h(
					e,
					'class',
					'flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start'
				),
				h(j, 'class', 'flex-1 pr-8 text-skin-muted mb-4'),
				h(l, 'class', 'ml-2 block'),
				h(a, 'href', (C = `/episode/${r[1]}/${r[0].season_number}/${r[2].episode_number}`)),
				h(a, 'class', 'flex flex-col xl:flex-row text-skin-base xl:rounded-lg'),
				h(t, 'class', 'flex flex-col xl:flex-row pb-4');
		},
		m(d, x) {
			S(d, t, x),
				f(t, a),
				f(a, e),
				f(e, s),
				f(a, i),
				f(a, l),
				f(l, c),
				f(c, u),
				f(l, m),
				f(l, g),
				f(l, N),
				f(l, y),
				f(y, I),
				f(y, E),
				f(l, M),
				f(l, O),
				f(O, U),
				f(l, B),
				f(l, j),
				f(j, q),
				f(t, L);
		},
		p(d, x) {
			x & 1 &&
				!te(s.src, (n = d[2].still_path ? le + d[2].still_path : '/default.jpg')) &&
				h(s, 'src', n),
				x & 1 && o !== (o = d[2].name + '') && z(u, o),
				x & 1 && p !== (p = d[2].air_date + '') && z(E, p),
				x & 1 && V !== (V = d[2].overview + '') && z(q, V),
				x & 3 &&
					C !== (C = `/episode/${d[1]}/${d[0].season_number}/${d[2].episode_number}`) &&
					h(a, 'href', C);
		},
		d(d) {
			d && _(t);
		}
	};
}
function be(r) {
	let t,
		a,
		e = r[0].id && ae(r);
	return {
		c() {
			(t = v('section')), (a = v('div')), e && e.c(), this.h();
		},
		l(s) {
			t = b(s, 'SECTION', { id: !0 });
			var n = k(t);
			a = b(n, 'DIV', { class: !0 });
			var i = k(a);
			e && e.l(i), i.forEach(_), n.forEach(_), this.h();
		},
		h() {
			h(
				a,
				'class',
				'max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl'
			),
				h(t, 'id', 'season');
		},
		m(s, n) {
			S(s, t, n), f(t, a), e && e.m(a, null);
		},
		p(s, [n]) {
			s[0].id ? (e ? e.p(s, n) : ((e = ae(s)), e.c(), e.m(a, null))) : e && (e.d(1), (e = null));
		},
		i: F,
		o: F,
		d(s) {
			s && _(t), e && e.d();
		}
	};
}
const le = 'https://image.tmdb.org/t/p/w500/';
function xe(r, t, a) {
	let { season_details: e } = t,
		{ movie_id: s } = t;
	return (
		(r.$$set = (n) => {
			'season_details' in n && a(0, (e = n.season_details)),
				'movie_id' in n && a(1, (s = n.movie_id));
		}),
		[e, s]
	);
}
class ke extends P {
	constructor(t) {
		super();
		ee(this, t, xe, be, T, { season_details: 0, movie_id: 1 });
	}
}
function ie(r) {
	let t, a;
	return (
		(t = new ke({ props: { season_details: r[0], movie_id: r[2] } })),
		{
			c() {
				ce(t.$$.fragment);
			},
			l(e) {
				fe(t.$$.fragment, e);
			},
			m(e, s) {
				ue(t, e, s), (a = !0);
			},
			p(e, s) {
				const n = {};
				s & 1 && (n.season_details = e[0]), t.$set(n);
			},
			i(e) {
				a || (J(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				Q(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				_e(t, e);
			}
		}
	);
}
function we(r) {
	let t = r[1].params.season_number,
		a,
		e,
		s = ie(r);
	return {
		c() {
			s.c(), (a = K());
		},
		l(n) {
			s.l(n), (a = K());
		},
		m(n, i) {
			s.m(n, i), S(n, a, i), (e = !0);
		},
		p(n, [i]) {
			i & 2 && T(t, (t = n[1].params.season_number))
				? (me(), Q(s, 1, 1, F), de(), (s = ie(n)), s.c(), J(s), s.m(a.parentNode, a))
				: s.p(n, i);
		},
		i(n) {
			e || (J(s), (e = !0));
		},
		o(n) {
			Q(s), (e = !1);
		},
		d(n) {
			n && _(a), s.d(n);
		}
	};
}
var ge = function (r, t, a, e) {
	function s(n) {
		return n instanceof a
			? n
			: new a(function (i) {
					i(n);
			  });
	}
	return new (a || (a = Promise))(function (n, i) {
		function l(u) {
			try {
				o(e.next(u));
			} catch (m) {
				i(m);
			}
		}
		function c(u) {
			try {
				o(e.throw(u));
			} catch (m) {
				i(m);
			}
		}
		function o(u) {
			u.done ? n(u.value) : s(u.value).then(l, c);
		}
		o((e = e.apply(r, t || [])).next());
	});
};
function De({ page: r }) {
	return ge(this, void 0, void 0, function* () {
		let t = `https://api.themoviedb.org/3/tv/${r.params.id}/season/${
			r.params.season_number
		}?api_key=${re(pe)}&language=en-US`;
		return { props: { season_details: yield fetch(t).then((e) => e.json()) } };
	});
}
function ye(r, t, a) {
	let e;
	he(r, ve, (i) => a(1, (e = i))), this && this.__awaiter;
	let { season_details: s } = t,
		n = e.params.id;
	return (
		(r.$$set = (i) => {
			'season_details' in i && a(0, (s = i.season_details));
		}),
		[s, e, n]
	);
}
class je extends P {
	constructor(t) {
		super();
		ee(this, t, ye, we, T, { season_details: 0 });
	}
}
export { je as default, De as load };
