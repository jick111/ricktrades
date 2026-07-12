import { j as u } from "../../jsx-runtime-DmTjM30f.js";
import { c as U } from "../../clsx-OuTLNxxd.js";
import * as o from "react";
import { forwardRef as X } from "react";
import { CaptionText as H } from "../Typography/caption/index.js";
import "../Typography/base.js";
import "../Typography/heading/index.js";
import { Text as _ } from "../Typography/text/index.js";
import { NotificationIcon as F } from "./notification-icon.js";
import { STATUS as j } from "../../utils/notification-utils.js";
import "../Button/base/index.js";
import "../../snackbar-controller-CDe1DIbw.js";
import "../Button/social/index.js";
import { IconButton as P } from "../Button/icon-button/index.js";
const q = ({ title: e, titleId: r, ...n }, i) => o.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 22, viewBox: "0 0 11 22", role: "img", ref: i, "aria-labelledby": r, ...n },
  e ? o.createElement("title", { id: r }, e) : null,
  o.createElement(
    "g",
    null,
    o.createElement("path", { d: "M9.11 15.016 5.5 11.379l-3.637 3.637c-.164.164-.437.164-.629 0-.164-.192-.164-.465 0-.63l3.637-3.636-3.637-3.61c-.164-.163-.164-.437 0-.628.192-.164.465-.164.63 0L5.5 10.148l3.61-3.636c.163-.164.437-.164.628 0 .164.191.164.465 0 .629L6.102 10.75l3.636 3.637c.164.164.164.437 0 .629-.191.164-.465.164-.629 0" })
  ),
  o.createElement(
    "defs",
    null,
    o.createElement(
      "clipPath",
      { id: "544b2625b2fde64b7b032442d3dadc96__a" },
      o.createElement("path", { d: "M0 0h11v22H0z" })
    )
  )
), G = X(q), W = ({ title: e, titleId: r, ...n }, i) => o.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 13, height: 22, viewBox: "0 0 13 22", role: "img", ref: i, "aria-labelledby": r, ...n },
  e ? o.createElement("title", { id: r }, e) : null,
  o.createElement(
    "g",
    null,
    o.createElement("path", { d: "M5.215 5.063c-.082 0-.137.054-.192.109l-.52.766H8.47l-.52-.766a.23.23 0 0 0-.191-.11zm4.84.875h1.914c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-.328l-.657 8.887c-.082.93-.82 1.613-1.75 1.613H3.738c-.93 0-1.668-.684-1.75-1.613L1.332 7.25h-.3a.63.63 0 0 1-.657-.656c0-.356.273-.657.656-.657h1.887L3.93 4.435c.273-.41.765-.684 1.285-.684h2.543c.52 0 1.012.273 1.285.684zm.273 1.312H2.645l.656 8.805a.44.44 0 0 0 .437.383h5.496c.22 0 .41-.165.438-.383z" })
  ),
  o.createElement(
    "defs",
    null,
    o.createElement(
      "clipPath",
      { id: "e42a0431289682bb4c1db2c2832c419e__a" },
      o.createElement("path", { d: "M0 0h13v22H0z" })
    )
  )
), Z = X(W), J = ({ title: e, titleId: r, ...n }, i) => o.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 13, height: 22, viewBox: "0 0 13 22", role: "img", ref: i, "aria-labelledby": r, ...n },
  e ? o.createElement("title", { id: r }, e) : null,
  o.createElement(
    "g",
    null,
    o.createElement("path", { d: "M12.434 6.566c.246.274.246.684 0 .93l-7.22 7.219c-.273.273-.683.273-.929 0L.566 10.996a.6.6 0 0 1 0-.902.6.6 0 0 1 .903 0l3.254 3.254 6.78-6.782a.644.644 0 0 1 .903 0z" })
  ),
  o.createElement(
    "defs",
    null,
    o.createElement(
      "clipPath",
      { id: "6be65d813442534067ee112f37a70324__a" },
      o.createElement("path", { d: "M0 0h13v22H0z" })
    )
  )
), K = X(J);
function f() {
  return f = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, f.apply(this, arguments);
}
var Q = "Left", V = "Right", ee = "Up", te = "Down", x = {
  delta: 10,
  preventDefaultTouchmoveEvent: !1,
  rotationAngle: 0,
  trackMouse: !1,
  trackTouch: !0
}, z = {
  first: !0,
  initial: [0, 0],
  start: 0,
  swiping: !1,
  xy: [0, 0]
}, C = "mousemove", I = "mouseup", ae = "touchend", re = "touchmove", ne = "touchstart";
function ce(e, r, n, i) {
  return e > r ? n > 0 ? V : Q : i > 0 ? te : ee;
}
function O(e, r) {
  if (r === 0) return e;
  var n = Math.PI / 180 * r, i = e[0] * Math.cos(n) + e[1] * Math.sin(n), s = e[1] * Math.cos(n) - e[0] * Math.sin(n);
  return [i, s];
}
function ie(e, r) {
  var n = function(t) {
    t && "touches" in t && t.touches.length > 1 || e(function(c, a) {
      a.trackMouse && (document.addEventListener(C, i), document.addEventListener(I, g));
      var l = "touches" in t ? t.touches[0] : t, h = l.clientX, m = l.clientY, v = O([h, m], a.rotationAngle);
      return f({}, c, z, {
        initial: [].concat(v),
        xy: v,
        start: t.timeStamp || 0
      });
    });
  }, i = function(t) {
    e(function(c, a) {
      if ("touches" in t && t.touches.length > 1)
        return c;
      var l = "touches" in t ? t.touches[0] : t, h = l.clientX, m = l.clientY, v = O([h, m], a.rotationAngle), S = v[0], N = v[1], E = S - c.xy[0], d = N - c.xy[1], T = Math.abs(E), D = Math.abs(d), L = (t.timeStamp || 0) - c.start, $ = Math.sqrt(T * T + D * D) / (L || 1), B = [E / (L || 1), d / (L || 1)], R = ce(T, D, E, d), A = typeof a.delta == "number" ? a.delta : a.delta[R.toLowerCase()] || x.delta;
      if (T < A && D < A && !c.swiping) return c;
      var y = {
        absX: T,
        absY: D,
        deltaX: E,
        deltaY: d,
        dir: R,
        event: t,
        first: c.first,
        initial: c.initial,
        velocity: $,
        vxvy: B
      };
      y.first && a.onSwipeStart && a.onSwipeStart(y), a.onSwiping && a.onSwiping(y);
      var Y = !1;
      return (a.onSwiping || a.onSwiped || "onSwiped" + R in a) && (Y = !0), Y && a.preventDefaultTouchmoveEvent && a.trackTouch && t.cancelable && t.preventDefault(), f({}, c, {
        first: !1,
        eventData: y,
        swiping: !0
      });
    });
  }, s = function(t) {
    e(function(c, a) {
      var l;
      if (c.swiping && c.eventData) {
        l = f({}, c.eventData, {
          event: t
        }), a.onSwiped && a.onSwiped(l);
        var h = a["onSwiped" + l.dir];
        h && h(l);
      } else
        a.onTap && a.onTap({
          event: t
        });
      return f({}, c, z, {
        eventData: l
      });
    });
  }, b = function() {
    document.removeEventListener(C, i), document.removeEventListener(I, g);
  }, g = function(t) {
    b(), s(t);
  }, w = function(t, c) {
    var a = function() {
    };
    if (t && t.addEventListener) {
      var l = [[ne, n], [re, i], [ae, s]];
      l.forEach(function(h) {
        var m = h[0], v = h[1];
        return t.addEventListener(m, v, {
          passive: c
        });
      }), a = function() {
        return l.forEach(function(m) {
          var v = m[0], S = m[1];
          return t.removeEventListener(v, S);
        });
      };
    }
    return a;
  }, k = function(t) {
    t !== null && e(function(c, a) {
      if (c.el === t) return c;
      var l = {};
      return c.el && c.el !== t && c.cleanUpTouch && (c.cleanUpTouch(), l.cleanUpTouch = void 0), a.trackTouch && t && (l.cleanUpTouch = w(t, !a.preventDefaultTouchmoveEvent)), f({}, c, {
        el: t
      }, l);
    });
  }, M = {
    ref: k
  };
  return r.trackMouse && (M.onMouseDown = n), [M, w];
}
function oe(e, r, n) {
  var i = {};
  return !r.trackTouch && e.cleanUpTouch ? (e.cleanUpTouch(), i.cleanUpTouch = void 0) : r.trackTouch && !e.cleanUpTouch && e.el && (i.cleanUpTouch = n(e.el, !r.preventDefaultTouchmoveEvent)), f({}, e, i);
}
function le(e) {
  var r = e.trackMouse, n = o.useRef(f({}, z)), i = o.useRef(f({}, x));
  i.current = f({}, x, e, {
    delta: e.delta === void 0 ? x.delta : e.delta,
    rotationAngle: e.rotationAngle === void 0 ? x.rotationAngle : e.rotationAngle,
    trackTouch: e.trackTouch === void 0 ? x.trackTouch : e.trackTouch
  });
  var s = o.useMemo(function() {
    return ie(function(w) {
      return n.current = w(n.current, i.current);
    }, {
      trackMouse: r
    });
  }, [r]), b = s[0], g = s[1];
  return n.current = oe(n.current, i.current, g), b;
}
const ue = {
  trackMouse: !0,
  preventScrollOnSwipe: !0
}, Te = ({
  className: e,
  hasCloseButton: r,
  icon: n,
  iconBackgroundColor: i,
  isBanner: s,
  message: b,
  onClose: g,
  onMarkAsRead: w,
  onSwipeDown: k,
  onSwipeLeft: M,
  onSwipeRight: p,
  onSwipeUp: t,
  redirectTo: c,
  status: a = j.UNREAD,
  timestamp: l,
  title: h,
  type: m,
  ...v
}) => {
  const S = `${new Date(l ?? 0).getDate()} ${new Date(
    l ?? 0
  ).toLocaleString("en", {
    month: "short",
    year: "numeric",
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  })}`.replace(",", ""), N = le({
    onSwipedUp: t,
    onSwipedDown: k,
    onSwipedLeft: M,
    onSwipedRight: p,
    ...ue
  }), E = (d) => {
    d.preventDefault(), d.stopPropagation(), g == null || g(d);
  };
  return /* @__PURE__ */ u.jsxs(
    "a",
    {
      ...v,
      ...N,
      className: U("quill-notification", e),
      href: c,
      onDragStart: (d) => d.preventDefault(),
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "body", children: [
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: U("icon", m),
              style: { backgroundColor: i },
              children: [
                n ?? /* @__PURE__ */ u.jsx(F, { type: m }),
                !s && a === j.UNREAD && /* @__PURE__ */ u.jsx("div", { className: "badge-unread" })
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs("div", { className: "details", children: [
            /* @__PURE__ */ u.jsx(
              _,
              {
                className: "title",
                bold: a === j.UNREAD,
                size: "sm",
                children: h
              }
            ),
            s ? /* @__PURE__ */ u.jsx(H, { className: "message", bold: !1, children: b }) : /* @__PURE__ */ u.jsx(_, { className: "message--one-liner", size: "sm", children: b }),
            !s && l && /* @__PURE__ */ u.jsx(
              H,
              {
                "aria-label": "date-time",
                className: "date-time",
                children: S
              }
            )
          ] })
        ] }),
        s && r && /* @__PURE__ */ u.jsx(
          P,
          {
            color: "black-white",
            icon: /* @__PURE__ */ u.jsx(G, {}),
            className: "close",
            "aria-label": "close",
            onClick: E,
            size: "sm",
            variant: "tertiary"
          }
        ),
        !s && /* @__PURE__ */ u.jsxs("div", { className: "buttons", children: [
          a === j.UNREAD && /* @__PURE__ */ u.jsx(
            P,
            {
              color: "black",
              icon: /* @__PURE__ */ u.jsx(K, {}),
              className: U("icon", "mark-as-read"),
              "aria-label": "mark-as-read",
              onClick: (d) => {
                d.preventDefault(), d.stopPropagation(), w == null || w(d);
              },
              size: "sm",
              variant: "tertiary"
            }
          ),
          /* @__PURE__ */ u.jsx(
            P,
            {
              color: "black",
              icon: /* @__PURE__ */ u.jsx(Z, {}),
              className: U("icon", "delete"),
              "aria-label": "delete",
              onClick: E,
              size: "sm",
              variant: "tertiary"
            }
          )
        ] })
      ]
    }
  );
};
export {
  Te as Notification
};
