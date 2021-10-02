function d() {}
function F(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function M(t) {
	return t();
}
function D() {
	return Object.create(null);
}
function p(t) {
	t.forEach(M);
}
function H(t) {
	return typeof t == 'function';
}
function I(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
let g;
function at(t, n) {
	return g || (g = document.createElement('a')), (g.href = n), t === g.href;
}
function W(t) {
	return Object.keys(t).length === 0;
}
function L(t, ...n) {
	if (t == null) return d;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function ft(t) {
	let n;
	return L(t, (e) => (n = e))(), n;
}
function _t(t, n, e) {
	t.$$.on_destroy.push(L(n, e));
}
function dt(t, n, e, i) {
	if (t) {
		const r = T(t, n, e, i);
		return t[0](r);
	}
}
function T(t, n, e, i) {
	return t[1] && i ? F(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function ht(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == 'object') {
			const l = [],
				u = Math.max(n.dirty.length, r.length);
			for (let o = 0; o < u; o += 1) l[o] = n.dirty[o] | r[o];
			return l;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function mt(t, n, e, i, r, l) {
	if (r) {
		const u = T(n, e, i, l);
		t.p(u, r);
	}
}
function pt(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
function yt(t, n, e) {
	return t.set(e), n;
}
let x = !1;
function G() {
	x = !0;
}
function J() {
	x = !1;
}
function K(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function Q(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let s = 0; s < n.length; s++) {
			const f = n[s];
			f.claim_order !== void 0 && c.push(f);
		}
		n = c;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let c = 0; c < n.length; c++) {
		const s = n[c].claim_order,
			f = (r > 0 && n[e[r]].claim_order <= s ? r + 1 : K(1, r, (b) => n[e[b]].claim_order, s)) - 1;
		i[c] = e[f] + 1;
		const a = f + 1;
		(e[a] = c), (r = Math.max(a, r));
	}
	const l = [],
		u = [];
	let o = n.length - 1;
	for (let c = e[r] + 1; c != 0; c = i[c - 1]) {
		for (l.push(n[c - 1]); o >= c; o--) u.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) u.push(n[o]);
	l.reverse(), u.sort((c, s) => c.claim_order - s.claim_order);
	for (let c = 0, s = 0; c < u.length; c++) {
		for (; s < l.length && u[c].claim_order >= l[s].claim_order; ) s++;
		const f = s < l.length ? l[s] : null;
		t.insertBefore(u[c], f);
	}
}
function R(t, n) {
	if (x) {
		for (
			Q(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function bt(t, n, e) {
	x && !e ? R(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function U(t) {
	t.parentNode.removeChild(t);
}
function gt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function V(t) {
	return document.createElement(t);
}
function k(t) {
	return document.createTextNode(t);
}
function xt() {
	return k(' ');
}
function $t() {
	return k('');
}
function Et(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function vt(t) {
	return function (n) {
		return n.preventDefault(), t.call(this, n);
	};
}
function wt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function X(t) {
	return Array.from(t.childNodes);
}
function Y(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function z(t, n, e, i, r = !1) {
	Y(t);
	const l = (() => {
		for (let u = t.claim_info.last_index; u < t.length; u++) {
			const o = t[u];
			if (n(o)) {
				const c = e(o);
				return c === void 0 ? t.splice(u, 1) : (t[u] = c), r || (t.claim_info.last_index = u), o;
			}
		}
		for (let u = t.claim_info.last_index - 1; u >= 0; u--) {
			const o = t[u];
			if (n(o)) {
				const c = e(o);
				return (
					c === void 0 ? t.splice(u, 1) : (t[u] = c),
					r ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = u),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function Z(t, n, e, i) {
	return z(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const l = [];
			for (let u = 0; u < r.attributes.length; u++) {
				const o = r.attributes[u];
				e[o.name] || l.push(o.name);
			}
			l.forEach((u) => r.removeAttribute(u));
		},
		() => i(n)
	);
}
function kt(t, n, e) {
	return Z(t, n, e, V);
}
function tt(t, n) {
	return z(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => k(n),
		!0
	);
}
function At(t) {
	return tt(t, ' ');
}
function St(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function jt(t, n) {
	t.value = n == null ? '' : n;
}
function Ct(t, n, e, i) {
	t.style.setProperty(n, e, i ? 'important' : '');
}
function Nt(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function nt(t, n, e = !1) {
	const i = document.createEvent('CustomEvent');
	return i.initCustomEvent(t, e, !1, n), i;
}
function qt(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
let $;
function E(t) {
	$ = t;
}
function h() {
	if (!$) throw new Error('Function called outside component initialization');
	return $;
}
function Mt(t) {
	h().$$.on_mount.push(t);
}
function Dt(t) {
	h().$$.after_update.push(t);
}
function Lt(t) {
	h().$$.on_destroy.push(t);
}
function Tt() {
	const t = h();
	return (n, e) => {
		const i = t.$$.callbacks[n];
		if (i) {
			const r = nt(n, e);
			i.slice().forEach((l) => {
				l.call(t, r);
			});
		}
	};
}
function zt(t, n) {
	h().$$.context.set(t, n);
}
function Bt(t) {
	return h().$$.context.get(t);
}
const y = [],
	B = [],
	v = [],
	O = [],
	et = Promise.resolve();
let A = !1;
function it() {
	A || ((A = !0), et.then(P));
}
function S(t) {
	v.push(t);
}
let j = !1;
const C = new Set();
function P() {
	if (!j) {
		j = !0;
		do {
			for (let t = 0; t < y.length; t += 1) {
				const n = y[t];
				E(n), rt(n.$$);
			}
			for (E(null), y.length = 0; B.length; ) B.pop()();
			for (let t = 0; t < v.length; t += 1) {
				const n = v[t];
				C.has(n) || (C.add(n), n());
			}
			v.length = 0;
		} while (y.length);
		for (; O.length; ) O.pop()();
		(A = !1), (j = !1), C.clear();
	}
}
function rt(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(S);
	}
}
const w = new Set();
let _;
function Ot() {
	_ = { r: 0, c: [], p: _ };
}
function Pt() {
	_.r || p(_.c), (_ = _.p);
}
function ct(t, n) {
	t && t.i && (w.delete(t), t.i(n));
}
function Ft(t, n, e, i) {
	if (t && t.o) {
		if (w.has(t)) return;
		w.add(t),
			_.c.push(() => {
				w.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	}
}
function Ht(t, n) {
	const e = {},
		i = {},
		r = { $$scope: 1 };
	let l = t.length;
	for (; l--; ) {
		const u = t[l],
			o = n[l];
		if (o) {
			for (const c in u) c in o || (i[c] = 1);
			for (const c in o) r[c] || ((e[c] = o[c]), (r[c] = 1));
			t[l] = o;
		} else for (const c in u) r[c] = 1;
	}
	for (const u in i) u in e || (e[u] = void 0);
	return e;
}
function It(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function Wt(t) {
	t && t.c();
}
function Gt(t, n) {
	t && t.l(n);
}
function ut(t, n, e, i) {
	const { fragment: r, on_mount: l, on_destroy: u, after_update: o } = t.$$;
	r && r.m(n, e),
		i ||
			S(() => {
				const c = l.map(M).filter(H);
				u ? u.push(...c) : p(c), (t.$$.on_mount = []);
			}),
		o.forEach(S);
}
function ot(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(p(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function st(t, n) {
	t.$$.dirty[0] === -1 && (y.push(t), it(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Jt(t, n, e, i, r, l, u, o = [-1]) {
	const c = $;
	E(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: null,
		props: l,
		update: d,
		not_equal: r,
		bound: D(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (c ? c.$$.context : [])),
		callbacks: D(),
		dirty: o,
		skip_bound: !1,
		root: n.target || c.$$.root
	});
	u && u(s.root);
	let f = !1;
	if (
		((s.ctx = e
			? e(t, n.props || {}, (a, b, ...N) => {
					const q = N.length ? N[0] : b;
					return (
						s.ctx &&
							r(s.ctx[a], (s.ctx[a] = q)) &&
							(!s.skip_bound && s.bound[a] && s.bound[a](q), f && st(t, a)),
						b
					);
			  })
			: []),
		s.update(),
		(f = !0),
		p(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			G();
			const a = X(n.target);
			s.fragment && s.fragment.l(a), a.forEach(U);
		} else s.fragment && s.fragment.c();
		n.intro && ct(t.$$.fragment), ut(t, n.target, n.anchor, n.customElement), J(), P();
	}
	E(c);
}
class Kt {
	$destroy() {
		ot(this, 1), (this.$destroy = d);
	}
	$on(n, e) {
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !W(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
const m = [];
function Qt(t, n) {
	return { subscribe: lt(t, n).subscribe };
}
function lt(t, n = d) {
	let e;
	const i = new Set();
	function r(o) {
		if (I(t, o) && ((t = o), e)) {
			const c = !m.length;
			for (const s of i) s[1](), m.push(s, t);
			if (c) {
				for (let s = 0; s < m.length; s += 2) m[s][0](m[s + 1]);
				m.length = 0;
			}
		}
	}
	function l(o) {
		r(o(t));
	}
	function u(o, c = d) {
		const s = [o, c];
		return (
			i.add(s),
			i.size === 1 && (e = n(r) || d),
			o(t),
			() => {
				i.delete(s), i.size === 0 && (e(), (e = null));
			}
		);
	}
	return { set: r, update: l, subscribe: u };
}
export {
	Mt as A,
	F as B,
	lt as C,
	R as D,
	jt as E,
	Et as F,
	vt as G,
	d as H,
	p as I,
	Nt as J,
	gt as K,
	_t as L,
	yt as M,
	ft as N,
	at as O,
	dt as P,
	qt as Q,
	mt as R,
	Kt as S,
	pt as T,
	ht as U,
	Qt as V,
	Tt as W,
	Lt as X,
	B as Y,
	Bt as Z,
	Ct as _,
	X as a,
	wt as b,
	kt as c,
	U as d,
	V as e,
	bt as f,
	tt as g,
	St as h,
	Jt as i,
	Wt as j,
	xt as k,
	$t as l,
	Gt as m,
	At as n,
	ut as o,
	Ht as p,
	It as q,
	Ot as r,
	I as s,
	k as t,
	Ft as u,
	ot as v,
	Pt as w,
	ct as x,
	zt as y,
	Dt as z
};
