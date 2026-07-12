import { j as f } from "../../../jsx-runtime-DmTjM30f.js";
import * as C from "react";
import { forwardRef as St, Children as ta, cloneElement as ra, useMemo as Jt, useState as Te, useCallback as oe, useImperativeHandle as aa, useEffect as na } from "react";
import { c as X } from "../../../clsx-OuTLNxxd.js";
import { c as Ce, g as ia } from "../../../_commonjsHelpers-BkfeUUK-.js";
import '../../../assets/date-picker.css';/* empty css                            */
import "../../Typography/base.js";
import "../../Typography/heading/index.js";
import { Text as oa } from "../../Typography/text/index.js";
import { d as ua } from "../../../dayjs.min-DrYbymKu.js";
const la = ({ title: e, titleId: t, ...a }, r) => C.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 9, height: 22, viewBox: "0 0 9 22", role: "img", ref: r, "aria-labelledby": t, ...a },
  e ? C.createElement("title", { id: t }, e) : null,
  C.createElement(
    "g",
    null,
    C.createElement("path", { d: "M8.602 10.148a.843.843 0 0 1 0 1.23l-5.25 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.648-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0z" })
  ),
  C.createElement(
    "defs",
    null,
    C.createElement(
      "clipPath",
      { id: "ff45175123d5b062d162068cde1d7e84__a" },
      C.createElement("path", { d: "M0 0h9v22H0z" })
    )
  )
), ca = St(la), sa = ({ title: e, titleId: t, ...a }, r) => C.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 9, height: 22, viewBox: "0 0 9 22", role: "img", ref: r, "aria-labelledby": t, ...a },
  e ? C.createElement("title", { id: t }, e) : null,
  C.createElement(
    "g",
    null,
    C.createElement("path", { d: "m.371 10.148 5.25-5.25a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-4.62 4.622 4.62 4.648a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23" })
  ),
  C.createElement(
    "defs",
    null,
    C.createElement(
      "clipPath",
      { id: "049a1f297fc80d8a53661a1ec7a784a6__a" },
      C.createElement("path", { d: "M0 0h9v22H0z" })
    )
  )
), fa = St(sa), va = (e, t, a, r) => {
  if (a === "length" || a === "prototype" || a === "arguments" || a === "caller")
    return;
  const n = Object.getOwnPropertyDescriptor(e, a), i = Object.getOwnPropertyDescriptor(t, a);
  !da(n, i) && r || Object.defineProperty(e, a, i);
}, da = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, ma = (e, t) => {
  const a = Object.getPrototypeOf(t);
  a !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, a);
}, ha = (e, t) => `/* Wrapped ${e}*/
${t}`, ya = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), ga = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), wa = (e, t, a) => {
  const r = a === "" ? "" : `with ${a.trim()}() `, n = ha.bind(null, r, t.toString());
  Object.defineProperty(n, "name", ga), Object.defineProperty(e, "toString", { ...ya, value: n });
}, ba = (e, t, { ignoreNonConfigurable: a = !1 } = {}) => {
  const { name: r } = e;
  for (const n of Reflect.ownKeys(t))
    va(e, t, n, a);
  return ma(e, t), wa(e, t, r), e;
};
var Da = ba, st = { exports: {} }, Oa = () => {
  const e = {};
  return e.promise = new Promise((t, a) => {
    e.resolve = t, e.reject = a;
  }), e;
};
(function(e, t) {
  var a = Ce && Ce.__awaiter || function(o, u, c, l) {
    return new (c || (c = Promise))(function(s, v) {
      function d(h) {
        try {
          w(l.next(h));
        } catch (g) {
          v(g);
        }
      }
      function m(h) {
        try {
          w(l.throw(h));
        } catch (g) {
          v(g);
        }
      }
      function w(h) {
        h.done ? s(h.value) : new c(function(g) {
          g(h.value);
        }).then(d, m);
      }
      w((l = l.apply(o, u || [])).next());
    });
  }, r = Ce && Ce.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = r(Oa);
  function i(o, u = "maxAge") {
    let c, l, s;
    const v = () => a(this, void 0, void 0, function* () {
      if (c !== void 0)
        return;
      const w = (h) => a(this, void 0, void 0, function* () {
        s = n.default();
        const g = h[1][u] - Date.now();
        if (g <= 0) {
          o.delete(h[0]), s.resolve();
          return;
        }
        return c = h[0], l = setTimeout(() => {
          o.delete(h[0]), s && s.resolve();
        }, g), typeof l.unref == "function" && l.unref(), s.promise;
      });
      try {
        for (const h of o)
          yield w(h);
      } catch {
      }
      c = void 0;
    }), d = () => {
      c = void 0, l !== void 0 && (clearTimeout(l), l = void 0), s !== void 0 && (s.reject(void 0), s = void 0);
    }, m = o.set.bind(o);
    return o.set = (w, h) => {
      o.has(w) && o.delete(w);
      const g = m(w, h);
      return c && c === w && d(), v(), g;
    }, v(), o;
  }
  t.default = i, e.exports = i, e.exports.default = i;
})(st, st.exports);
var xa = st.exports;
const pa = Da, _a = xa, it = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), Me = (e, { cacheKey: t, cache: a = /* @__PURE__ */ new Map(), maxAge: r } = {}) => {
  typeof r == "number" && _a(a);
  const n = function(...i) {
    const o = t ? t(i) : i[0], u = a.get(o);
    if (u)
      return u.data;
    const c = e.apply(this, i);
    return a.set(o, {
      data: c,
      maxAge: r ? Date.now() + r : Number.POSITIVE_INFINITY
    }), c;
  };
  return pa(n, e, {
    ignoreNonConfigurable: !0
  }), fr.set(n, a), n;
};
Me.decorator = (e = {}) => (t, a, r) => {
  const n = t[a];
  if (typeof n != "function")
    throw new TypeError("The decorated value must be a function");
  delete r.value, delete r.writable, r.get = function() {
    if (!it.has(this)) {
      const i = Me(n, e);
      return it.set(this, i), i;
    }
    return it.get(this);
  };
};
Me.clear = (e) => {
  const t = fr.get(e);
  if (!t)
    throw new TypeError("Can't clear a function that was not memoized!");
  if (typeof t.clear != "function")
    throw new TypeError("The cache Map can't be cleared!");
  t.clear();
};
var Sa = Me;
const vr = /* @__PURE__ */ ia(Sa);
function ja(e) {
  return typeof e == "string";
}
function Na(e, t, a) {
  return a.indexOf(e) === t;
}
function ka(e) {
  return e.toLowerCase() === e;
}
function Qt(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function ft(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], a = t === void 0 ? "" : t;
    return ft(a);
  }
  if (e.indexOf("@") !== -1) {
    var r = e.split("@")[0], a = r === void 0 ? "" : r;
    return ft(a);
  }
  if (e.indexOf("-") === -1 || !ka(e))
    return e;
  var n = e.split("-"), i = n[0], o = n[1], u = o === void 0 ? "" : o;
  return "".concat(i, "-").concat(u.toUpperCase());
}
function Pa(e) {
  var t = e === void 0 ? {} : e, a = t.useFallbackLocale, r = a === void 0 ? !0 : a, n = t.fallbackLocale, i = n === void 0 ? "en-US" : n, o = [];
  if (typeof navigator < "u") {
    for (var u = navigator.languages || [], c = [], l = 0, s = u; l < s.length; l++) {
      var v = s[l];
      c = c.concat(Qt(v));
    }
    var d = navigator.language, m = d && Qt(d);
    o = o.concat(c, m);
  }
  return r && o.push(i), o.filter(ja).map(ft).filter(Na);
}
var Ta = vr(Pa, { cacheKey: JSON.stringify });
function Ca(e) {
  return Ta(e)[0] || null;
}
var dr = vr(Ca, { cacheKey: JSON.stringify });
function U(e, t, a) {
  return function(n, i) {
    i === void 0 && (i = a);
    var o = e(n) + i;
    return t(o);
  };
}
function be(e) {
  return function(a) {
    return new Date(e(a).getTime() - 1);
  };
}
function De(e, t) {
  return function(r) {
    return [e(r), t(r)];
  };
}
function O(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function K(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function We(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function ce(e) {
  var t = O(e), a = t + (-t + 1) % 100, r = /* @__PURE__ */ new Date();
  return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var Aa = U(O, ce, -100), mr = U(O, ce, 100), jt = be(mr), Ea = U(O, jt, -100), hr = De(ce, jt);
function J(e) {
  var t = O(e), a = t + (-t + 1) % 10, r = /* @__PURE__ */ new Date();
  return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var yr = U(O, J, -10), Nt = U(O, J, 10), Ye = be(Nt), gr = U(O, Ye, -10), wr = De(J, Ye);
function se(e) {
  var t = O(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var br = U(O, se, -1), kt = U(O, se, 1), Re = be(kt), Dr = U(O, Re, -1), La = De(se, Re);
function Pt(e, t) {
  return function(r, n) {
    n === void 0 && (n = t);
    var i = O(r), o = K(r) + n, u = /* @__PURE__ */ new Date();
    return u.setFullYear(i, o, 1), u.setHours(0, 0, 0, 0), e(u);
  };
}
function ee(e) {
  var t = O(e), a = K(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, a, 1), r.setHours(0, 0, 0, 0), r;
}
var Or = Pt(ee, -1), Tt = Pt(ee, 1), Oe = be(Tt), xr = Pt(Oe, -1), Ma = De(ee, Oe);
function Ia(e, t) {
  return function(r, n) {
    n === void 0 && (n = t);
    var i = O(r), o = K(r), u = We(r) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(i, o, u), c.setHours(0, 0, 0, 0), e(c);
  };
}
function xe(e) {
  var t = O(e), a = K(e), r = We(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, a, r), n.setHours(0, 0, 0, 0), n;
}
var Wa = Ia(xe, 1), Ct = be(Wa), Ya = De(xe, Ct);
function pr(e) {
  return We(Oe(e));
}
var he, S = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, Ra = (he = {}, he[S.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], he[S.HEBREW] = ["he", "he-IL"], he[S.ISLAMIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], he), At = [0, 1, 2, 3, 4, 5, 6], ot = /* @__PURE__ */ new Map();
function Va(e) {
  return function(a, r) {
    var n = a || dr();
    ot.has(n) || ot.set(n, /* @__PURE__ */ new Map());
    var i = ot.get(n);
    return i.has(e) || i.set(e, new Intl.DateTimeFormat(n || void 0, e).format), i.get(e)(r);
  };
}
function Fa(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function te(e) {
  return function(t, a) {
    return Va(e)(t, Fa(a));
  };
}
var $a = { day: "numeric" }, Ga = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, Ba = { month: "long" }, Ua = {
  month: "long",
  year: "numeric"
}, Ha = { weekday: "short" }, qa = { weekday: "long" }, za = { year: "numeric" }, Ka = te($a), Ja = te(Ga), Qa = te(Ba), _r = te(Ua), Xa = te(Ha), Za = te(qa), Ve = te(za), en = At[0], tn = At[5], Xt = At[6];
function ge(e, t) {
  t === void 0 && (t = S.ISO_8601);
  var a = e.getDay();
  switch (t) {
    case S.ISO_8601:
      return (a + 6) % 7;
    case S.ISLAMIC:
      return (a + 1) % 7;
    case S.HEBREW:
    case S.GREGORY:
      return a;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function rn(e) {
  var t = ce(e);
  return O(t);
}
function an(e) {
  var t = J(e);
  return O(t);
}
function vt(e, t) {
  t === void 0 && (t = S.ISO_8601);
  var a = O(e), r = K(e), n = e.getDate() - ge(e, t);
  return new Date(a, r, n);
}
function nn(e, t) {
  t === void 0 && (t = S.ISO_8601);
  var a = t === S.GREGORY ? S.GREGORY : S.ISO_8601, r = vt(e, t), n = O(e) + 1, i, o;
  do
    i = new Date(n, 0, a === S.ISO_8601 ? 4 : 1), o = vt(i, t), n -= 1;
  while (e < o);
  return Math.round((r.getTime() - o.getTime()) / (864e5 * 7)) + 1;
}
function Z(e, t) {
  switch (e) {
    case "century":
      return ce(t);
    case "decade":
      return J(t);
    case "year":
      return se(t);
    case "month":
      return ee(t);
    case "day":
      return xe(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function on(e, t) {
  switch (e) {
    case "century":
      return Aa(t);
    case "decade":
      return yr(t);
    case "year":
      return br(t);
    case "month":
      return Or(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Sr(e, t) {
  switch (e) {
    case "century":
      return mr(t);
    case "decade":
      return Nt(t);
    case "year":
      return kt(t);
    case "month":
      return Tt(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function un(e, t) {
  switch (e) {
    case "decade":
      return yr(t, -100);
    case "year":
      return br(t, -10);
    case "month":
      return Or(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ln(e, t) {
  switch (e) {
    case "decade":
      return Nt(t, 100);
    case "year":
      return kt(t, 10);
    case "month":
      return Tt(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function jr(e, t) {
  switch (e) {
    case "century":
      return jt(t);
    case "decade":
      return Ye(t);
    case "year":
      return Re(t);
    case "month":
      return Oe(t);
    case "day":
      return Ct(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function cn(e, t) {
  switch (e) {
    case "century":
      return Ea(t);
    case "decade":
      return gr(t);
    case "year":
      return Dr(t);
    case "month":
      return xr(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function sn(e, t) {
  switch (e) {
    case "decade":
      return gr(t, -100);
    case "year":
      return Dr(t, -10);
    case "month":
      return xr(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Zt(e, t) {
  switch (e) {
    case "century":
      return hr(t);
    case "decade":
      return wr(t);
    case "year":
      return La(t);
    case "month":
      return Ma(t);
    case "day":
      return Ya(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function fn(e, t, a) {
  var r = [t, a].sort(function(n, i) {
    return n.getTime() - i.getTime();
  });
  return [Z(e, r[0]), jr(e, r[1])];
}
function Nr(e, t, a) {
  return t === void 0 && (t = Ve), a.map(function(r) {
    return t(e, r);
  }).join(" – ");
}
function vn(e, t, a) {
  return Nr(e, t, hr(a));
}
function kr(e, t, a) {
  return Nr(e, t, wr(a));
}
function dn(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function Pr(e, t) {
  t === void 0 && (t = S.ISO_8601);
  var a = e.getDay();
  switch (t) {
    case S.ISLAMIC:
    case S.HEBREW:
      return a === tn || a === Xt;
    case S.ISO_8601:
    case S.GREGORY:
      return a === Xt || a === en;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var B = "react-calendar__navigation";
function mn(e) {
  var t = e.activeStartDate, a = e.drillUp, r = e.formatMonthYear, n = r === void 0 ? _r : r, i = e.formatYear, o = i === void 0 ? Ve : i, u = e.locale, c = e.maxDate, l = e.minDate, s = e.navigationAriaLabel, v = s === void 0 ? "" : s, d = e.navigationAriaLive, m = e.navigationLabel, w = e.next2AriaLabel, h = w === void 0 ? "" : w, g = e.next2Label, b = g === void 0 ? "»" : g, A = e.nextAriaLabel, Q = A === void 0 ? "" : A, E = e.nextLabel, $ = E === void 0 ? "›" : E, W = e.prev2AriaLabel, re = W === void 0 ? "" : W, L = e.prev2Label, Y = L === void 0 ? "«" : L, N = e.prevAriaLabel, ae = N === void 0 ? "" : N, D = e.prevLabel, M = D === void 0 ? "‹" : D, ne = e.setActiveStartDate, Ge = e.showDoubleView, I = e.view, Be = e.views, Ue = Be.indexOf(I) > 0, H = I !== "century", k = on(I, t), q = H ? un(I, t) : void 0, ie = Sr(I, t), fe = H ? ln(I, t) : void 0, pe = function() {
    if (k.getFullYear() < 0)
      return !0;
    var j = cn(I, t);
    return l && l >= j;
  }(), He = H && function() {
    if (q.getFullYear() < 0)
      return !0;
    var j = sn(I, t);
    return l && l >= j;
  }(), _e = c && c < ie, ve = H && c && c < fe;
  function de() {
    ne(k, "prev");
  }
  function z() {
    ne(q, "prev2");
  }
  function qe() {
    ne(ie, "next");
  }
  function ze() {
    ne(fe, "next2");
  }
  function Se(j) {
    var me = function() {
      switch (I) {
        case "century":
          return vn(u, o, j);
        case "decade":
          return kr(u, o, j);
        case "year":
          return o(u, j);
        case "month":
          return n(u, j);
        default:
          throw new Error("Invalid view: ".concat(I, "."));
      }
    }();
    return m ? m({
      date: j,
      label: me,
      locale: u || dr() || void 0,
      view: I
    }) : me;
  }
  function Ke() {
    var j = "".concat(B, "__label");
    return f.jsxs("button", { "aria-label": v, "aria-live": d, className: j, disabled: !Ue, onClick: a, style: { flexGrow: 1 }, type: "button", children: [f.jsx("span", { className: "".concat(j, "__labelText ").concat(j, "__labelText--from"), children: Se(t) }), Ge ? f.jsxs(f.Fragment, { children: [f.jsx("span", { className: "".concat(j, "__divider"), children: " – " }), f.jsx("span", { className: "".concat(j, "__labelText ").concat(j, "__labelText--to"), children: Se(ie) })] }) : null] });
  }
  return f.jsxs("div", { className: B, children: [Y !== null && H ? f.jsx("button", { "aria-label": re, className: "".concat(B, "__arrow ").concat(B, "__prev2-button"), disabled: He, onClick: z, type: "button", children: Y }) : null, M !== null && f.jsx("button", { "aria-label": ae, className: "".concat(B, "__arrow ").concat(B, "__prev-button"), disabled: pe, onClick: de, type: "button", children: M }), Ke(), $ !== null && f.jsx("button", { "aria-label": Q, className: "".concat(B, "__arrow ").concat(B, "__next-button"), disabled: _e, onClick: qe, type: "button", children: $ }), b !== null && H ? f.jsx("button", { "aria-label": h, className: "".concat(B, "__arrow ").concat(B, "__next2-button"), disabled: ve, onClick: ze, type: "button", children: b }) : null] });
}
var ue = function() {
  return ue = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ue.apply(this, arguments);
}, hn = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function er(e) {
  return "".concat(e, "%");
}
function Et(e) {
  var t = e.children, a = e.className, r = e.count, n = e.direction, i = e.offset, o = e.style, u = e.wrap, c = hn(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return f.jsx("div", ue({ className: a, style: ue({ display: "flex", flexDirection: n, flexWrap: u ? "wrap" : "nowrap" }, o) }, c, { children: ta.map(t, function(l, s) {
    var v = i && s === 0 ? er(100 * i / r) : null;
    return ra(l, ue(ue({}, l.props), { style: {
      flexBasis: er(100 / r),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }) }));
}
function yn(e, t, a) {
  return t && t > e ? t : a && a < e ? a : e;
}
function we(e, t) {
  return t[0] <= e && t[1] >= e;
}
function gn(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function Tr(e, t) {
  return we(e[0], t) || we(e[1], t);
}
function tr(e, t, a) {
  var r = Tr(t, e), n = [];
  if (r) {
    n.push(a);
    var i = we(e[0], t), o = we(e[1], t);
    i && n.push("".concat(a, "Start")), o && n.push("".concat(a, "End")), i && o && n.push("".concat(a, "BothEnds"));
  }
  return n;
}
function wn(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function bn(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, a = e.date, r = e.hover, n = "react-calendar__tile", i = [n];
  if (!a)
    return i;
  var o = /* @__PURE__ */ new Date(), u = function() {
    if (Array.isArray(a))
      return a;
    var m = e.dateType;
    if (!m)
      throw new Error("dateType is required when date is not an array of two dates");
    return Zt(m, a);
  }();
  if (we(o, u) && i.push("".concat(n, "--now")), !t || !wn(t))
    return i;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var m = e.valueType;
    if (!m)
      throw new Error("valueType is required when value is not an array of two dates");
    return Zt(m, t);
  }();
  gn(c, u) ? i.push("".concat(n, "--active")) : Tr(c, u) && i.push("".concat(n, "--hasActive"));
  var l = tr(c, u, "".concat(n, "--range"));
  i.push.apply(i, l);
  var s = Array.isArray(t) ? t : [t];
  if (r && s.length === 1) {
    var v = r > c[0] ? [c[0], r] : [r, c[0]], d = tr(v, u, "".concat(n, "--hover"));
    i.push.apply(i, d);
  }
  return i;
}
function Fe(e) {
  for (var t = e.className, a = e.count, r = a === void 0 ? 3 : a, n = e.dateTransform, i = e.dateType, o = e.end, u = e.hover, c = e.offset, l = e.renderTile, s = e.start, v = e.step, d = v === void 0 ? 1 : v, m = e.value, w = e.valueType, h = [], g = s; g <= o; g += d) {
    var b = n(g);
    h.push(l({
      classes: bn({
        date: b,
        dateType: i,
        hover: u,
        value: m,
        valueType: w
      }),
      date: b
    }));
  }
  return f.jsx(Et, { className: t, count: r, offset: c, wrap: !0, children: h });
}
function $e(e) {
  var t = e.activeStartDate, a = e.children, r = e.classes, n = e.date, i = e.formatAbbr, o = e.locale, u = e.maxDate, c = e.maxDateTransform, l = e.minDate, s = e.minDateTransform, v = e.onClick, d = e.onMouseOver, m = e.style, w = e.tileClassName, h = e.tileContent, g = e.tileDisabled, b = e.view, A = Jt(function() {
    var E = { activeStartDate: t, date: n, view: b };
    return typeof w == "function" ? w(E) : w;
  }, [t, n, w, b]), Q = Jt(function() {
    var E = { activeStartDate: t, date: n, view: b };
    return typeof h == "function" ? h(E) : h;
  }, [t, n, h, b]);
  return f.jsxs("button", { className: X(r, A), disabled: l && s(l) > n || u && c(u) < n || g && g({ activeStartDate: t, date: n, view: b }), onClick: v ? function(E) {
    return v(n, E);
  } : void 0, onFocus: d ? function() {
    return d(n);
  } : void 0, onMouseOver: d ? function() {
    return d(n);
  } : void 0, style: m, type: "button", children: [i ? f.jsx("abbr", { "aria-label": i(o, n), children: a }) : a, Q] });
}
var dt = function() {
  return dt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, dt.apply(this, arguments);
}, Dn = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, rr = "react-calendar__century-view__decades__decade";
function On(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.currentCentury, n = e.formatYear, i = n === void 0 ? Ve : n, o = Dn(e, ["classes", "currentCentury", "formatYear"]), u = o.date, c = o.locale, l = [];
  return a && l.push.apply(l, a), l.push(rr), ce(u).getFullYear() !== r && l.push("".concat(rr, "--neighboringCentury")), f.jsx($e, dt({}, o, { classes: l, maxDateTransform: Ye, minDateTransform: J, view: "century", children: kr(c, i, u) }));
}
var mt = function() {
  return mt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, mt.apply(this, arguments);
}, ar = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function xn(e) {
  var t = e.activeStartDate, a = e.hover, r = e.showNeighboringCentury, n = e.value, i = e.valueType, o = ar(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), u = rn(t), c = u + (r ? 119 : 99);
  return f.jsx(Fe, { className: "react-calendar__century-view__decades", dateTransform: J, dateType: "decade", end: c, hover: a, renderTile: function(l) {
    var s = l.date, v = ar(l, ["date"]);
    return f.jsx(On, mt({}, o, v, { activeStartDate: t, currentCentury: u, date: s }), s.getTime());
  }, start: u, step: 10, value: n, valueType: i });
}
var ht = function() {
  return ht = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ht.apply(this, arguments);
};
function pn(e) {
  function t() {
    return f.jsx(xn, ht({}, e));
  }
  return f.jsx("div", { className: "react-calendar__century-view", children: t() });
}
var yt = function() {
  return yt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, yt.apply(this, arguments);
}, _n = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, nr = "react-calendar__decade-view__years__year";
function Sn(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.currentDecade, n = e.formatYear, i = n === void 0 ? Ve : n, o = _n(e, ["classes", "currentDecade", "formatYear"]), u = o.date, c = o.locale, l = [];
  return a && l.push.apply(l, a), l.push(nr), J(u).getFullYear() !== r && l.push("".concat(nr, "--neighboringDecade")), f.jsx($e, yt({}, o, { classes: l, maxDateTransform: Re, minDateTransform: se, view: "decade", children: i(c, u) }));
}
var gt = function() {
  return gt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, gt.apply(this, arguments);
}, ir = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function jn(e) {
  var t = e.activeStartDate, a = e.hover, r = e.showNeighboringDecade, n = e.value, i = e.valueType, o = ir(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), u = an(t), c = u + (r ? 11 : 9);
  return f.jsx(Fe, { className: "react-calendar__decade-view__years", dateTransform: se, dateType: "year", end: c, hover: a, renderTile: function(l) {
    var s = l.date, v = ir(l, ["date"]);
    return f.jsx(Sn, gt({}, o, v, { activeStartDate: t, currentDecade: u, date: s }), s.getTime());
  }, start: u, value: n, valueType: i });
}
var wt = function() {
  return wt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, wt.apply(this, arguments);
};
function Nn(e) {
  function t() {
    return f.jsx(jn, wt({}, e));
  }
  return f.jsx("div", { className: "react-calendar__decade-view", children: t() });
}
var bt = function() {
  return bt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, bt.apply(this, arguments);
}, kn = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, or = function(e, t, a) {
  if (a || arguments.length === 2) for (var r = 0, n = t.length, i; r < n; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Pn = "react-calendar__year-view__months__month";
function Tn(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.formatMonth, n = r === void 0 ? Qa : r, i = e.formatMonthYear, o = i === void 0 ? _r : i, u = kn(e, ["classes", "formatMonth", "formatMonthYear"]), c = u.date, l = u.locale;
  return f.jsx($e, bt({}, u, { classes: or(or([], a, !0), [Pn], !1), formatAbbr: o, maxDateTransform: Oe, minDateTransform: ee, view: "year", children: n(l, c) }));
}
var Dt = function() {
  return Dt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Dt.apply(this, arguments);
}, ur = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Cn(e) {
  var t = e.activeStartDate, a = e.hover, r = e.value, n = e.valueType, i = ur(e, ["activeStartDate", "hover", "value", "valueType"]), o = 0, u = 11, c = O(t);
  return f.jsx(Fe, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var s = /* @__PURE__ */ new Date();
    return s.setFullYear(c, l, 1), ee(s);
  }, dateType: "month", end: u, hover: a, renderTile: function(l) {
    var s = l.date, v = ur(l, ["date"]);
    return f.jsx(Tn, Dt({}, i, v, { activeStartDate: t, date: s }), s.getTime());
  }, start: o, value: r, valueType: n });
}
var Ot = function() {
  return Ot = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ot.apply(this, arguments);
};
function An(e) {
  function t() {
    return f.jsx(Cn, Ot({}, e));
  }
  return f.jsx("div", { className: "react-calendar__year-view", children: t() });
}
var xt = function() {
  return xt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, xt.apply(this, arguments);
}, En = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, ut = "react-calendar__month-view__days__day";
function Ln(e) {
  var t = e.calendarType, a = e.classes, r = a === void 0 ? [] : a, n = e.currentMonthIndex, i = e.formatDay, o = i === void 0 ? Ka : i, u = e.formatLongDate, c = u === void 0 ? Ja : u, l = En(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), s = l.date, v = l.locale, d = [];
  return r && d.push.apply(d, r), d.push(ut), Pr(s, t) && d.push("".concat(ut, "--weekend")), s.getMonth() !== n && d.push("".concat(ut, "--neighboringMonth")), f.jsx($e, xt({}, l, { classes: d, formatAbbr: c, maxDateTransform: Ct, minDateTransform: xe, view: "month", children: o(v, s) }));
}
var pt = function() {
  return pt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, pt.apply(this, arguments);
}, lr = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Mn(e) {
  var t = e.activeStartDate, a = e.calendarType, r = e.hover, n = e.showFixedNumberOfWeeks, i = e.showNeighboringMonth, o = e.value, u = e.valueType, c = lr(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = O(t), s = K(t), v = n || i, d = ge(t, a), m = v ? 0 : d, w = (v ? -d : 0) + 1, h = function() {
    if (n)
      return w + 6 * 7 - 1;
    var g = pr(t);
    if (i) {
      var b = /* @__PURE__ */ new Date();
      b.setFullYear(l, s, g), b.setHours(0, 0, 0, 0);
      var A = 7 - ge(b, a) - 1;
      return g + A;
    }
    return g;
  }();
  return f.jsx(Fe, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(g) {
    var b = /* @__PURE__ */ new Date();
    return b.setFullYear(l, s, g), xe(b);
  }, dateType: "day", hover: r, end: h, renderTile: function(g) {
    var b = g.date, A = lr(g, ["date"]);
    return f.jsx(Ln, pt({}, c, A, { activeStartDate: t, calendarType: a, currentMonthIndex: s, date: b }), b.getTime());
  }, offset: m, start: w, value: o, valueType: u });
}
var Cr = "react-calendar__month-view__weekdays", lt = "".concat(Cr, "__weekday");
function In(e) {
  for (var t = e.calendarType, a = e.formatShortWeekday, r = a === void 0 ? Xa : a, n = e.formatWeekday, i = n === void 0 ? Za : n, o = e.locale, u = e.onMouseLeave, c = /* @__PURE__ */ new Date(), l = ee(c), s = O(l), v = K(l), d = [], m = 1; m <= 7; m += 1) {
    var w = new Date(s, v, m - ge(l, t)), h = i(o, w);
    d.push(f.jsx("div", { className: X(lt, dn(w) && "".concat(lt, "--current"), Pr(w, t) && "".concat(lt, "--weekend")), children: f.jsx("abbr", { "aria-label": h, title: h, children: r(o, w).replace(".", "") }) }, m));
  }
  return f.jsx(Et, { className: Cr, count: 7, onFocus: u, onMouseOver: u, children: d });
}
var Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ie.apply(this, arguments);
}, cr = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, sr = "react-calendar__tile";
function Wn(e) {
  var t = e.onClickWeekNumber, a = e.weekNumber, r = f.jsx("span", { children: a });
  if (t) {
    var n = e.date, i = e.onClickWeekNumber, o = e.weekNumber, u = cr(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return f.jsx("button", Ie({}, u, { className: sr, onClick: function(c) {
      return i(o, n, c);
    }, type: "button", children: r }));
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var u = cr(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return f.jsx("div", Ie({}, u, { className: sr, children: r }));
  }
}
function Yn(e) {
  var t = e.activeStartDate, a = e.calendarType, r = e.onClickWeekNumber, n = e.onMouseLeave, i = e.showFixedNumberOfWeeks, o = function() {
    if (i)
      return 6;
    var l = pr(t), s = ge(t, a), v = l - (7 - s);
    return 1 + Math.ceil(v / 7);
  }(), u = function() {
    for (var l = O(t), s = K(t), v = We(t), d = [], m = 0; m < o; m += 1)
      d.push(vt(new Date(l, s, v + m * 7), a));
    return d;
  }(), c = u.map(function(l) {
    return nn(l, a);
  });
  return f.jsx(Et, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 }, children: c.map(function(l, s) {
    var v = u[s];
    if (!v)
      throw new Error("date is not defined");
    return f.jsx(Wn, { date: v, onClickWeekNumber: r, weekNumber: l }, l);
  }) });
}
var _t = function() {
  return _t = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, _t.apply(this, arguments);
}, Rn = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Vn(e) {
  if (e)
    for (var t = 0, a = Object.entries(Ra); t < a.length; t++) {
      var r = a[t], n = r[0], i = r[1];
      if (i.includes(e))
        return n;
    }
  return S.ISO_8601;
}
function Fn(e) {
  var t = e.activeStartDate, a = e.locale, r = e.onMouseLeave, n = e.showFixedNumberOfWeeks, i = e.calendarType, o = i === void 0 ? Vn(a) : i, u = e.formatShortWeekday, c = e.formatWeekday, l = e.onClickWeekNumber, s = e.showWeekNumbers, v = Rn(e, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function d() {
    return f.jsx(In, { calendarType: o, formatShortWeekday: u, formatWeekday: c, locale: a, onMouseLeave: r });
  }
  function m() {
    return s ? f.jsx(Yn, { activeStartDate: t, calendarType: o, onClickWeekNumber: l, onMouseLeave: r, showFixedNumberOfWeeks: n }) : null;
  }
  function w() {
    return f.jsx(Mn, _t({ calendarType: o }, v));
  }
  var h = "react-calendar__month-view";
  return f.jsx("div", { className: X(h, s ? "".concat(h, "--weekNumbers") : ""), children: f.jsxs("div", { style: {
    display: "flex",
    alignItems: "flex-end"
  }, children: [m(), f.jsxs("div", { style: {
    flexGrow: 1,
    width: "100%"
  }, children: [d(), w()] })] }) });
}
var le = function() {
  return le = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, le.apply(this, arguments);
}, Ae = "react-calendar", Le = ["century", "decade", "year", "month"], $n = ["decade", "year", "month", "day"], Lt = /* @__PURE__ */ new Date();
Lt.setFullYear(1, 0, 1);
Lt.setHours(0, 0, 0, 0);
var Gn = /* @__PURE__ */ new Date(864e13);
function ye(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ar(e, t) {
  return Le.slice(Le.indexOf(e), Le.indexOf(t) + 1);
}
function Bn(e, t, a) {
  var r = Ar(t, a);
  return r.indexOf(e) !== -1;
}
function Mt(e, t, a) {
  return e && Bn(e, t, a) ? e : a;
}
function Er(e) {
  var t = Le.indexOf(e);
  return $n[t];
}
function Un(e, t) {
  var a = Array.isArray(e) ? e[t] : e;
  if (!a)
    return null;
  var r = ye(a);
  if (isNaN(r.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return r;
}
function Lr(e, t) {
  var a = e.value, r = e.minDate, n = e.maxDate, i = e.maxDetail, o = Un(a, t);
  if (!o)
    return null;
  var u = Er(i), c = function() {
    switch (t) {
      case 0:
        return Z(u, o);
      case 1:
        return jr(u, o);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return yn(c, r, n);
}
var It = function(e) {
  return Lr(e, 0);
}, Mr = function(e) {
  return Lr(e, 1);
}, Hn = function(e) {
  return [It, Mr].map(function(t) {
    return t(e);
  });
};
function Ir(e) {
  var t = e.maxDate, a = e.maxDetail, r = e.minDate, n = e.minDetail, i = e.value, o = e.view, u = Mt(o, n, a), c = It({
    value: i,
    minDate: r,
    maxDate: t,
    maxDetail: a
  }) || /* @__PURE__ */ new Date();
  return Z(u, c);
}
function qn(e) {
  var t = e.activeStartDate, a = e.defaultActiveStartDate, r = e.defaultValue, n = e.defaultView, i = e.maxDate, o = e.maxDetail, u = e.minDate, c = e.minDetail, l = e.value, s = e.view, v = Mt(s, c, o), d = t || a;
  return d ? Z(v, d) : Ir({
    maxDate: i,
    maxDetail: o,
    minDate: u,
    minDetail: c,
    value: l || r,
    view: s || n
  });
}
function ct(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function Ee(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var zn = St(function(t, a) {
  var r = t.activeStartDate, n = t.allowPartialRange, i = t.calendarType, o = t.className, u = t.defaultActiveStartDate, c = t.defaultValue, l = t.defaultView, s = t.formatDay, v = t.formatLongDate, d = t.formatMonth, m = t.formatMonthYear, w = t.formatShortWeekday, h = t.formatWeekday, g = t.formatYear, b = t.goToRangeStartOnSelect, A = b === void 0 ? !0 : b, Q = t.inputRef, E = t.locale, $ = t.maxDate, W = $ === void 0 ? Gn : $, re = t.maxDetail, L = re === void 0 ? "month" : re, Y = t.minDate, N = Y === void 0 ? Lt : Y, ae = t.minDetail, D = ae === void 0 ? "century" : ae, M = t.navigationAriaLabel, ne = t.navigationAriaLive, Ge = t.navigationLabel, I = t.next2AriaLabel, Be = t.next2Label, Ue = t.nextAriaLabel, H = t.nextLabel, k = t.onActiveStartDateChange, q = t.onChange, ie = t.onClickDay, fe = t.onClickDecade, pe = t.onClickMonth, He = t.onClickWeekNumber, _e = t.onClickYear, ve = t.onDrillDown, de = t.onDrillUp, z = t.onViewChange, qe = t.prev2AriaLabel, ze = t.prev2Label, Se = t.prevAriaLabel, Ke = t.prevLabel, j = t.returnValue, me = j === void 0 ? "start" : j, R = t.selectRange, je = t.showDoubleView, Wt = t.showFixedNumberOfWeeks, Yt = t.showNavigation, Wr = Yt === void 0 ? !0 : Yt, Yr = t.showNeighboringCentury, Rr = t.showNeighboringDecade, Rt = t.showNeighboringMonth, Vr = Rt === void 0 ? !0 : Rt, Fr = t.showWeekNumbers, $r = t.tileClassName, Gr = t.tileContent, Br = t.tileDisabled, Je = t.value, Vt = t.view, Ft = Te(u), Ur = Ft[0], Ne = Ft[1], $t = Te(null), Hr = $t[0], Gt = $t[1], Bt = Te(Array.isArray(c) ? c.map(function(y) {
    return y !== null ? ye(y) : null;
  }) : c != null ? ye(c) : null), Qe = Bt[0], qr = Bt[1], Ut = Te(l), zr = Ut[0], Ht = Ut[1], P = r || Ur || qn({
    activeStartDate: r,
    defaultActiveStartDate: u,
    defaultValue: c,
    defaultView: l,
    maxDate: W,
    maxDetail: L,
    minDate: N,
    minDetail: D,
    value: Je,
    view: Vt
  }), T = function() {
    var y = function() {
      return R && ct(Qe) ? Qe : Je !== void 0 ? Je : Qe;
    }();
    return y ? Array.isArray(y) ? y.map(function(p) {
      return p !== null ? ye(p) : null;
    }) : y !== null ? ye(y) : null : null;
  }(), ke = Er(L), x = Mt(Vt || zr, D, L), G = Ar(D, L), Kr = R ? Hr : null, Xe = G.indexOf(x) < G.length - 1, qt = G.indexOf(x) > 0, zt = oe(function(y) {
    var p = function() {
      switch (me) {
        case "start":
          return It;
        case "end":
          return Mr;
        case "range":
          return Hn;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return p({
      maxDate: W,
      maxDetail: L,
      minDate: N,
      value: y
    });
  }, [W, L, N, me]), Ze = oe(function(y, p) {
    Ne(y);
    var _ = {
      action: p,
      activeStartDate: y,
      value: T,
      view: x
    };
    k && !Ee(P, y) && k(_);
  }, [P, k, T, x]), Pe = oe(function(y, p) {
    var _ = function() {
      switch (x) {
        case "century":
          return fe;
        case "decade":
          return _e;
        case "year":
          return pe;
        case "month":
          return ie;
        default:
          throw new Error("Invalid view: ".concat(x, "."));
      }
    }();
    _ && _(y, p);
  }, [ie, fe, pe, _e, x]), et = oe(function(y, p) {
    if (Xe) {
      Pe(y, p);
      var _ = G[G.indexOf(x) + 1];
      if (!_)
        throw new Error("Attempted to drill down from the lowest view.");
      Ne(y), Ht(_);
      var V = {
        action: "drillDown",
        activeStartDate: y,
        value: T,
        view: _
      };
      k && !Ee(P, y) && k(V), z && x !== _ && z(V), ve && ve(V);
    }
  }, [
    P,
    Xe,
    k,
    Pe,
    ve,
    z,
    T,
    x,
    G
  ]), tt = oe(function() {
    if (qt) {
      var y = G[G.indexOf(x) - 1];
      if (!y)
        throw new Error("Attempted to drill up from the highest view.");
      var p = Z(y, P);
      Ne(p), Ht(y);
      var _ = {
        action: "drillUp",
        activeStartDate: p,
        value: T,
        view: y
      };
      k && !Ee(P, p) && k(_), z && x !== y && z(_), de && de(_);
    }
  }, [
    P,
    qt,
    k,
    de,
    z,
    T,
    x,
    G
  ]), rt = oe(function(y, p) {
    var _ = T;
    Pe(y, p);
    var V = R && !ct(_), F;
    if (R)
      if (V)
        F = Z(ke, y);
      else {
        if (!_)
          throw new Error("previousValue is required");
        if (Array.isArray(_))
          throw new Error("previousValue must not be an array");
        F = fn(ke, _, y);
      }
    else
      F = zt(y);
    var nt = (
      // Range selection turned off
      !R || // Range selection turned on, first value
      V || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      A ? Ir({
        maxDate: W,
        maxDetail: L,
        minDate: N,
        minDetail: D,
        value: F,
        view: x
      }) : null
    );
    p.persist(), Ne(nt), qr(F);
    var Zr = {
      action: "onChange",
      activeStartDate: nt,
      value: F,
      view: x
    };
    if (k && !Ee(P, nt) && k(Zr), q)
      if (R) {
        var ea = ct(F);
        if (!ea)
          q(F || null, p);
        else if (n) {
          if (Array.isArray(F))
            throw new Error("value must not be an array");
          q([F || null, null], p);
        }
      } else
        q(F || null, p);
  }, [
    P,
    n,
    zt,
    A,
    W,
    L,
    N,
    D,
    k,
    q,
    Pe,
    R,
    T,
    ke,
    x
  ]);
  function Jr(y) {
    Gt(y);
  }
  function at() {
    Gt(null);
  }
  aa(a, function() {
    return {
      activeStartDate: P,
      drillDown: et,
      drillUp: tt,
      onChange: rt,
      setActiveStartDate: Ze,
      value: T,
      view: x
    };
  }, [P, et, tt, rt, Ze, T, x]);
  function Kt(y) {
    var p = y ? Sr(x, P) : Z(x, P), _ = Xe ? et : rt, V = {
      activeStartDate: p,
      hover: Kr,
      locale: E,
      maxDate: W,
      minDate: N,
      onClick: _,
      onMouseOver: R ? Jr : void 0,
      tileClassName: $r,
      tileContent: Gr,
      tileDisabled: Br,
      value: T,
      valueType: ke
    };
    switch (x) {
      case "century":
        return f.jsx(pn, le({ formatYear: g, showNeighboringCentury: Yr }, V));
      case "decade":
        return f.jsx(Nn, le({ formatYear: g, showNeighboringDecade: Rr }, V));
      case "year":
        return f.jsx(An, le({ formatMonth: d, formatMonthYear: m }, V));
      case "month":
        return f.jsx(Fn, le({ calendarType: i, formatDay: s, formatLongDate: v, formatShortWeekday: w, formatWeekday: h, onClickWeekNumber: He, onMouseLeave: R ? at : void 0, showFixedNumberOfWeeks: typeof Wt < "u" ? Wt : je, showNeighboringMonth: Vr, showWeekNumbers: Fr }, V));
      default:
        throw new Error("Invalid view: ".concat(x, "."));
    }
  }
  function Qr() {
    return Wr ? f.jsx(mn, { activeStartDate: P, drillUp: tt, formatMonthYear: m, formatYear: g, locale: E, maxDate: W, minDate: N, navigationAriaLabel: M, navigationAriaLive: ne, navigationLabel: Ge, next2AriaLabel: I, next2Label: Be, nextAriaLabel: Ue, nextLabel: H, prev2AriaLabel: qe, prev2Label: ze, prevAriaLabel: Se, prevLabel: Ke, setActiveStartDate: Ze, showDoubleView: je, view: x, views: G }) : null;
  }
  var Xr = Array.isArray(T) ? T : [T];
  return f.jsxs("div", { className: X(Ae, R && Xr.length === 1 && "".concat(Ae, "--selectRange"), je && "".concat(Ae, "--doubleView"), o), ref: Q, children: [Qr(), f.jsxs("div", { className: "".concat(Ae, "__viewContainer"), onBlur: R ? at : void 0, onMouseLeave: R ? at : void 0, children: [Kt(), je ? Kt(!0) : null] })] });
});
const ni = ({
  startDate: e,
  allowPartialRange: t = !1,
  calendarType: a,
  className: r,
  defaultValue: n,
  hasFixedWidth: i = !0,
  formatMonthYear: o = (Y, N) => new Date(N).toLocaleString(Y || navigator.languages, {
    month: "short",
    year: "numeric"
  }),
  goToRangeStartOnSelect: u = !0,
  locale: c,
  navigationLabel: l = ({ label: Y }) => /* @__PURE__ */ f.jsx(oa, { as: "span", children: Y }),
  next2Label: s = null,
  nextLabel: v = /* @__PURE__ */ f.jsx(ca, { fill: "var(--component-textIcon-normal-prominent)" }),
  onChange: d,
  onFormattedDate: m,
  prev2Label: w = null,
  prevLabel: h = /* @__PURE__ */ f.jsx(fa, { fill: "var(--component-textIcon-normal-prominent)" }),
  returnValue: g = "start",
  selectRange: b = !1,
  showNavigation: A = !0,
  showNeighboringMonth: Q = !1,
  tileClassName: E,
  value: $,
  wrapperClassName: W,
  disableCurrentDayMarker: re = !1,
  ...L
}) => {
  const Y = (D) => ua(D).format("DD/MM/YYYY"), N = (D) => D ? Array.isArray(D) ? D.map((M) => M ? Y(M) : "").join(" - ") : Y(D) : "";
  na(() => {
    $ && (m == null || m(N($))), n && (m == null || m(N(n)));
  }, [$, n]);
  const ae = (D) => {
    const M = /* @__PURE__ */ new Date();
    return D.getDate() === M.getDate() && D.getMonth() === M.getMonth() && D.getFullYear() === M.getFullYear();
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: X(
        "quill-date-picker__wrapper",
        { "quill-date-picker__wrapper--fixed-width": i },
        W
      ),
      "data-testid": "atom-calendar",
      children: /* @__PURE__ */ f.jsx(
        zn,
        {
          ...L,
          activeStartDate: e,
          allowPartialRange: t,
          calendarType: a,
          className: X("quill-date-picker", r),
          defaultValue: n,
          formatMonthYear: o,
          goToRangeStartOnSelect: u,
          locale: c,
          navigationLabel: l,
          next2Label: s,
          nextLabel: v,
          onChange: (D, M) => {
            d == null || d(D, M), m == null || m(N(D));
          },
          prev2Label: w,
          prevLabel: h,
          returnValue: g,
          selectRange: b,
          showNavigation: A,
          showNeighboringMonth: Q,
          tileClassName: ({ date: D }) => X(E, {
            "no-current-day-marker": re && ae(D)
          }),
          value: $
        }
      )
    }
  );
};
export {
  ni as DatePicker,
  ni as default
};
