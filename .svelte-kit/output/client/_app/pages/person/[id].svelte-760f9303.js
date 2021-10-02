import {
	S as Ke,
	i as Fe,
	s as xe,
	e as d,
	k as y,
	c as p,
	a as m,
	n as E,
	d as f,
	b as u,
	f as D,
	D as c,
	t as j,
	g as $,
	O as z,
	h as S,
	K as Ge,
	l as ne,
	H as ae,
	L as Ne,
	A as xt,
	j as tt,
	m as lt,
	o as st,
	x as ke,
	u as ge,
	v as rt,
	N as kt,
	w as gt,
	M as wt,
	r as yt
} from '../../chunks/vendor-8fe9a59e.js';
import { A as nt, a as at } from '../../chunks/store-892411d9.js';
import { p as Et } from '../../chunks/stores-d4b77a7d.js';
function it(o, e, l) {
	const t = o.slice();
	return (t[7] = e[l]), t;
}
function ot(o, e, l) {
	const t = o.slice();
	return (t[10] = e[l]), t;
}
function ct(o) {
	let e,
		l,
		t = o[1] && ft(o),
		s = o[2] && ht(o);
	return {
		c() {
			(e = d('section')), t && t.c(), (l = y()), s && s.c(), this.h();
		},
		l(a) {
			e = p(a, 'SECTION', { id: !0, class: !0 });
			var i = m(e);
			t && t.l(i), (l = E(i)), s && s.l(i), i.forEach(f), this.h();
		},
		h() {
			u(e, 'id', 'known-for'), u(e, 'class', 'grid mx-auto');
		},
		m(a, i) {
			D(a, e, i), t && t.m(e, null), c(e, l), s && s.m(e, null);
		},
		p(a, i) {
			a[1] ? (t ? t.p(a, i) : ((t = ft(a)), t.c(), t.m(e, l))) : t && (t.d(1), (t = null)),
				a[2] ? (s ? s.p(a, i) : ((s = ht(a)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(a) {
			a && f(e), t && t.d(), s && s.d();
		}
	};
}
function ft(o) {
	let e,
		l,
		t,
		s,
		a = o[1],
		i = [];
	for (let n = 0; n < a.length; n += 1) i[n] = ut(ot(o, a, n));
	return {
		c() {
			(e = d('h3')), (l = j('Movies')), (t = y()), (s = d('div'));
			for (let n = 0; n < i.length; n += 1) i[n].c();
			this.h();
		},
		l(n) {
			e = p(n, 'H3', { class: !0 });
			var h = m(e);
			(l = $(h, 'Movies')), h.forEach(f), (t = E(n)), (s = p(n, 'DIV', { class: !0 }));
			var r = m(s);
			for (let _ = 0; _ < i.length; _ += 1) i[_].l(r);
			r.forEach(f), this.h();
		},
		h() {
			u(
				e,
				'class',
				'flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'
			),
				u(
					s,
					'class',
					'text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'
				);
		},
		m(n, h) {
			D(n, e, h), c(e, l), D(n, t, h), D(n, s, h);
			for (let r = 0; r < i.length; r += 1) i[r].m(s, null);
		},
		p(n, h) {
			if (h & 2) {
				a = n[1];
				let r;
				for (r = 0; r < a.length; r += 1) {
					const _ = ot(n, a, r);
					i[r] ? i[r].p(_, h) : ((i[r] = ut(_)), i[r].c(), i[r].m(s, null));
				}
				for (; r < i.length; r += 1) i[r].d(1);
				i.length = a.length;
			}
		},
		d(n) {
			n && f(e), n && f(t), n && f(s), Ge(i, n);
		}
	};
}
function ut(o) {
	let e,
		l,
		t,
		s,
		a,
		i,
		n,
		h,
		r = o[10].title + '',
		_,
		k,
		g,
		I = (o[10].release_date ? o[10].release_date.substring(0, 4) : '') + '',
		M,
		P,
		w;
	return {
		c() {
			(e = d('div')),
				(l = d('a')),
				(t = d('img')),
				(i = y()),
				(n = d('div')),
				(h = d('p')),
				(_ = j(r)),
				(k = y()),
				(g = d('p')),
				(M = j(I)),
				(w = y()),
				this.h();
		},
		l(v) {
			e = p(v, 'DIV', { class: !0 });
			var x = m(e);
			l = p(x, 'A', { class: !0, href: !0 });
			var K = m(l);
			(t = p(K, 'IMG', { class: !0, src: !0, alt: !0 })),
				(i = E(K)),
				(n = p(K, 'DIV', { class: !0 }));
			var A = m(n);
			h = p(A, 'P', { class: !0 });
			var G = m(h);
			(_ = $(G, r)), G.forEach(f), (k = E(A)), (g = p(A, 'P', { class: !0 }));
			var T = m(g);
			(M = $(T, I)), T.forEach(f), A.forEach(f), K.forEach(f), (w = E(x)), x.forEach(f), this.h();
		},
		h() {
			u(t, 'class', 'object-cover w-28 h-44 rounded-t'),
				z(t.src, (s = o[10].poster_path ? we + o[10].poster_path : '/default.jpg')) ||
					u(t, 'src', s),
				u(t, 'alt', (a = o[10].title)),
				u(h, 'class', 'text-xs text-center flex justify-center items-center line-clamp-2'),
				u(g, 'class', 'text-xs text-center flex justify-center items-center'),
				u(n, 'class', 'w-28 h-12 p-0.5'),
				u(l, 'class', 'rounded w-28'),
				u(l, 'href', (P = `/movie/${o[10].id}`)),
				u(
					e,
					'class',
					'w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'
				);
		},
		m(v, x) {
			D(v, e, x),
				c(e, l),
				c(l, t),
				c(l, i),
				c(l, n),
				c(n, h),
				c(h, _),
				c(n, k),
				c(n, g),
				c(g, M),
				c(e, w);
		},
		p(v, x) {
			x & 2 &&
				!z(t.src, (s = v[10].poster_path ? we + v[10].poster_path : '/default.jpg')) &&
				u(t, 'src', s),
				x & 2 && a !== (a = v[10].title) && u(t, 'alt', a),
				x & 2 && r !== (r = v[10].title + '') && S(_, r),
				x & 2 &&
					I !== (I = (v[10].release_date ? v[10].release_date.substring(0, 4) : '') + '') &&
					S(M, I),
				x & 2 && P !== (P = `/movie/${v[10].id}`) && u(l, 'href', P);
		},
		d(v) {
			v && f(e);
		}
	};
}
function ht(o) {
	let e,
		l,
		t,
		s,
		a = o[2],
		i = [];
	for (let n = 0; n < a.length; n += 1) i[n] = _t(it(o, a, n));
	return {
		c() {
			(e = d('h3')), (l = j('TV')), (t = y()), (s = d('div'));
			for (let n = 0; n < i.length; n += 1) i[n].c();
			this.h();
		},
		l(n) {
			e = p(n, 'H3', { class: !0 });
			var h = m(e);
			(l = $(h, 'TV')), h.forEach(f), (t = E(n)), (s = p(n, 'DIV', { class: !0 }));
			var r = m(s);
			for (let _ = 0; _ < i.length; _ += 1) i[_].l(r);
			r.forEach(f), this.h();
		},
		h() {
			u(
				e,
				'class',
				'flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'
			),
				u(
					s,
					'class',
					'flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'
				);
		},
		m(n, h) {
			D(n, e, h), c(e, l), D(n, t, h), D(n, s, h);
			for (let r = 0; r < i.length; r += 1) i[r].m(s, null);
		},
		p(n, h) {
			if (h & 4) {
				a = n[2];
				let r;
				for (r = 0; r < a.length; r += 1) {
					const _ = it(n, a, r);
					i[r] ? i[r].p(_, h) : ((i[r] = _t(_)), i[r].c(), i[r].m(s, null));
				}
				for (; r < i.length; r += 1) i[r].d(1);
				i.length = a.length;
			}
		},
		d(n) {
			n && f(e), n && f(t), n && f(s), Ge(i, n);
		}
	};
}
function _t(o) {
	let e,
		l,
		t,
		s,
		a,
		i,
		n,
		h,
		r = o[7].name + '',
		_,
		k,
		g,
		I = (o[7].first_air_date ? o[7].first_air_date.substring(0, 4) : '') + '',
		M,
		P,
		w;
	return {
		c() {
			(e = d('div')),
				(l = d('a')),
				(t = d('img')),
				(i = y()),
				(n = d('div')),
				(h = d('p')),
				(_ = j(r)),
				(k = y()),
				(g = d('p')),
				(M = j(I)),
				(w = y()),
				this.h();
		},
		l(v) {
			e = p(v, 'DIV', { class: !0 });
			var x = m(e);
			l = p(x, 'A', { class: !0, href: !0 });
			var K = m(l);
			(t = p(K, 'IMG', { class: !0, src: !0, alt: !0 })),
				(i = E(K)),
				(n = p(K, 'DIV', { class: !0 }));
			var A = m(n);
			h = p(A, 'P', { class: !0 });
			var G = m(h);
			(_ = $(G, r)), G.forEach(f), (k = E(A)), (g = p(A, 'P', { class: !0 }));
			var T = m(g);
			(M = $(T, I)), T.forEach(f), A.forEach(f), K.forEach(f), (w = E(x)), x.forEach(f), this.h();
		},
		h() {
			u(t, 'class', 'object-cover w-28 h-44 rounded-t'),
				z(t.src, (s = o[7].poster_path ? we + o[7].poster_path : '/default.jpg')) || u(t, 'src', s),
				u(t, 'alt', (a = o[7].name)),
				u(h, 'class', 'text-xs text-center flex justify-center items-center line-clamp-2'),
				u(g, 'class', 'text-xs text-center flex justify-center items-center '),
				u(n, 'class', 'w-28 h-12 p-0.5'),
				u(l, 'class', 'rounded w-28'),
				u(l, 'href', (P = `/tv/${o[7].id}`)),
				u(
					e,
					'class',
					'w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'
				);
		},
		m(v, x) {
			D(v, e, x),
				c(e, l),
				c(l, t),
				c(l, i),
				c(l, n),
				c(n, h),
				c(h, _),
				c(n, k),
				c(n, g),
				c(g, M),
				c(e, w);
		},
		p(v, x) {
			x & 4 &&
				!z(t.src, (s = v[7].poster_path ? we + v[7].poster_path : '/default.jpg')) &&
				u(t, 'src', s),
				x & 4 && a !== (a = v[7].name) && u(t, 'alt', a),
				x & 4 && r !== (r = v[7].name + '') && S(_, r),
				x & 4 &&
					I !== (I = (v[7].first_air_date ? v[7].first_air_date.substring(0, 4) : '') + '') &&
					S(M, I),
				x & 4 && P !== (P = `/tv/${v[7].id}`) && u(l, 'href', P);
		},
		d(v) {
			v && f(e);
		}
	};
}
function It(o) {
	let e,
		l = o[0] && ct(o);
	return {
		c() {
			l && l.c(), (e = ne());
		},
		l(t) {
			l && l.l(t), (e = ne());
		},
		m(t, s) {
			l && l.m(t, s), D(t, e, s);
		},
		p(t, [s]) {
			t[0]
				? l
					? l.p(t, s)
					: ((l = ct(t)), l.c(), l.m(e.parentNode, e))
				: l && (l.d(1), (l = null));
		},
		i: ae,
		o: ae,
		d(t) {
			l && l.d(t), t && f(e);
		}
	};
}
const we = 'https://image.tmdb.org/t/p/w300';
function jt(o) {
	return o.media_type === 'movie';
}
function $t(o) {
	return o.media_type === 'tv';
}
function At(o, e, l) {
	let t;
	Ne(o, nt, (_) => l(4, (t = _)));
	var s =
		(this && this.__awaiter) ||
		function (_, k, g, I) {
			function M(P) {
				return P instanceof g
					? P
					: new g(function (w) {
							w(P);
					  });
			}
			return new (g || (g = Promise))(function (P, w) {
				function v(A) {
					try {
						K(I.next(A));
					} catch (G) {
						w(G);
					}
				}
				function x(A) {
					try {
						K(I.throw(A));
					} catch (G) {
						w(G);
					}
				}
				function K(A) {
					A.done ? P(A.value) : M(A.value).then(v, x);
				}
				K((I = I.apply(_, k || [])).next());
			});
		};
	let { personId: a } = e;
	const i = `https://api.themoviedb.org/3/person/${a}/combined_credits?api_key=${t}&language=en-US`;
	let n,
		h = [],
		r = [];
	return (
		xt(() =>
			s(void 0, void 0, void 0, function* () {
				l(
					0,
					(n = yield fetch(i)
						.then((_) => _.json())
						.then((_) => _.cast))
				),
					l(1, (h = n.filter(jt))),
					l(2, (r = n.filter($t))),
					h.sort((_, k) => (_.release_date > k.release_date ? -1 : 1)),
					r.sort((_, k) => (_.first_air_date > k.first_air_date ? -1 : 1));
			})
		),
		(o.$$set = (_) => {
			'personId' in _ && l(3, (a = _.personId));
		}),
		[n, h, r, a]
	);
}
class Dt extends Ke {
	constructor(e) {
		super();
		Fe(this, e, At, It, xe, { personId: 3 });
	}
}
function dt(o, e, l) {
	const t = o.slice();
	return (t[1] = e[l]), t;
}
function Pt(o) {
	let e, l;
	return {
		c() {
			(e = d('img')), this.h();
		},
		l(t) {
			(e = p(t, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			u(e, 'class', 'mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto'),
				z(e.src, (l = '/person.svg')) || u(e, 'src', l),
				u(e, 'alt', 'profile');
		},
		m(t, s) {
			D(t, e, s);
		},
		p: ae,
		d(t) {
			t && f(e);
		}
	};
}
function Vt(o) {
	let e, l;
	return {
		c() {
			(e = d('img')), this.h();
		},
		l(t) {
			(e = p(t, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			u(e, 'class', 'mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto'),
				z(e.src, (l = vt + o[0].profile_path)) || u(e, 'src', l),
				u(e, 'alt', 'profile');
		},
		m(t, s) {
			D(t, e, s);
		},
		p(t, s) {
			s & 1 && !z(e.src, (l = vt + t[0].profile_path)) && u(e, 'src', l);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Ht(o) {
	let e, l;
	return {
		c() {
			(e = d('p')), (l = j('Female')), this.h();
		},
		l(t) {
			e = p(t, 'P', { class: !0 });
			var s = m(e);
			(l = $(s, 'Female')), s.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(t, s) {
			D(t, e, s), c(e, l);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Mt(o) {
	let e, l;
	return {
		c() {
			(e = d('p')), (l = j('Male')), this.h();
		},
		l(t) {
			e = p(t, 'P', { class: !0 });
			var s = m(e);
			(l = $(s, 'Male')), s.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(t, s) {
			D(t, e, s), c(e, l);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Kt(o) {
	let e, l;
	return {
		c() {
			(e = d('p')), (l = j('Unknown')), this.h();
		},
		l(t) {
			e = p(t, 'P', { class: !0 });
			var s = m(e);
			(l = $(s, 'Unknown')), s.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(t, s) {
			D(t, e, s), c(e, l);
		},
		p: ae,
		d(t) {
			t && f(e);
		}
	};
}
function Ft(o) {
	let e,
		l = o[0].birthday + '',
		t;
	return {
		c() {
			(e = d('p')), (t = j(l)), this.h();
		},
		l(s) {
			e = p(s, 'P', { class: !0 });
			var a = m(e);
			(t = $(a, l)), a.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(s, a) {
			D(s, e, a), c(e, t);
		},
		p(s, a) {
			a & 1 && l !== (l = s[0].birthday + '') && S(t, l);
		},
		d(s) {
			s && f(e);
		}
	};
}
function Gt(o) {
	let e, l;
	return {
		c() {
			(e = d('p')), (l = j('Unknown')), this.h();
		},
		l(t) {
			e = p(t, 'P', { class: !0 });
			var s = m(e);
			(l = $(s, 'Unknown')), s.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(t, s) {
			D(t, e, s), c(e, l);
		},
		p: ae,
		d(t) {
			t && f(e);
		}
	};
}
function Nt(o) {
	let e,
		l = o[0].place_of_birth + '',
		t;
	return {
		c() {
			(e = d('p')), (t = j(l)), this.h();
		},
		l(s) {
			e = p(s, 'P', { class: !0 });
			var a = m(e);
			(t = $(a, l)), a.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(s, a) {
			D(s, e, a), c(e, t);
		},
		p(s, a) {
			a & 1 && l !== (l = s[0].place_of_birth + '') && S(t, l);
		},
		d(s) {
			s && f(e);
		}
	};
}
function pt(o) {
	let e,
		l,
		t,
		s,
		a = o[0].also_known_as,
		i = [];
	for (let n = 0; n < a.length; n += 1) i[n] = mt(dt(o, a, n));
	return {
		c() {
			(e = d('h4')), (l = j('Also Known As')), (t = y());
			for (let n = 0; n < i.length; n += 1) i[n].c();
			(s = ne()), this.h();
		},
		l(n) {
			e = p(n, 'H4', { class: !0 });
			var h = m(e);
			(l = $(h, 'Also Known As')), h.forEach(f), (t = E(n));
			for (let r = 0; r < i.length; r += 1) i[r].l(n);
			(s = ne()), this.h();
		},
		h() {
			u(e, 'class', 'mt-4 mb-1');
		},
		m(n, h) {
			D(n, e, h), c(e, l), D(n, t, h);
			for (let r = 0; r < i.length; r += 1) i[r].m(n, h);
			D(n, s, h);
		},
		p(n, h) {
			if (h & 1) {
				a = n[0].also_known_as;
				let r;
				for (r = 0; r < a.length; r += 1) {
					const _ = dt(n, a, r);
					i[r] ? i[r].p(_, h) : ((i[r] = mt(_)), i[r].c(), i[r].m(s.parentNode, s));
				}
				for (; r < i.length; r += 1) i[r].d(1);
				i.length = a.length;
			}
		},
		d(n) {
			n && f(e), n && f(t), Ge(i, n), n && f(s);
		}
	};
}
function mt(o) {
	let e,
		l = o[1] + '',
		t;
	return {
		c() {
			(e = d('p')), (t = j(l)), this.h();
		},
		l(s) {
			e = p(s, 'P', { class: !0 });
			var a = m(e);
			(t = $(a, l)), a.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'text-skin-muted xl:text-base');
		},
		m(s, a) {
			D(s, e, a), c(e, t);
		},
		p(s, a) {
			a & 1 && l !== (l = s[1] + '') && S(t, l);
		},
		d(s) {
			s && f(e);
		}
	};
}
function Bt(o) {
	let e,
		l,
		t,
		s,
		a,
		i = o[0].name + '',
		n,
		h,
		r,
		_,
		k,
		g,
		I,
		M,
		P,
		w,
		v = o[0].known_for_department + '',
		x,
		K,
		A,
		G,
		T,
		ce,
		J,
		ye,
		Ee,
		fe,
		Q,
		Ie,
		je,
		ue,
		$e,
		X,
		O,
		Y,
		ie = o[0].name + '',
		he,
		Ae,
		Z,
		De,
		Pe,
		ee,
		oe = o[0].biography + '',
		_e,
		Ve,
		te,
		L,
		le,
		He,
		Me,
		R,
		W;
	function Be(b, H) {
		return b[0].profile_path ? Vt : Pt;
	}
	let de = Be(o),
		N = de(o);
	function Ue(b, H) {
		return b[0].gender === 2 ? Mt : Ht;
	}
	let pe = Ue(o),
		C = pe(o);
	function Se(b, H) {
		return b[0].birthday ? Ft : Kt;
	}
	let me = Se(o),
		B = me(o);
	function Oe(b, H) {
		return b[0].place_of_birth ? Nt : Gt;
	}
	let ve = Oe(o),
		U = ve(o),
		F = o[0].also_known_as && o[0].also_known_as.length && pt(o);
	return (
		(R = new Dt({ props: { personId: o[0].id } })),
		{
			c() {
				(e = d('section')),
					(l = d('div')),
					(t = d('div')),
					N.c(),
					(s = y()),
					(a = d('h4')),
					(n = j(i)),
					(h = y()),
					(r = d('div')),
					(_ = d('h4')),
					(k = j('Personal Info')),
					(g = y()),
					(I = d('h6')),
					(M = j('Known For')),
					(P = y()),
					(w = d('p')),
					(x = j(v)),
					(K = y()),
					(A = d('h6')),
					(G = j('Gender')),
					(T = y()),
					C.c(),
					(ce = y()),
					(J = d('h6')),
					(ye = j('Birthdate')),
					(Ee = y()),
					B.c(),
					(fe = y()),
					(Q = d('h6')),
					(Ie = j('Place of Birth')),
					(je = y()),
					U.c(),
					(ue = y()),
					F && F.c(),
					($e = y()),
					(X = d('div')),
					(O = d('div')),
					(Y = d('h4')),
					(he = j(ie)),
					(Ae = y()),
					(Z = d('h6')),
					(De = j('Biography')),
					(Pe = y()),
					(ee = d('p')),
					(_e = j(oe)),
					(Ve = y()),
					(te = d('div')),
					(L = d('div')),
					(le = d('h4')),
					(He = j('Known For')),
					(Me = y()),
					tt(R.$$.fragment),
					this.h();
			},
			l(b) {
				e = p(b, 'SECTION', { id: !0, class: !0 });
				var H = m(e);
				l = p(H, 'DIV', { class: !0 });
				var q = m(l);
				t = p(q, 'DIV', { class: !0 });
				var se = m(t);
				N.l(se), (s = E(se)), (a = p(se, 'H4', { class: !0 }));
				var Te = m(a);
				(n = $(Te, i)), Te.forEach(f), (h = E(se)), (r = p(se, 'DIV', { class: !0 }));
				var V = m(r);
				_ = p(V, 'H4', { class: !0 });
				var Ce = m(_);
				(k = $(Ce, 'Personal Info')), Ce.forEach(f), (g = E(V)), (I = p(V, 'H6', { class: !0 }));
				var qe = m(I);
				(M = $(qe, 'Known For')), qe.forEach(f), (P = E(V)), (w = p(V, 'P', { class: !0 }));
				var Le = m(w);
				(x = $(Le, v)), Le.forEach(f), (K = E(V)), (A = p(V, 'H6', { class: !0 }));
				var Re = m(A);
				(G = $(Re, 'Gender')),
					Re.forEach(f),
					(T = E(V)),
					C.l(V),
					(ce = E(V)),
					(J = p(V, 'H6', { class: !0 }));
				var We = m(J);
				(ye = $(We, 'Birthdate')),
					We.forEach(f),
					(Ee = E(V)),
					B.l(V),
					(fe = E(V)),
					(Q = p(V, 'H6', { class: !0 }));
				var ze = m(Q);
				(Ie = $(ze, 'Place of Birth')),
					ze.forEach(f),
					(je = E(V)),
					U.l(V),
					(ue = E(V)),
					F && F.l(V),
					V.forEach(f),
					se.forEach(f),
					($e = E(q)),
					(X = p(q, 'DIV', { class: !0 }));
				var Je = m(X);
				O = p(Je, 'DIV', { class: !0 });
				var re = m(O);
				Y = p(re, 'H4', { class: !0 });
				var Qe = m(Y);
				(he = $(Qe, ie)), Qe.forEach(f), (Ae = E(re)), (Z = p(re, 'H6', { class: !0 }));
				var Xe = m(Z);
				(De = $(Xe, 'Biography')), Xe.forEach(f), (Pe = E(re)), (ee = p(re, 'P', { class: !0 }));
				var Ye = m(ee);
				(_e = $(Ye, oe)),
					Ye.forEach(f),
					re.forEach(f),
					Je.forEach(f),
					(Ve = E(q)),
					(te = p(q, 'DIV', { class: !0 }));
				var Ze = m(te);
				L = p(Ze, 'DIV', { class: !0 });
				var be = m(L);
				le = p(be, 'H4', { class: !0 });
				var et = m(le);
				(He = $(et, 'Known For')),
					et.forEach(f),
					(Me = E(be)),
					lt(R.$$.fragment, be),
					be.forEach(f),
					Ze.forEach(f),
					q.forEach(f),
					H.forEach(f),
					this.h();
			},
			h() {
				u(a, 'class', 'mt-2 w-full text-skin-base text-center mx-auto xl:hidden'),
					u(_, 'class', 'xl:text-2xl mt-2'),
					u(I, 'class', 'xl:text-lg font-bold mt-4 mb-1'),
					u(w, 'class', 'text-skin-muted xl:text-base'),
					u(A, 'class', 'xl:text-lg font-bold mt-4 mb-1'),
					u(J, 'class', 'xl:text-lg font-bold mt-4 mb-1'),
					u(Q, 'class', 'xl:text-lg font-bold mt-4 mb-1'),
					u(r, 'class', 'text-skin-base pl-8 w-full xl:p-3'),
					u(
						t,
						'class',
						'xl:rounded-2xl bg-skin-secondary w-full xl:p-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto'
					),
					u(Y, 'class', 'xl:text-2xl hidden xl:inline-block'),
					u(Z, 'class', 'xl:text-lg font-bold mt-4 mb-1'),
					u(ee, 'class', 'text-skin-muted xl:text-base'),
					u(O, 'class', 'mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl'),
					u(
						X,
						'class',
						'bg-skin-tertiary xl:rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2 xl:ml-5 xl:mb-5'
					),
					u(le, 'class', 'xl:text-2xl pl-3.5 xl:pl-0'),
					u(L, 'class', 'pt-8'),
					u(
						te,
						'class',
						'bg-skin-tertiary rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5'
					),
					u(l, 'class', 'grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr'),
					u(e, 'id', 'person'),
					u(e, 'class', 'xl:rounded-2xl mx-auto max-w-7xl xl:pb-20 xl:mt-5');
			},
			m(b, H) {
				D(b, e, H),
					c(e, l),
					c(l, t),
					N.m(t, null),
					c(t, s),
					c(t, a),
					c(a, n),
					c(t, h),
					c(t, r),
					c(r, _),
					c(_, k),
					c(r, g),
					c(r, I),
					c(I, M),
					c(r, P),
					c(r, w),
					c(w, x),
					c(r, K),
					c(r, A),
					c(A, G),
					c(r, T),
					C.m(r, null),
					c(r, ce),
					c(r, J),
					c(J, ye),
					c(r, Ee),
					B.m(r, null),
					c(r, fe),
					c(r, Q),
					c(Q, Ie),
					c(r, je),
					U.m(r, null),
					c(r, ue),
					F && F.m(r, null),
					c(l, $e),
					c(l, X),
					c(X, O),
					c(O, Y),
					c(Y, he),
					c(O, Ae),
					c(O, Z),
					c(Z, De),
					c(O, Pe),
					c(O, ee),
					c(ee, _e),
					c(l, Ve),
					c(l, te),
					c(te, L),
					c(L, le),
					c(le, He),
					c(L, Me),
					st(R, L, null),
					(W = !0);
			},
			p(b, [H]) {
				de === (de = Be(b)) && N ? N.p(b, H) : (N.d(1), (N = de(b)), N && (N.c(), N.m(t, s))),
					(!W || H & 1) && i !== (i = b[0].name + '') && S(n, i),
					(!W || H & 1) && v !== (v = b[0].known_for_department + '') && S(x, v),
					pe !== (pe = Ue(b)) && (C.d(1), (C = pe(b)), C && (C.c(), C.m(r, ce))),
					me === (me = Se(b)) && B ? B.p(b, H) : (B.d(1), (B = me(b)), B && (B.c(), B.m(r, fe))),
					ve === (ve = Oe(b)) && U ? U.p(b, H) : (U.d(1), (U = ve(b)), U && (U.c(), U.m(r, ue))),
					b[0].also_known_as && b[0].also_known_as.length
						? F
							? F.p(b, H)
							: ((F = pt(b)), F.c(), F.m(r, null))
						: F && (F.d(1), (F = null)),
					(!W || H & 1) && ie !== (ie = b[0].name + '') && S(he, ie),
					(!W || H & 1) && oe !== (oe = b[0].biography + '') && S(_e, oe);
				const q = {};
				H & 1 && (q.personId = b[0].id), R.$set(q);
			},
			i(b) {
				W || (ke(R.$$.fragment, b), (W = !0));
			},
			o(b) {
				ge(R.$$.fragment, b), (W = !1);
			},
			d(b) {
				b && f(e), N.d(), C.d(), B.d(), U.d(), F && F.d(), rt(R);
			}
		}
	);
}
const vt = 'https://image.tmdb.org/t/p/w500/';
function Ut(o, e, l) {
	let { person: t } = e;
	return (
		(o.$$set = (s) => {
			'person' in s && l(0, (t = s.person));
		}),
		[t]
	);
}
class St extends Ke {
	constructor(e) {
		super();
		Fe(this, e, Ut, Bt, xe, { person: 0 });
	}
}
function bt(o) {
	let e, l;
	return (
		(e = new St({ props: { person: o[0] } })),
		{
			c() {
				tt(e.$$.fragment);
			},
			l(t) {
				lt(e.$$.fragment, t);
			},
			m(t, s) {
				st(e, t, s), (l = !0);
			},
			p(t, s) {
				const a = {};
				s & 1 && (a.person = t[0]), e.$set(a);
			},
			i(t) {
				l || (ke(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				ge(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				rt(e, t);
			}
		}
	);
}
function Ot(o) {
	let e = o[1].params.id,
		l,
		t,
		s = bt(o);
	return {
		c() {
			s.c(), (l = ne());
		},
		l(a) {
			s.l(a), (l = ne());
		},
		m(a, i) {
			s.m(a, i), D(a, l, i), (t = !0);
		},
		p(a, [i]) {
			i & 2 && xe(e, (e = a[1].params.id))
				? (yt(), ge(s, 1, 1, ae), gt(), (s = bt(a)), s.c(), ke(s), s.m(l.parentNode, l))
				: s.p(a, i);
		},
		i(a) {
			t || (ke(s), (t = !0));
		},
		o(a) {
			ge(s), (t = !1);
		},
		d(a) {
			a && f(l), s.d(a);
		}
	};
}
var Tt = function (o, e, l, t) {
	function s(a) {
		return a instanceof l
			? a
			: new l(function (i) {
					i(a);
			  });
	}
	return new (l || (l = Promise))(function (a, i) {
		function n(_) {
			try {
				r(t.next(_));
			} catch (k) {
				i(k);
			}
		}
		function h(_) {
			try {
				r(t.throw(_));
			} catch (k) {
				i(k);
			}
		}
		function r(_) {
			_.done ? a(_.value) : s(_.value).then(n, h);
		}
		r((t = t.apply(o, e || [])).next());
	});
};
function Wt({ page: o }) {
	return Tt(this, void 0, void 0, function* () {
		let e = `https://api.themoviedb.org/3/person/${o.params.id}?api_key=${kt(nt)}&language=en-US`;
		return { props: { person: yield fetch(e).then((t) => t.json()) } };
	});
}
function Ct(o, e, l) {
	let t, s;
	Ne(o, at, (i) => l(2, (t = i))),
		Ne(o, Et, (i) => l(1, (s = i))),
		this && this.__awaiter,
		wt(at, (t = 'person'), t);
	let { person: a } = e;
	return (
		(o.$$set = (i) => {
			'person' in i && l(0, (a = i.person));
		}),
		[a, s]
	);
}
class zt extends Ke {
	constructor(e) {
		super();
		Fe(this, e, Ct, Ot, xe, { person: 0 });
	}
}
export { zt as default, Wt as load };
