import {
	S as D,
	i as F,
	s as L,
	e as p,
	t as v,
	c as h,
	a as k,
	g as y,
	d as o,
	f as c,
	D as b,
	h as N,
	k as E,
	l as P,
	Q as O,
	n as z,
	b as S,
	H as j
} from '../chunks/vendor-8fe9a59e.js';
function C(i) {
	let t,
		n = i[0].stack + '',
		s;
	return {
		c() {
			(t = p('pre')), (s = v(n));
		},
		l(l) {
			t = h(l, 'PRE', {});
			var r = k(t);
			(s = y(r, n)), r.forEach(o);
		},
		m(l, r) {
			c(l, t, r), b(t, s);
		},
		p(l, r) {
			r & 1 && n !== (n = l[0].stack + '') && N(s, n);
		},
		d(l) {
			l && o(t);
		}
	};
}
function Q(i) {
	let t, n, s, l, r, _, m, u, d;
	document.title = t = i[1];
	let a = i[0].stack && C(i);
	return {
		c() {
			(n = E()),
				(s = p('h1')),
				(l = v(i[1])),
				(r = E()),
				(_ = p('p')),
				(m = v(i[2])),
				(u = E()),
				a && a.c(),
				(d = P()),
				this.h();
		},
		l(e) {
			O('[data-svelte="svelte-1az6e94"]', document.head).forEach(o),
				(n = z(e)),
				(s = h(e, 'H1', { class: !0 }));
			var q = k(s);
			(l = y(q, i[1])), q.forEach(o), (r = z(e)), (_ = h(e, 'P', { class: !0 }));
			var H = k(_);
			(m = y(H, i[2])), H.forEach(o), (u = z(e)), a && a.l(e), (d = P()), this.h();
		},
		h() {
			S(s, 'class', 'svelte-be3lyz'), S(_, 'class', 'svelte-be3lyz');
		},
		m(e, f) {
			c(e, n, f),
				c(e, s, f),
				b(s, l),
				c(e, r, f),
				c(e, _, f),
				b(_, m),
				c(e, u, f),
				a && a.m(e, f),
				c(e, d, f);
		},
		p(e, [f]) {
			f & 2 && t !== (t = e[1]) && (document.title = t),
				e[0].stack
					? a
						? a.p(e, f)
						: ((a = C(e)), a.c(), a.m(d.parentNode, d))
					: a && (a.d(1), (a = null));
		},
		i: j,
		o: j,
		d(e) {
			e && o(n), e && o(s), e && o(r), e && o(_), e && o(u), a && a.d(e), e && o(d);
		}
	};
}
function A({ error: i, status: t }) {
	return { props: { error: i, status: t } };
}
function R(i, t, n) {
	let { status: s } = t,
		{ error: l } = t;
	const r = typeof navigator != 'undefined' && navigator.onLine === !1,
		_ = r ? 'Offline' : s,
		m = r ? 'Find the internet and try again' : l.message;
	return (
		(i.$$set = (u) => {
			'status' in u && n(3, (s = u.status)), 'error' in u && n(0, (l = u.error));
		}),
		[l, _, m, s]
	);
}
class B extends D {
	constructor(t) {
		super();
		F(this, t, R, Q, L, { status: 3, error: 0 });
	}
}
export { B as default, A as load };
