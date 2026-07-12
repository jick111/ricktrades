import { j as b } from "../../../jsx-runtime-DmTjM30f.js";
import { c as T } from "../../../clsx-OuTLNxxd.js";
import * as we from "react";
import W, { forwardRef as Ne, useRef as Y, useState as be, useEffect as fe, useMemo as Ae, useLayoutEffect as Ee } from "react";
import "../../Typography/base.js";
import "../../Typography/heading/index.js";
import { Text as Ve } from "../../Typography/text/index.js";
import "../../../index-C1BOoRZp.js";
import '../../../assets/wheel-picker-base.css';import '../../../assets/date-picker.css';import '../../../assets/divider.css';import '../../../assets/index19.css';/* empty css                        */
import "../../Atom/dropdown/title/index.js";
import "../../Atom/dropdown/item-container/index.js";
/* empty css                            */
import "../../../dayjs.min-DrYbymKu.js";
import { PasswordStrengthValidation as Fe } from "../../Atom/PasswordValidation/index.js";
/* empty css                                  */
import { getFormatValue as Re } from "../../../utils/common-utils.js";
import "../../../lodash-rsqVyylH.js";
import { useUniqueId as Be } from "../../../hooks/useUniqueId.js";
import { customHandlers as Oe } from "./type-handlers.js";
import { s as Te } from "../../../index-CQbz1p6_.js";
import { F as ke } from "../../../LabelPairedChevronDownSmBoldIcon-Bh3n7B0E.js";
import { a as Me, F as qe } from "../../../StandaloneTriangleExclamationBoldIcon-DbjkWWdj.js";
const $e = ({ iconSize: e = "md", title: t, titleId: r, ...n }, a) => we.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Te[e], role: "img", ref: a, "aria-labelledby": r, ...n },
  t ? we.createElement("title", { id: r }, t) : null,
  we.createElement("path", { d: "M12.25 11.5V14h7.5v-2.5a3.751 3.751 0 0 0-7.5 0M11 14v-2.5c0-2.734 2.227-5 5-5 2.734 0 5 2.266 5 5V14h.625a3.134 3.134 0 0 1 3.125 3.125v6.25a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-6.25A3.11 3.11 0 0 1 10.375 14zm-2.5 3.125v6.25c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-6.25c0-1.016-.86-1.875-1.875-1.875h-11.25c-1.055 0-1.875.86-1.875 1.875" })
), De = Ne($e);
function Ce(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
var ce;
(function(e) {
  e.event = "event", e.props = "prop";
})(ce || (ce = {}));
function G() {
}
function Ke(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return t && n.length === t.length && n.every(function(o, c) {
      return o === t[c];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function ee(e) {
  return !!(e || "").match(/\d/);
}
function ve(e) {
  return e == null;
}
function Pe(e) {
  return typeof e == "number" && isNaN(e);
}
function Le(e) {
  return ve(e) || Pe(e) || typeof e == "number" && !isFinite(e);
}
function Ue(e) {
  var t = Y(e);
  t.current = e;
  var r = Y(function() {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Ie(e, t) {
  return Array(t + 1).join(e);
}
function ze(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), a = n[0], o = n[1];
  if (o = Number(o), !o)
    return r + a;
  a = a.replace(".", "");
  var c = 1 + o, m = a.length;
  return c < 0 ? a = "0." + Ie("0", Math.abs(c)) + a : c >= m ? a = a + Ie("0", c - m) : a = (a.substring(0, c) || "0") + "." + a.substring(c), r + a;
}
function Se(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var He = Ke(function(e, t) {
  for (var r = 0, n = 0, a = e.length, o = t.length; e[r] === t[r] && r < a; )
    r++;
  for (; e[a - 1 - n] === t[o - 1 - n] && o - n > r && a - n > r; )
    n++;
  return {
    from: { start: r, end: a - n },
    to: { start: r, end: o - n }
  };
}), We = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Ge(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function xe(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Je() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Qe(e) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: e.length
    },
    lastValue: ""
  };
}
function je(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Xe(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, a = e.formattedValueIndex;
  return t[n] === r[a];
}
function Ye(e, t, r, n, a, o, c) {
  c === void 0 && (c = Xe);
  var m = a.findIndex(function(N) {
    return N;
  }), d = e.slice(0, m);
  !t && !r.startsWith(d) && (t = d, r = d + r, n = n + d.length);
  for (var w = r.length, V = e.length, C = {}, v = new Array(w), h = 0; h < w; h++) {
    v[h] = -1;
    for (var l = 0, I = V; l < I; l++) {
      var _ = c({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: h,
        formattedValueIndex: l
      });
      if (_ && C[l] !== !0) {
        v[h] = l, C[l] = !0;
        break;
      }
    }
  }
  for (var f = n; f < w && (v[f] === -1 || !o(r[f])); )
    f++;
  var A = f === w || v[f] === -1 ? V : v[f];
  for (f = n - 1; f > 0 && v[f] === -1; )
    f--;
  var g = f === -1 || v[f] === -1 ? 0 : v[f] + 1;
  return g > A ? A : n - g < A - n ? g : A;
}
function me(e, t, r, n) {
  var a = e.length;
  if (t = Ge(t, 0, a), n === "left") {
    for (; t >= 0 && !r[t]; )
      t--;
    t === -1 && (t = r.indexOf(!0));
  } else {
    for (; t <= a && !r[t]; )
      t++;
    t > a && (t = r.lastIndexOf(!0));
  }
  return t === -1 && (t = a), t;
}
function Ze(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(ee(e[r]) || ee(e[r - 1]));
  return t;
}
function et(e, t, r, n, a, o) {
  o === void 0 && (o = G);
  var c = Ue(function(l, I) {
    var _, f;
    return Le(l) ? (f = "", _ = "") : typeof l == "number" || I ? (f = typeof l == "number" ? ze(l) : l, _ = n(f)) : (f = a(l, void 0), _ = n(f)), { formattedValue: _, numAsString: f };
  }), m = be(function() {
    return c(ve(e) ? t : e, r);
  }), d = m[0], w = m[1], V = function(l, I) {
    l.formattedValue !== d.formattedValue && w({
      formattedValue: l.formattedValue,
      numAsString: l.value
    }), o(l, I);
  }, C = e, v = r;
  ve(e) && (C = d.numAsString, v = !0);
  var h = c(C, v);
  return Ae(function() {
    w(h);
  }, [h.formattedValue]), [d, V];
}
function tt(e) {
  return e.replace(/[^0-9]/g, "");
}
function rt(e) {
  return e;
}
function nt(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, a = e.renderText, o = e.getInputRef, c = e.format;
  c === void 0 && (c = rt);
  var m = e.removeFormatting;
  m === void 0 && (m = tt);
  var d = e.defaultValue, w = e.valueIsNumericString, V = e.onValueChange, C = e.isAllowed, v = e.onChange;
  v === void 0 && (v = G);
  var h = e.onKeyDown;
  h === void 0 && (h = G);
  var l = e.onMouseUp;
  l === void 0 && (l = G);
  var I = e.onFocus;
  I === void 0 && (I = G);
  var _ = e.onBlur;
  _ === void 0 && (_ = G);
  var f = e.value, A = e.getCaretBoundary;
  A === void 0 && (A = Ze);
  var g = e.isValidInputCharacter;
  g === void 0 && (g = ee);
  var N = e.isCharacterSame, O = Ce(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), E = et(f, d, !!w, c, m, V), P = E[0], y = P.formattedValue, L = P.numAsString, de = E[1], M = Y(), J = Y({ formattedValue: y, numAsString: L }), te = function(i, u) {
    J.current = { formattedValue: i.formattedValue, numAsString: i.value }, de(i, u);
  }, re = be(!1), ne = re[0], ge = re[1], U = Y(null), B = Y({
    setCaretTimeout: null,
    focusTimeout: null
  });
  fe(function() {
    return ge(!0), function() {
      clearTimeout(B.current.setCaretTimeout), clearTimeout(B.current.focusTimeout);
    };
  }, []);
  var ae = c, Q = function(i, u) {
    var s = parseFloat(u);
    return {
      formattedValue: i,
      value: u,
      floatValue: isNaN(s) ? void 0 : s
    };
  }, q = function(i, u, s) {
    i.selectionStart === 0 && i.selectionEnd === i.value.length || (Se(i, u), B.current.setCaretTimeout = setTimeout(function() {
      i.value === s && i.selectionStart !== u && Se(i, u);
    }, 0));
  }, $ = function(i, u, s) {
    return me(i, u, A(i), s);
  }, X = function(i, u, s) {
    var x = A(u), F = Ye(u, y, i, s, x, g, N);
    return F = me(u, F, x), F;
  }, pe = function(i) {
    var u = i.formattedValue;
    u === void 0 && (u = "");
    var s = i.input, x = i.source, F = i.event, S = i.numAsString, p;
    if (s) {
      var k = i.inputValue || s.value, D = xe(s);
      s.value = u, p = X(k, u, D), p !== void 0 && q(s, p, u);
    }
    u !== y && te(Q(u, S), { event: F, source: x });
  };
  fe(function() {
    var i = J.current, u = i.formattedValue, s = i.numAsString;
    (y !== u || L !== s) && te(Q(y, L), {
      event: void 0,
      source: ce.props
    });
  }, [y, L]);
  var he = U.current ? xe(U.current) : void 0, ie = typeof window < "u" ? Ee : fe;
  ie(function() {
    var i = U.current;
    if (y !== J.current.formattedValue && i) {
      var u = X(J.current.formattedValue, y, he);
      i.value = y, q(i, u, y);
    }
  }, [y]);
  var z = function(i, u, s) {
    var x = u.target, F = M.current ? We(M.current, x.selectionEnd) : He(y, i), S = Object.assign(Object.assign({}, F), { lastValue: y }), p = m(i, S), k = ae(p);
    if (p = m(k, void 0), C && !C(Q(k, p))) {
      var D = u.target, K = xe(D), ye = X(i, y, K);
      return D.value = y, q(D, ye, y), !1;
    }
    return pe({
      formattedValue: k,
      numAsString: p,
      inputValue: i,
      event: u,
      source: s,
      input: u.target
    }), !0;
  }, H = function(i, u) {
    u === void 0 && (u = 0);
    var s = i.selectionStart, x = i.selectionEnd;
    M.current = { selectionStart: s, selectionEnd: x + u };
  }, ue = function(i) {
    var u = i.target, s = u.value, x = z(s, i, ce.event);
    x && v(i), M.current = void 0;
  }, oe = function(i) {
    var u = i.target, s = i.key, x = u.selectionStart, F = u.selectionEnd, S = u.value;
    S === void 0 && (S = "");
    var p;
    s === "ArrowLeft" || s === "Backspace" ? p = Math.max(x - 1, 0) : s === "ArrowRight" ? p = Math.min(x + 1, S.length) : s === "Delete" && (p = x);
    var k = 0;
    s === "Delete" && x === F && (k = 1);
    var D = s === "ArrowLeft" || s === "ArrowRight";
    if (p === void 0 || x !== F && !D) {
      h(i), H(u, k);
      return;
    }
    var K = p;
    if (D) {
      var ye = s === "ArrowLeft" ? "left" : "right";
      K = $(S, p, ye), K !== p && i.preventDefault();
    } else s === "Delete" && !g(S[p]) ? K = $(S, p, "right") : s === "Backspace" && !g(S[p]) && (K = $(S, p, "left"));
    K !== p && q(u, K, S), h(i), H(u, k);
  }, le = function(i) {
    var u = i.target, s = function() {
      var x = u.selectionStart, F = u.selectionEnd, S = u.value;
      if (S === void 0 && (S = ""), x === F) {
        var p = $(S, x);
        p !== x && q(u, p, S);
      }
    };
    s(), requestAnimationFrame(function() {
      s();
    }), l(i), H(u);
  }, se = function(i) {
    i.persist && i.persist();
    var u = i.target, s = i.currentTarget;
    U.current = u, B.current.focusTimeout = setTimeout(function() {
      var x = u.selectionStart, F = u.selectionEnd, S = u.value;
      S === void 0 && (S = "");
      var p = $(S, x);
      p !== x && !(x === 0 && F === S.length) && q(u, p, S), I(Object.assign(Object.assign({}, i), { currentTarget: s }));
    }, 0);
  }, _e = function(i) {
    U.current = null, clearTimeout(B.current.focusTimeout), clearTimeout(B.current.setCaretTimeout), _(i);
  }, R = ne && Je() ? "numeric" : void 0, j = Object.assign({ inputMode: R }, O, {
    type: t,
    value: y,
    onChange: ue,
    onKeyDown: oe,
    onMouseUp: le,
    onFocus: se,
    onBlur: _e
  });
  if (r === "text")
    return a ? W.createElement(W.Fragment, null, a(y, O) || null) : W.createElement("span", Object.assign({}, O, { ref: o }), y);
  if (n) {
    var Z = n;
    return W.createElement(Z, Object.assign({}, j, { ref: o }));
  }
  return W.createElement("input", Object.assign({}, j, { ref: o }));
}
function at(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, a = t.mask, o = t.patternChar;
  if (o === void 0 && (o = "#"), e === "" && !n)
    return "";
  for (var c = 0, m = r.split(""), d = 0, w = r.length; d < w; d++)
    r[d] === o && (m[d] = e[c] || je(a, c), c += 1);
  return m.join("");
}
function it(e, t, r) {
  t === void 0 && (t = Qe(e));
  var n = r.format, a = r.patternChar;
  a === void 0 && (a = "#");
  var o = t.from, c = t.to, m = t.lastValue;
  m === void 0 && (m = "");
  var d = function(_) {
    return n[_] === a;
  }, w = function(_, f) {
    for (var A = "", g = 0; g < _.length; g++)
      d(f + g) && ee(_[g]) && (A += _[g]);
    return A;
  }, V = function(_) {
    return _.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return V(e);
  if ((m === "" || o.end - o.start === m.length) && e.length === n.length) {
    for (var C = "", v = 0; v < e.length; v++)
      if (d(v))
        ee(e[v]) && (C += e[v]);
      else if (e[v] !== n[v])
        return V(e);
    return C;
  }
  var h = m.substring(0, o.start), l = e.substring(c.start, c.end), I = m.substring(o.end);
  return "" + w(h, 0) + V(l) + w(I, o.end);
}
function ut(e, t) {
  var r = t.format, n = t.mask, a = t.patternChar;
  a === void 0 && (a = "#");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), c = 0, m = -1, d = {};
  r.split("").forEach(function(v, h) {
    var l = void 0;
    v === a && (c++, l = je(n, c - 1), m === -1 && e[h] === l && (m = h)), d[h] = l;
  });
  for (var w = function(v) {
    return r[v] === a && e[v] !== d[v];
  }, V = 0, C = o.length; V < C; V++)
    o[V] = V === m || w(V) || w(V - 1);
  return o[r.indexOf(a)] = !0, o;
}
function ot(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function lt(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function st(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = G);
  var a = e.patternChar;
  a === void 0 && (a = "#");
  var o = e.value, c = e.defaultValue, m = e.valueIsNumericString, d = Ce(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  ot(e);
  var w = function(l) {
    return ut(l, e);
  }, V = function(l) {
    var I = l.key, _ = l.target, f = _.selectionStart, A = _.selectionEnd, g = _.value;
    if (f !== A) {
      n(l);
      return;
    }
    var N = f;
    if (I === "Backspace" || I === "Delete") {
      var O = "right";
      if (I === "Backspace") {
        for (; N > 0 && t[N - 1] !== a; )
          N--;
        O = "left";
      } else {
        for (var E = t.length; N < E && t[N] !== a; )
          N++;
        O = "right";
      }
      N = me(g, N, w(g), O);
    } else t[N] !== a && I !== "ArrowLeft" && I !== "ArrowRight" && (N = me(g, N + 1, w(g), "right"));
    N !== f && Se(_, N), n(l);
  }, C = ve(o) ? c : o, v = m ?? lt(C, t), h = Object.assign(Object.assign({}, e), { valueIsNumericString: v });
  return Object.assign(Object.assign({}, d), {
    value: o,
    defaultValue: c,
    valueIsNumericString: v,
    inputMode: r,
    format: function(l) {
      return at(l, h);
    },
    removeFormatting: function(l, I) {
      return it(l, I, h);
    },
    getCaretBoundary: w,
    onKeyDown: V
  });
}
function ft(e) {
  var t = st(e);
  return W.createElement(nt, Object.assign({}, t));
}
const ct = {
  neutral: "status-icon--neutral",
  success: "status-icon--success",
  error: "status-icon--error"
}, vt = {
  success: /* @__PURE__ */ b.jsx(Me, { iconSize: "sm" }),
  error: /* @__PURE__ */ b.jsx(qe, { iconSize: "sm" })
}, mt = Ne(
  ({
    type: e = "text",
    inputSize: t = "lg",
    className: r,
    status: n = "neutral",
    dropdown: a = !1,
    isDropdownOpen: o,
    readOnly: c,
    passwordLockIcon: m = !1,
    disabled: d = !1,
    variant: w = "outline",
    hasPasswordStrengthValidation: V = !1,
    validationMessages: C,
    placeholder: v = " ",
    leftIcon: h,
    message: l,
    hideMessage: I = !1,
    show_counter: _,
    maxLength: f,
    textAlignment: A = "left",
    label: g,
    leftPlaceholder: N,
    rightPlaceholder: O,
    value: E = "",
    rightIcon: P,
    onChange: y,
    triggerActionIcon: L,
    fieldMarker: de = !1,
    required: M = !1,
    showInputButton: J,
    inputButton: te,
    addOn: re,
    formatProps: ne,
    addOnIcon: ge,
    id: U,
    allowDecimals: B = !1,
    decimals: ae,
    allowSign: Q = !0,
    autoComplete: q,
    regex: $,
    customType: X,
    noStatusIcon: pe,
    ...he
  }, ie) => {
    E && f && E.toString().length > f && (E = E.toString().slice(0, f));
    const [z, H] = be(E), [ue, oe] = W.useState(!1);
    fe(() => {
      H(E);
    }, [E]), o && (I = !0), P = (n === "success" || n === "error") && !d && !pe ? vt[n] : P;
    const le = U || Be("quill-input"), se = {
      readOnly: c,
      required: M,
      autoComplete: q,
      value: z,
      placeholder: v,
      className: T(
        "input",
        "peer",
        `input__align--${A}`,
        `input__size--${t}`
      ),
      disabled: !!d,
      id: le
    }, _e = (R) => {
      let j = R.target.value;
      if ($ && (j = R.target.value.replace($, "")), e === "number" || e === "tel") {
        if (!B) {
          const Z = /[^0-9]/g;
          j = j.replace(Z, "");
        }
        if (B && !Q) {
          const Z = /[^0-9.]/g;
          j = j.replace(Z, "");
          const i = j.split(".");
          i.length > 1 && (j = i[0] + "." + i.slice(1).join(""));
        }
      }
      ae && (j = Re(j, ae).toString()), X && (j = Oe(X, j)), R.target.value = j, H(j), y == null || y(R);
    };
    return /* @__PURE__ */ b.jsxs("div", { className: "quill-input__container", children: [
      /* @__PURE__ */ b.jsxs(
        "div",
        {
          className: T(
            "quill-input__wrapper",
            z.toString().length > 0 && "quill-input__wrapper--has-value",
            `quill-input__wrapper__variant--${w}`,
            `quill-input__wrapper__variant--${w}--${n}`,
            `quill-input__wrapper__size--${t}`,
            r
          ),
          children: [
            re,
            /* @__PURE__ */ b.jsxs("div", { className: "quill-input-icons__wrapper", children: [
              h && /* @__PURE__ */ b.jsx("span", { className: "icon_wrapper", children: h }),
              m && /* @__PURE__ */ b.jsx("span", { className: "icon_wrapper", children: /* @__PURE__ */ b.jsx(
                De,
                {
                  fill: "var(--component-textIcon-normal-prominent)",
                  iconSize: "sm"
                }
              ) }),
              /* @__PURE__ */ b.jsxs(
                "div",
                {
                  className: T(
                    g ? "quill-input-label__wrapper" : "quill-input-no-label__wrapper",
                    z.toString().length > 0 && "quill-input-label__wrapper--has-value"
                  ),
                  children: [
                    N && (!g || g && (E || ue)) && /* @__PURE__ */ b.jsx(
                      Ve,
                      {
                        size: t,
                        as: "span",
                        className: T(
                          "quill-input-label__label",
                          "quill-input-label__label--left"
                        ),
                        color: "quill-typography__color--disabled",
                        children: N
                      }
                    ),
                    ne ? /* @__PURE__ */ b.jsx(
                      ft,
                      {
                        ...se,
                        ...ne,
                        onChange: (R) => {
                          H(R.target.value), y == null || y(R);
                        },
                        getInputRef: ie
                      }
                    ) : /* @__PURE__ */ b.jsx(
                      "input",
                      {
                        ...he,
                        ...se,
                        type: e === "number" && !B || e == "number" && B && !Q ? "text" : e,
                        onChange: _e,
                        onFocus: () => oe(!0),
                        onBlur: () => oe(!1),
                        maxLength: f,
                        ref: ie
                      }
                    ),
                    g && t === "lg" && /* @__PURE__ */ b.jsxs(
                      "label",
                      {
                        className: T(
                          "label",
                          `label__status--${n}`,
                          h && "label__hasIcon"
                        ),
                        htmlFor: le,
                        children: [
                          g,
                          de && /* @__PURE__ */ b.jsx(
                            "div",
                            {
                              className: T(
                                "label-field-marker",
                                `label-field-marker__required--${M}`
                              ),
                              children: M ? "*" : "(optional)"
                            }
                          )
                        ]
                      }
                    ),
                    O && (!g || g && (E || ue)) && /* @__PURE__ */ b.jsx(
                      Ve,
                      {
                        size: t,
                        as: "span",
                        className: T(
                          "quill-input-label__label",
                          "quill-input-label__label--right"
                        ),
                        color: d ? "quill-typography__color--disabled" : "",
                        children: O
                      }
                    )
                  ]
                }
              ),
              P && /* @__PURE__ */ b.jsx(
                "span",
                {
                  className: T(
                    "icon_wrapper",
                    ct[n]
                  ),
                  children: P
                }
              ),
              ge,
              L && /* @__PURE__ */ b.jsx("span", { className: "icon_wrapper", children: L }),
              a && /* @__PURE__ */ b.jsx(
                ke,
                {
                  width: 24,
                  height: 24,
                  "data-state": o ? "open" : "close",
                  className: T(
                    "quill-input__rotate",
                    "quill-input__icon"
                  )
                }
              )
            ] }),
            J && te
          ]
        }
      ),
      (l || _ || V) && !I && /* @__PURE__ */ b.jsxs(
        "div",
        {
          className: T(
            "message__container",
            `message__container--${t}`,
            `message__container__status--${n}`,
            d && "message__container__disabled"
          ),
          children: [
            V && /* @__PURE__ */ b.jsx("div", { className: "message__container__password_validation", children: C == null ? void 0 : C.map(
              (R, j) => /* @__PURE__ */ b.jsx(
                Fe,
                {
                  status: R.status,
                  validationMessage: R.validationMessage
                },
                j
              )
            ) }),
            /* @__PURE__ */ b.jsx("span", { className: "message__container__text", children: l }),
            _ && f && /* @__PURE__ */ b.jsxs("span", { className: "message__container__text", children: [
              e === "tel" ? z.toString().replace(/\s+/g, "").length : z.toString().length,
              "/",
              f
            ] })
          ]
        }
      )
    ] });
  }
);
mt.displayName = "Input";
export {
  mt as default
};
