import { j as W } from "../../../jsx-runtime-DmTjM30f.js";
import U, { forwardRef as Ye, useContext as We } from "react";
import fe, { createPortal as Ue } from "react-dom";
import Fe from "../handle-bar/index.js";
import { useSwipeBlock as ze } from "../../../hooks/useSwipeBlock/index.js";
import { ActionSheetContext as Ve } from "../root/index.js";
import { c as Be } from "../../../clsx-OuTLNxxd.js";
import { g as Ge } from "../../../_commonjsHelpers-BkfeUUK-.js";
import '../../../assets/index24.css';function te() {
  return te = Object.assign ? Object.assign.bind() : function(r) {
    for (var f = 1; f < arguments.length; f++) {
      var l = arguments[f];
      for (var e in l) ({}).hasOwnProperty.call(l, e) && (r[e] = l[e]);
    }
    return r;
  }, te.apply(null, arguments);
}
function Me(r, f) {
  if (r == null) return {};
  var l = {};
  for (var e in r) if ({}.hasOwnProperty.call(r, e)) {
    if (f.includes(e)) continue;
    l[e] = r[e];
  }
  return l;
}
function me(r, f) {
  return me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, e) {
    return l.__proto__ = e, l;
  }, me(r, f);
}
function De(r, f) {
  r.prototype = Object.create(f.prototype), r.prototype.constructor = r, me(r, f);
}
var ge = { exports: {} }, ee = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function He() {
  if (Se) return _;
  Se = 1;
  var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, e = r ? Symbol.for("react.fragment") : 60107, i = r ? Symbol.for("react.strict_mode") : 60108, t = r ? Symbol.for("react.profiler") : 60114, a = r ? Symbol.for("react.provider") : 60109, n = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, p = r ? Symbol.for("react.concurrent_mode") : 60111, v = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, T = r ? Symbol.for("react.suspense_list") : 60120, A = r ? Symbol.for("react.memo") : 60115, I = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, j = r ? Symbol.for("react.fundamental") : 60117, M = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
  function N(u) {
    if (typeof u == "object" && u !== null) {
      var Y = u.$$typeof;
      switch (Y) {
        case f:
          switch (u = u.type, u) {
            case c:
            case p:
            case e:
            case t:
            case i:
            case E:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case n:
                case v:
                case I:
                case A:
                case a:
                  return u;
                default:
                  return Y;
              }
          }
        case l:
          return Y;
      }
    }
  }
  function $(u) {
    return N(u) === p;
  }
  return _.AsyncMode = c, _.ConcurrentMode = p, _.ContextConsumer = n, _.ContextProvider = a, _.Element = f, _.ForwardRef = v, _.Fragment = e, _.Lazy = I, _.Memo = A, _.Portal = l, _.Profiler = t, _.StrictMode = i, _.Suspense = E, _.isAsyncMode = function(u) {
    return $(u) || N(u) === c;
  }, _.isConcurrentMode = $, _.isContextConsumer = function(u) {
    return N(u) === n;
  }, _.isContextProvider = function(u) {
    return N(u) === a;
  }, _.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === f;
  }, _.isForwardRef = function(u) {
    return N(u) === v;
  }, _.isFragment = function(u) {
    return N(u) === e;
  }, _.isLazy = function(u) {
    return N(u) === I;
  }, _.isMemo = function(u) {
    return N(u) === A;
  }, _.isPortal = function(u) {
    return N(u) === l;
  }, _.isProfiler = function(u) {
    return N(u) === t;
  }, _.isStrictMode = function(u) {
    return N(u) === i;
  }, _.isSuspense = function(u) {
    return N(u) === E;
  }, _.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === e || u === p || u === t || u === i || u === E || u === T || typeof u == "object" && u !== null && (u.$$typeof === I || u.$$typeof === A || u.$$typeof === a || u.$$typeof === n || u.$$typeof === v || u.$$typeof === j || u.$$typeof === M || u.$$typeof === F || u.$$typeof === w);
  }, _.typeOf = N, _;
}
var R = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Xe() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, e = r ? Symbol.for("react.fragment") : 60107, i = r ? Symbol.for("react.strict_mode") : 60108, t = r ? Symbol.for("react.profiler") : 60114, a = r ? Symbol.for("react.provider") : 60109, n = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, p = r ? Symbol.for("react.concurrent_mode") : 60111, v = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, T = r ? Symbol.for("react.suspense_list") : 60120, A = r ? Symbol.for("react.memo") : 60115, I = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, j = r ? Symbol.for("react.fundamental") : 60117, M = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
    function N(s) {
      return typeof s == "string" || typeof s == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      s === e || s === p || s === t || s === i || s === E || s === T || typeof s == "object" && s !== null && (s.$$typeof === I || s.$$typeof === A || s.$$typeof === a || s.$$typeof === n || s.$$typeof === v || s.$$typeof === j || s.$$typeof === M || s.$$typeof === F || s.$$typeof === w);
    }
    function $(s) {
      if (typeof s == "object" && s !== null) {
        var k = s.$$typeof;
        switch (k) {
          case f:
            var Q = s.type;
            switch (Q) {
              case c:
              case p:
              case e:
              case t:
              case i:
              case E:
                return Q;
              default:
                var Ce = Q && Q.$$typeof;
                switch (Ce) {
                  case n:
                  case v:
                  case I:
                  case A:
                  case a:
                    return Ce;
                  default:
                    return k;
                }
            }
          case l:
            return k;
        }
      }
    }
    var u = c, Y = p, re = n, ne = a, oe = f, ie = v, K = e, ae = I, se = A, G = l, ue = t, q = i, z = E, Z = !1;
    function ce(s) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(s) || $(s) === c;
    }
    function o(s) {
      return $(s) === p;
    }
    function d(s) {
      return $(s) === n;
    }
    function b(s) {
      return $(s) === a;
    }
    function g(s) {
      return typeof s == "object" && s !== null && s.$$typeof === f;
    }
    function h(s) {
      return $(s) === v;
    }
    function C(s) {
      return $(s) === e;
    }
    function m(s) {
      return $(s) === I;
    }
    function x(s) {
      return $(s) === A;
    }
    function S(s) {
      return $(s) === l;
    }
    function P(s) {
      return $(s) === t;
    }
    function O(s) {
      return $(s) === i;
    }
    function D(s) {
      return $(s) === E;
    }
    R.AsyncMode = u, R.ConcurrentMode = Y, R.ContextConsumer = re, R.ContextProvider = ne, R.Element = oe, R.ForwardRef = ie, R.Fragment = K, R.Lazy = ae, R.Memo = se, R.Portal = G, R.Profiler = ue, R.StrictMode = q, R.Suspense = z, R.isAsyncMode = ce, R.isConcurrentMode = o, R.isContextConsumer = d, R.isContextProvider = b, R.isElement = g, R.isForwardRef = h, R.isFragment = C, R.isLazy = m, R.isMemo = x, R.isPortal = S, R.isProfiler = P, R.isStrictMode = O, R.isSuspense = D, R.isValidElementType = N, R.typeOf = $;
  }()), R;
}
var _e;
function qe() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? ee.exports = He() : ee.exports = Xe()), ee.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var le, Re;
function Je() {
  if (Re) return le;
  Re = 1;
  var r = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function e(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var a = {}, n = 0; n < 10; n++)
        a["_" + String.fromCharCode(n)] = n;
      var c = Object.getOwnPropertyNames(a).map(function(v) {
        return a[v];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return le = i() ? Object.assign : function(t, a) {
    for (var n, c = e(t), p, v = 1; v < arguments.length; v++) {
      n = Object(arguments[v]);
      for (var E in n)
        f.call(n, E) && (c[E] = n[E]);
      if (r) {
        p = r(n);
        for (var T = 0; T < p.length; T++)
          l.call(n, p[T]) && (c[p[T]] = n[p[T]]);
      }
    }
    return c;
  }, le;
}
var pe, Pe;
function be() {
  if (Pe) return pe;
  Pe = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pe = r, pe;
}
var de, we;
function ke() {
  return we || (we = 1, de = Function.call.bind(Object.prototype.hasOwnProperty)), de;
}
var ve, Ae;
function Ke() {
  if (Ae) return ve;
  Ae = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var f = be(), l = {}, e = ke();
    r = function(t) {
      var a = "Warning: " + t;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(t, a, n, c, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in t)
        if (e(t, v)) {
          var E;
          try {
            if (typeof t[v] != "function") {
              var T = Error(
                (c || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            E = t[v](a, v, c, n, null, f);
          } catch (I) {
            E = I;
          }
          if (E && !(E instanceof Error) && r(
            (c || "React class") + ": type specification of " + n + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in l)) {
            l[E.message] = !0;
            var A = p ? p() : "";
            r(
              "Failed " + n + " type: " + E.message + (A ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, ve = i, ve;
}
var ye, Ne;
function Ze() {
  if (Ne) return ye;
  Ne = 1;
  var r = qe(), f = Je(), l = be(), e = ke(), i = Ke(), t = function() {
  };
  process.env.NODE_ENV !== "production" && (t = function(n) {
    var c = "Warning: " + n;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return ye = function(n, c) {
    var p = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function E(o) {
      var d = o && (p && o[p] || o[v]);
      if (typeof d == "function")
        return d;
    }
    var T = "<<anonymous>>", A = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: F(),
      arrayOf: N,
      element: $(),
      elementType: u(),
      instanceOf: Y,
      node: ie(),
      objectOf: ne,
      oneOf: re,
      oneOfType: oe,
      shape: ae,
      exact: se
    };
    function I(o, d) {
      return o === d ? o !== 0 || 1 / o === 1 / d : o !== o && d !== d;
    }
    function w(o, d) {
      this.message = o, this.data = d && typeof d == "object" ? d : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function j(o) {
      if (process.env.NODE_ENV !== "production")
        var d = {}, b = 0;
      function g(C, m, x, S, P, O, D) {
        if (S = S || T, O = O || x, D !== l) {
          if (c) {
            var s = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw s.name = "Invariant Violation", s;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var k = S + ":" + x;
            !d[k] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (t(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), d[k] = !0, b++);
          }
        }
        return m[x] == null ? C ? m[x] === null ? new w("The " + P + " `" + O + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new w("The " + P + " `" + O + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : o(m, x, S, P, O);
      }
      var h = g.bind(null, !1);
      return h.isRequired = g.bind(null, !0), h;
    }
    function M(o) {
      function d(b, g, h, C, m, x) {
        var S = b[g], P = q(S);
        if (P !== o) {
          var O = z(S);
          return new w(
            "Invalid " + C + " `" + m + "` of type " + ("`" + O + "` supplied to `" + h + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return j(d);
    }
    function F() {
      return j(a);
    }
    function N(o) {
      function d(b, g, h, C, m) {
        if (typeof o != "function")
          return new w("Property `" + m + "` of component `" + h + "` has invalid PropType notation inside arrayOf.");
        var x = b[g];
        if (!Array.isArray(x)) {
          var S = q(x);
          return new w("Invalid " + C + " `" + m + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected an array."));
        }
        for (var P = 0; P < x.length; P++) {
          var O = o(x, P, h, C, m + "[" + P + "]", l);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return j(d);
    }
    function $() {
      function o(d, b, g, h, C) {
        var m = d[b];
        if (!n(m)) {
          var x = q(m);
          return new w("Invalid " + h + " `" + C + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(o);
    }
    function u() {
      function o(d, b, g, h, C) {
        var m = d[b];
        if (!r.isValidElementType(m)) {
          var x = q(m);
          return new w("Invalid " + h + " `" + C + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(o);
    }
    function Y(o) {
      function d(b, g, h, C, m) {
        if (!(b[g] instanceof o)) {
          var x = o.name || T, S = ce(b[g]);
          return new w("Invalid " + C + " `" + m + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return j(d);
    }
    function re(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? t(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : t("Invalid argument supplied to oneOf, expected an array.")), a;
      function d(b, g, h, C, m) {
        for (var x = b[g], S = 0; S < o.length; S++)
          if (I(x, o[S]))
            return null;
        var P = JSON.stringify(o, function(D, s) {
          var k = z(s);
          return k === "symbol" ? String(s) : s;
        });
        return new w("Invalid " + C + " `" + m + "` of value `" + String(x) + "` " + ("supplied to `" + h + "`, expected one of " + P + "."));
      }
      return j(d);
    }
    function ne(o) {
      function d(b, g, h, C, m) {
        if (typeof o != "function")
          return new w("Property `" + m + "` of component `" + h + "` has invalid PropType notation inside objectOf.");
        var x = b[g], S = q(x);
        if (S !== "object")
          return new w("Invalid " + C + " `" + m + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected an object."));
        for (var P in x)
          if (e(x, P)) {
            var O = o(x, P, h, C, m + "." + P, l);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return j(d);
    }
    function oe(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && t("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var d = 0; d < o.length; d++) {
        var b = o[d];
        if (typeof b != "function")
          return t(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(b) + " at index " + d + "."
          ), a;
      }
      function g(h, C, m, x, S) {
        for (var P = [], O = 0; O < o.length; O++) {
          var D = o[O], s = D(h, C, m, x, S, l);
          if (s == null)
            return null;
          s.data && e(s.data, "expectedType") && P.push(s.data.expectedType);
        }
        var k = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new w("Invalid " + x + " `" + S + "` supplied to " + ("`" + m + "`" + k + "."));
      }
      return j(g);
    }
    function ie() {
      function o(d, b, g, h, C) {
        return G(d[b]) ? null : new w("Invalid " + h + " `" + C + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return j(o);
    }
    function K(o, d, b, g, h) {
      return new w(
        (o || "React class") + ": " + d + " type `" + b + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + h + "`."
      );
    }
    function ae(o) {
      function d(b, g, h, C, m) {
        var x = b[g], S = q(x);
        if (S !== "object")
          return new w("Invalid " + C + " `" + m + "` of type `" + S + "` " + ("supplied to `" + h + "`, expected `object`."));
        for (var P in o) {
          var O = o[P];
          if (typeof O != "function")
            return K(h, C, m, P, z(O));
          var D = O(x, P, h, C, m + "." + P, l);
          if (D)
            return D;
        }
        return null;
      }
      return j(d);
    }
    function se(o) {
      function d(b, g, h, C, m) {
        var x = b[g], S = q(x);
        if (S !== "object")
          return new w("Invalid " + C + " `" + m + "` of type `" + S + "` " + ("supplied to `" + h + "`, expected `object`."));
        var P = f({}, b[g], o);
        for (var O in P) {
          var D = o[O];
          if (e(o, O) && typeof D != "function")
            return K(h, C, m, O, z(D));
          if (!D)
            return new w(
              "Invalid " + C + " `" + m + "` key `" + O + "` supplied to `" + h + "`.\nBad object: " + JSON.stringify(b[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var s = D(x, O, h, C, m + "." + O, l);
          if (s)
            return s;
        }
        return null;
      }
      return j(d);
    }
    function G(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(G);
          if (o === null || n(o))
            return !0;
          var d = E(o);
          if (d) {
            var b = d.call(o), g;
            if (d !== o.entries) {
              for (; !(g = b.next()).done; )
                if (!G(g.value))
                  return !1;
            } else
              for (; !(g = b.next()).done; ) {
                var h = g.value;
                if (h && !G(h[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(o, d) {
      return o === "symbol" ? !0 : d ? d["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && d instanceof Symbol : !1;
    }
    function q(o) {
      var d = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : ue(d, o) ? "symbol" : d;
    }
    function z(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var d = q(o);
      if (d === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return d;
    }
    function Z(o) {
      var d = z(o);
      switch (d) {
        case "array":
        case "object":
          return "an " + d;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + d;
        default:
          return d;
      }
    }
    function ce(o) {
      return !o.constructor || !o.constructor.name ? T : o.constructor.name;
    }
    return A.checkPropTypes = i, A.resetWarningCache = i.resetWarningCache, A.PropTypes = A, A;
  }, ye;
}
var Ee, $e;
function Qe() {
  if ($e) return Ee;
  $e = 1;
  var r = be();
  function f() {
  }
  function l() {
  }
  return l.resetWarningCache = f, Ee = function() {
    function e(a, n, c, p, v, E) {
      if (E !== r) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    e.isRequired = e;
    function i() {
      return e;
    }
    var t = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: i,
      element: e,
      elementType: e,
      instanceOf: i,
      node: e,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: l,
      resetWarningCache: f
    };
    return t.PropTypes = t, t;
  }, Ee;
}
if (process.env.NODE_ENV !== "production") {
  var et = qe(), tt = !0;
  ge.exports = Ze()(et.isElement, tt);
} else
  ge.exports = Qe()();
var rt = ge.exports;
const y = /* @__PURE__ */ Ge(rt);
function nt(r, f) {
  return r.classList ? !!f && r.classList.contains(f) : (" " + (r.className.baseVal || r.className) + " ").indexOf(" " + f + " ") !== -1;
}
function ot(r, f) {
  r.classList ? r.classList.add(f) : nt(r, f) || (typeof r.className == "string" ? r.className = r.className + " " + f : r.setAttribute("class", (r.className && r.className.baseVal || "") + " " + f));
}
function je(r, f) {
  return r.replace(new RegExp("(^|\\s)" + f + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function it(r, f) {
  r.classList ? r.classList.remove(f) : typeof r.className == "string" ? r.className = je(r.className, f) : r.setAttribute("class", je(r.className && r.className.baseVal || "", f));
}
const Ie = {
  disabled: !1
};
var at = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.shape({
  enter: y.number,
  exit: y.number,
  appear: y.number
}).isRequired]) : null, st = process.env.NODE_ENV !== "production" ? y.oneOfType([y.string, y.shape({
  enter: y.string,
  exit: y.string,
  active: y.string
}), y.shape({
  enter: y.string,
  enterDone: y.string,
  enterActive: y.string,
  exit: y.string,
  exitDone: y.string,
  exitActive: y.string
})]) : null;
const Le = U.createContext(null);
var J = "unmounted", V = "exited", B = "entering", X = "entered", xe = "exiting", L = /* @__PURE__ */ function(r) {
  De(f, r);
  function f(e, i) {
    var t;
    t = r.call(this, e, i) || this;
    var a = i, n = a && !a.isMounting ? e.enter : e.appear, c;
    return t.appearStatus = null, e.in ? n ? (c = V, t.appearStatus = B) : c = X : e.unmountOnExit || e.mountOnEnter ? c = J : c = V, t.state = {
      status: c
    }, t.nextCallback = null, t;
  }
  f.getDerivedStateFromProps = function(i, t) {
    var a = i.in;
    return a && t.status === J ? {
      status: V
    } : null;
  };
  var l = f.prototype;
  return l.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, l.componentDidUpdate = function(i) {
    var t = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== B && a !== X && (t = B) : (a === B || a === X) && (t = xe);
    }
    this.updateStatus(!1, t);
  }, l.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, l.getTimeouts = function() {
    var i = this.props.timeout, t, a, n;
    return t = a = n = i, i != null && typeof i != "number" && (t = i.exit, a = i.enter, n = i.appear !== void 0 ? i.appear : a), {
      exit: t,
      enter: a,
      appear: n
    };
  }, l.updateStatus = function(i, t) {
    i === void 0 && (i = !1), t !== null ? (this.cancelNextCallback(), t === B ? this.performEnter(i) : this.performExit()) : this.props.unmountOnExit && this.state.status === V && this.setState({
      status: J
    });
  }, l.performEnter = function(i) {
    var t = this, a = this.props.enter, n = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [n] : [fe.findDOMNode(this), n], p = c[0], v = c[1], E = this.getTimeouts(), T = n ? E.appear : E.enter;
    if (!i && !a || Ie.disabled) {
      this.safeSetState({
        status: X
      }, function() {
        t.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, v), this.safeSetState({
      status: B
    }, function() {
      t.props.onEntering(p, v), t.onTransitionEnd(T, function() {
        t.safeSetState({
          status: X
        }, function() {
          t.props.onEntered(p, v);
        });
      });
    });
  }, l.performExit = function() {
    var i = this, t = this.props.exit, a = this.getTimeouts(), n = this.props.nodeRef ? void 0 : fe.findDOMNode(this);
    if (!t || Ie.disabled) {
      this.safeSetState({
        status: V
      }, function() {
        i.props.onExited(n);
      });
      return;
    }
    this.props.onExit(n), this.safeSetState({
      status: xe
    }, function() {
      i.props.onExiting(n), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: V
        }, function() {
          i.props.onExited(n);
        });
      });
    });
  }, l.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, l.safeSetState = function(i, t) {
    t = this.setNextCallback(t), this.setState(i, t);
  }, l.setNextCallback = function(i) {
    var t = this, a = !0;
    return this.nextCallback = function(n) {
      a && (a = !1, t.nextCallback = null, i(n));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, l.onTransitionEnd = function(i, t) {
    this.setNextCallback(t);
    var a = this.props.nodeRef ? this.props.nodeRef.current : fe.findDOMNode(this), n = i == null && !this.props.addEndListener;
    if (!a || n) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], p = c[0], v = c[1];
      this.props.addEndListener(p, v);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, l.render = function() {
    var i = this.state.status;
    if (i === J)
      return null;
    var t = this.props, a = t.children;
    t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
    var n = Me(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ U.createElement(Le.Provider, {
        value: null
      }, typeof a == "function" ? a(i, n) : U.cloneElement(U.Children.only(a), n))
    );
  }, f;
}(U.Component);
L.contextType = Le;
L.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: y.shape({
    current: typeof Element > "u" ? y.any : function(r, f, l, e, i, t) {
      var a = r[f];
      return y.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(r, f, l, e, i, t);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: y.oneOfType([y.func.isRequired, y.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: y.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: y.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: y.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: y.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: y.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: y.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(f) {
    var l = at;
    f.addEndListener || (l = l.isRequired);
    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
      i[t - 1] = arguments[t];
    return l.apply(void 0, [f].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: y.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: y.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: y.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: y.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: y.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: y.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: y.func
} : {};
function H() {
}
L.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: H,
  onEntering: H,
  onEntered: H,
  onExit: H,
  onExiting: H,
  onExited: H
};
L.UNMOUNTED = J;
L.EXITED = V;
L.ENTERING = B;
L.ENTERED = X;
L.EXITING = xe;
var ut = function(f, l) {
  return f && l && l.split(" ").forEach(function(e) {
    return ot(f, e);
  });
}, he = function(f, l) {
  return f && l && l.split(" ").forEach(function(e) {
    return it(f, e);
  });
}, Te = /* @__PURE__ */ function(r) {
  De(f, r);
  function f() {
    for (var e, i = arguments.length, t = new Array(i), a = 0; a < i; a++)
      t[a] = arguments[a];
    return e = r.call.apply(r, [this].concat(t)) || this, e.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, e.onEnter = function(n, c) {
      var p = e.resolveArguments(n, c), v = p[0], E = p[1];
      e.removeClasses(v, "exit"), e.addClass(v, E ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(n, c);
    }, e.onEntering = function(n, c) {
      var p = e.resolveArguments(n, c), v = p[0], E = p[1], T = E ? "appear" : "enter";
      e.addClass(v, T, "active"), e.props.onEntering && e.props.onEntering(n, c);
    }, e.onEntered = function(n, c) {
      var p = e.resolveArguments(n, c), v = p[0], E = p[1], T = E ? "appear" : "enter";
      e.removeClasses(v, T), e.addClass(v, T, "done"), e.props.onEntered && e.props.onEntered(n, c);
    }, e.onExit = function(n) {
      var c = e.resolveArguments(n), p = c[0];
      e.removeClasses(p, "appear"), e.removeClasses(p, "enter"), e.addClass(p, "exit", "base"), e.props.onExit && e.props.onExit(n);
    }, e.onExiting = function(n) {
      var c = e.resolveArguments(n), p = c[0];
      e.addClass(p, "exit", "active"), e.props.onExiting && e.props.onExiting(n);
    }, e.onExited = function(n) {
      var c = e.resolveArguments(n), p = c[0];
      e.removeClasses(p, "exit"), e.addClass(p, "exit", "done"), e.props.onExited && e.props.onExited(n);
    }, e.resolveArguments = function(n, c) {
      return e.props.nodeRef ? [e.props.nodeRef.current, n] : [n, c];
    }, e.getClassNames = function(n) {
      var c = e.props.classNames, p = typeof c == "string", v = p && c ? c + "-" : "", E = p ? "" + v + n : c[n], T = p ? E + "-active" : c[n + "Active"], A = p ? E + "-done" : c[n + "Done"];
      return {
        baseClassName: E,
        activeClassName: T,
        doneClassName: A
      };
    }, e;
  }
  var l = f.prototype;
  return l.addClass = function(i, t, a) {
    var n = this.getClassNames(t)[a + "ClassName"], c = this.getClassNames("enter"), p = c.doneClassName;
    t === "appear" && a === "done" && p && (n += " " + p), a === "active" && i && i.scrollTop, n && (this.appliedClasses[t][a] = n, ut(i, n));
  }, l.removeClasses = function(i, t) {
    var a = this.appliedClasses[t], n = a.base, c = a.active, p = a.done;
    this.appliedClasses[t] = {}, n && he(i, n), c && he(i, c), p && he(i, p);
  }, l.render = function() {
    var i = this.props;
    i.classNames;
    var t = Me(i, ["classNames"]);
    return /* @__PURE__ */ U.createElement(L, te({}, t, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, f;
}(U.Component);
Te.defaultProps = {
  classNames: ""
};
Te.propTypes = process.env.NODE_ENV !== "production" ? te({}, L.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: st,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: y.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: y.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: y.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: y.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: y.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: y.func
}) : {};
const ht = Ye(
  ({
    children: r,
    shouldCloseOnDrag: f,
    shouldDetectSwipingOnContainer: l = !1,
    showHandlebar: e = !0,
    fullHeightOnOpen: i = !1,
    disableCloseOnOverlay: t = !1,
    portalId: a,
    handleBarIndex: n,
    handleBarPosition: c,
    ...p
  }, v) => {
    const E = a && document.getElementById(a) || document.body, { show: T, handleClose: A, className: I, position: w, type: j } = We(Ve), { height: M, containerRef: F, bindHandle: N, isScrolled: $, isLg: u } = ze({
      show: T,
      onClose: A,
      shouldCloseOnDrag: f,
      fullHeightOnOpen: i
    }), Y = () => {
      t || A == null || A();
    };
    return /* @__PURE__ */ W.jsx(W.Fragment, { children: Ue(
      /* @__PURE__ */ W.jsxs(U.Fragment, { children: [
        T && j === "modal" && /* @__PURE__ */ W.jsx(
          "div",
          {
            "data-testid": "dt-actionsheet-overlay",
            onClick: Y,
            className: "quill-action-sheet--portal__variant--modal"
          }
        ),
        /* @__PURE__ */ W.jsx(
          Te,
          {
            in: T,
            timeout: 100,
            classNames: {
              appear: `quill-action-sheet--root--enter position--${w}`,
              enter: `quill-action-sheet--root--enter position--${w}`,
              enterDone: `quill-action-sheet--root--enter-done position--${w}`,
              exit: `quill-action-sheet--root--exit position--${w}`
            },
            unmountOnExit: !0,
            children: /* @__PURE__ */ W.jsx(
              "div",
              {
                className: "quill-action-sheet--portal quill-action-sheet--portal--wrapper",
                role: "dialog",
                "data-state": T ? "open" : "close",
                ref: v,
                ...p,
                children: /* @__PURE__ */ W.jsxs(
                  "div",
                  {
                    className: Be(
                      "quill-action-sheet--root",
                      `quill-action-sheet--root__position--${w}`,
                      I
                    ),
                    ref: F,
                    style: { height: M },
                    ...l && !$ && !u && N(),
                    children: [
                      e && /* @__PURE__ */ W.jsx(
                        Fe,
                        {
                          ...N(),
                          position: c,
                          style: { zIndex: n }
                        }
                      ),
                      r
                    ]
                  }
                )
              }
            )
          }
        )
      ] }),
      E
    ) });
  }
);
export {
  ht as default
};
