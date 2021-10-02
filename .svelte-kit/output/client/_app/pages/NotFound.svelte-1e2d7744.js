import {
	S as v,
	i as F,
	s as N,
	e as p,
	t as u,
	k,
	c as f,
	a as m,
	g as _,
	d as o,
	n as y,
	f as r,
	D as h,
	H as c
} from '../chunks/vendor-8fe9a59e.js';
function E(x) {
	let t, i, n, s, l;
	return {
		c() {
			(t = p('h1')),
				(i = u('Not Found')),
				(n = k()),
				(s = p('p')),
				(l = u("This route doesn't exist."));
		},
		l(e) {
			t = f(e, 'H1', {});
			var a = m(t);
			(i = _(a, 'Not Found')), a.forEach(o), (n = y(e)), (s = f(e, 'P', {}));
			var d = m(s);
			(l = _(d, "This route doesn't exist.")), d.forEach(o);
		},
		m(e, a) {
			r(e, t, a), h(t, i), r(e, n, a), r(e, s, a), h(s, l);
		},
		p: c,
		i: c,
		o: c,
		d(e) {
			e && o(t), e && o(n), e && o(s);
		}
	};
}
class S extends v {
	constructor(t) {
		super();
		F(this, t, null, E, N, {});
	}
}
export { S as default };
