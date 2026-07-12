import { j as o } from "./jsx-runtime-DmTjM30f.js";
import * as P from "react";
import we, { forwardRef as z, useContext as Re, useRef as re, useEffect as J, useState as Q } from "react";
import { c as S } from "./clsx-OuTLNxxd.js";
import "./components/Typography/base.js";
import { Heading as dt } from "./components/Typography/heading/index.js";
import { Text as We } from "./components/Typography/text/index.js";
import { reactNodeToString as ye, getFormatValue as ze, KEY as ke } from "./utils/common-utils.js";
import { c as le, g as ut } from "./_commonjsHelpers-BkfeUUK-.js";
import ot from "react-dom";
import { CaptionText as Oe } from "./components/Typography/caption/index.js";
import { Link as pt } from "./components/Link/index.js";
import { Button as ue } from "./components/Button/base/index.js";
import xe from "./components/Input/base/index.js";
import { useDropdown as pe } from "./hooks/useDropdown/index.js";
import { DropdownProvider as Ce } from "./providers/dropdown/dropdownProvider.js";
import { useBreakpoints as Ee } from "./hooks/useBreakpoints/index.js";
import mt, { ActionSheetContext as $e } from "./components/ActionSheet/root/index.js";
import "./components/Button/social/index.js";
import { IconButton as Pe } from "./components/Button/icon-button/index.js";
import ft from "./components/ActionSheet/content/index.js";
import vt from "./components/ActionSheet/handle-bar/index.js";
import ht from "./components/ActionSheet/portal/index.js";
import { DropdownContext as gt } from "./providers/dropdown/dropdownContext.js";
import { D as rt, F as wt } from "./index-C1BOoRZp.js";
import './assets/stepper.css';import './assets/toggle-switch.css';import './assets/segmented-control.css';import './assets/section-message.css';import './assets/pagination-base.css';import './assets/spinner.css';import './assets/breadcrumbs.css';import './assets/date-picker.css';import './assets/wheel-picker-base.css';import './assets/password-validation.css';import './assets/divider.css';import './assets/snackbar-controller.css';/* empty css                 */
import "./components/Atom/dropdown/title/index.js";
import { ItemContainer as xt } from "./components/Atom/dropdown/item-container/index.js";
import { DatePicker as Ge } from "./components/Atom/Calendar/index.js";
/* empty css                             */
/* empty css                           */
import { d as ge } from "./dayjs.min-DrYbymKu.js";
import "./lodash-rsqVyylH.js";
import { s as Me } from "./index-CQbz1p6_.js";
/* empty css                     */
import "./components/Badge/index.js";
/* empty css                     */
import "./providers/breakpoint/breakpointContext.js";
import "./components/Chip/index.js";
import "./components/Input/password-field/index.js";
import { SearchField as bt } from "./components/Input/search-field/index.js";
import "./components/Input/text-field/index.js";
import "./components/Input/text-field-addon/index.js";
import "./components/Input/textarea/index.js";
import { WheelPickerContainer as nt } from "./components/Atom/WheelPicker/wheel-picker/index.js";
import { TimeWheelPickerContainer as _t } from "./components/Atom/WheelPicker/time-wheel-picker/index.js";
import "./components/Loader/skeleton/index.js";
/* empty css                 */
import { ModalHeader as jt } from "./components/Modal/base/modal-header.js";
import { ModalBody as yt } from "./components/Modal/base/modal-body.js";
import "./components/Navigation/index.js";
import "./components/Notification/notification-icon.js";
/* empty css                         */
/* empty css                         */
import "./components/SegmentedControl/segment.js";
/* empty css                           */
import { F as Rt } from "./LabelPairedCircleInfoSmRegularIcon-Jml8YvFM.js";
import { F as Pt } from "./index-7B-lASoi.js";
import "./components/SelectionControl/radio/radio-group/index.js";
/* empty css                       */
/* empty css                 */
import "./providers/snackbar/snackbarContext.js";
import "./components/Tab/index.js";
import "./components/Tag/index.js";
import { FlagsMap as Be } from "./components/Input/input-phone-number/country-flags.js";
import { a as Ct } from "./index-EY1gwl5O.js";
import Et from "./components/Button/dropdown/dropdown-content.js";
import Mt from "./components/Button/dropdown/dropdown-head.js";
const Nt = ({ title: e, titleId: t, ...n }, i) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 22, viewBox: "0 0 11 22", role: "img", ref: i, "aria-labelledby": t, ...n },
  e ? P.createElement("title", { id: t }, e) : null,
  P.createElement(
    "g",
    null,
    P.createElement("path", { d: "m9.684 7.496-3.282 3.281 3.254 3.254a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0L5.473 11.68l-3.254 3.254a.6.6 0 0 1-.903 0c-.273-.246-.273-.657 0-.93L4.57 10.75 1.316 7.496c-.273-.246-.273-.656 0-.93.246-.246.657-.246.93 0L5.5 9.848l3.254-3.254c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902" })
  ),
  P.createElement(
    "defs",
    null,
    P.createElement(
      "clipPath",
      { id: "2b4794a945808cfca1328a2cddb6aec8__a" },
      P.createElement("path", { d: "M0 0h11v22H0z" })
    )
  )
), kt = z(Nt), Ot = ({ title: e, titleId: t, ...n }, i) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 13, height: 22, viewBox: "0 0 13 22", role: "img", ref: i, "aria-labelledby": t, ...n },
  e ? P.createElement("title", { id: t }, e) : null,
  P.createElement(
    "g",
    null,
    P.createElement("path", { d: "M12.188 10.75a.45.45 0 0 1-.438.438H1.25a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437h10.5a.47.47 0 0 1 .438.437" })
  ),
  P.createElement(
    "defs",
    null,
    P.createElement(
      "clipPath",
      { id: "6960c367eebbbbd16d788a7ec242e181__a" },
      P.createElement("path", { d: "M0 0h13v22H0z" })
    )
  )
), $t = z(Ot), qt = ({ title: e, titleId: t, ...n }, i) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 13, height: 22, viewBox: "0 0 13 22", role: "img", ref: i, "aria-labelledby": t, ...n },
  e ? P.createElement("title", { id: t }, e) : null,
  P.createElement(
    "g",
    null,
    P.createElement("path", { d: "M6.938 5.5v4.813h4.812a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H6.938V16a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438v-4.812H1.25a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437h4.813V5.5a.45.45 0 0 1 .437-.437.47.47 0 0 1 .438.437" })
  ),
  P.createElement(
    "defs",
    null,
    P.createElement(
      "clipPath",
      { id: "49593f687d6be52155263aa4ff7f7bf0__a" },
      P.createElement("path", { d: "M0 0h13v22H0z" })
    )
  )
), Lt = z(qt), Ft = ({ title: e, titleId: t, ...n }, i) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 24, viewBox: "0 0 12 24", role: "img", ref: i, "aria-labelledby": t, ...n },
  e ? P.createElement("title", { id: t }, e) : null,
  P.createElement(
    "g",
    null,
    P.createElement("path", { d: "m10.781 8.281-3.75 3.75 3.719 3.719a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-3.75-3.718L2.25 16.78a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062L4.937 12 1.22 8.281c-.313-.281-.313-.75 0-1.062.281-.282.75-.282 1.062 0L6 10.969 9.719 7.25c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031" })
  ),
  P.createElement(
    "defs",
    null,
    P.createElement(
      "clipPath",
      { id: "862778728fa93d18e26607d369402e6d__a" },
      P.createElement("path", { d: "M0 0h12v24H0z" })
    )
  )
), St = z(Ft), It = ({ iconSize: e = "md", title: t, titleId: n, ...i }, c) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Me[e], role: "img", ref: c, "aria-labelledby": n, ...i },
  t ? P.createElement("title", { id: n }, t) : null,
  P.createElement("path", { d: "M11.625 6.5c.313 0 .625.313.625.625V9h7.5V7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625V9h1.25c1.367 0 2.5 1.133 2.5 2.5V24c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5V11.5c0-1.367 1.094-2.5 2.5-2.5H11V7.125c0-.312.273-.625.625-.625M23.5 14h-15v10c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25zm-1.25-3.75H9.75c-.703 0-1.25.586-1.25 1.25v1.25h15V11.5c0-.664-.586-1.25-1.25-1.25" })
), Dt = z(It), Tt = ({ iconSize: e = "md", title: t, titleId: n, ...i }, c) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Me[e], role: "img", ref: c, "aria-labelledby": n, ...i },
  t ? P.createElement("title", { id: n }, t) : null,
  P.createElement("path", { d: "M22.25 9.625H9.75a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-12.5c0-.312-.312-.625-.625-.625M9.75 7.75h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5" })
), Yt = z(Tt), zt = ({ iconSize: e = "md", title: t, titleId: n, ...i }, c) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Me[e], role: "img", ref: c, "aria-labelledby": n, ...i },
  t ? P.createElement("title", { id: n }, t) : null,
  P.createElement("path", { d: "M9.75 7.75h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5m3.438 7.813a.925.925 0 0 0-.938.937c0 .547.39.938.938.938h5.624c.508 0 .938-.391.938-.938a.95.95 0 0 0-.937-.937z" })
), Bt = z(zt), Ht = ({ iconSize: e = "md", title: t, titleId: n, ...i }, c) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Me[e], role: "img", ref: c, "aria-labelledby": n, ...i },
  t ? P.createElement("title", { id: n }, t) : null,
  P.createElement("path", { d: "m15.336 22.164-7.5-7.5c-.39-.351-.39-.937 0-1.328.351-.352.937-.352 1.328 0L16 20.21l6.836-6.836c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-7.539 7.5a.856.856 0 0 1-1.29 0" })
), Vt = z(Ht), Wt = ({ iconSize: e = "md", title: t, titleId: n, ...i }, c) => P.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...Me[e], role: "img", ref: c, "aria-labelledby": n, ...i },
  t ? P.createElement("title", { id: n }, t) : null,
  P.createElement("path", { d: "M18.5 7.75v.625c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25V7.75h-1.25C11.547 7.75 11 8.336 11 9v15c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25V9c0-.664-.586-1.25-1.25-1.25zm-1.25 0h-2.5v.625h2.5zM9.75 9c0-1.367 1.094-2.5 2.5-2.5h7.5c1.367 0 2.5 1.133 2.5 2.5v15c0 1.406-1.133 2.5-2.5 2.5h-7.5a2.47 2.47 0 0 1-2.5-2.5z" })
), At = z(Wt), Ke = z(
  ({
    children: e,
    className: t,
    isAutocomplete: n = !1,
    value: i,
    onClickDropdown: c,
    fullHeightOnOpen: m = !0,
    onChange: f,
    containerClassName: x,
    contentClassName: a,
    actionSheetFooter: r,
    label: l,
    headComponent: u,
    noActionSheet: d = !1,
    contentAlign: g = "left",
    noAutoClose: w = !1,
    disabled: v,
    actionSheetDropdown: s = !1,
    ...p
  }, h) => {
    if (!Re(gt))
      throw new Error(
        "Custom dropdown must be used within a DropdownProvider"
      );
    const _ = re(null), E = re(null), M = re(null), C = re(null), { isOpen: R, open: F, close: y, selectedValue: O, setSelectedValue: $ } = pe(
      [E, M, C],
      w
    ), { isMobile: N } = Ee();
    J(() => {
      i && $(i);
    }, [i]);
    const j = (q) => {
      if (!v) {
        const D = _.current;
        if (D && (D == null || D.focus()), n && R) return;
        c == null || c(q), R ? y() : F();
      }
    }, k = (q) => {
      const { value: D } = q.target;
      $(!f && !D ? "" : D), f == null || f(q);
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: h,
        className: S(
          "quill-custom-dropdown__container",
          x
        ),
        children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              ref: E,
              onClick: j,
              className: "quill-custom-dropdown__head",
              children: u || /* @__PURE__ */ o.jsx(
                xe,
                {
                  dropdown: !0,
                  ref: _,
                  isDropdownOpen: R,
                  readOnly: !n,
                  value: O,
                  className: S(
                    "quill-custom-dropdown__input",
                    `quill-custom-dropdown__input--hasValue--${!!O}`,
                    t
                  ),
                  onChange: k,
                  type: "select",
                  label: l,
                  ...p
                }
              )
            }
          ),
          !s && (!N || d) ? R && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: S(
                "quill-custom-dropdown__content",
                `quill-custom-dropdown__content-align--${g}`,
                a
              ),
              ref: C,
              children: e
            }
          ) : /* @__PURE__ */ o.jsx(T.Root, { isOpen: R, onClose: () => y(), children: /* @__PURE__ */ o.jsxs(
            T.Portal,
            {
              shouldCloseOnDrag: !0,
              fullHeightOnOpen: m,
              ref: M,
              children: [
                l && /* @__PURE__ */ o.jsx(T.Header, { title: l }),
                /* @__PURE__ */ o.jsx(T.Content, { children: e }),
                /* @__PURE__ */ o.jsx(T.Footer, { ...r })
              ]
            }
          ) })
        ]
      }
    );
  }
), Ae = z(
  ({ children: e, withProvider: t = !0, onOpen: n, onClose: i, ...c }, m) => t ? /* @__PURE__ */ o.jsx(Ce, { onOpen: n, onClose: i, children: /* @__PURE__ */ o.jsx(Ke, { ref: m, ...c, children: e }) }) : /* @__PURE__ */ o.jsx(Ke, { ref: m, ...c, children: e })
);
var it = { exports: {} };
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(le, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, c = /\d/, m = /\d\d/, f = /\d\d?/, x = /\d*[^-_:/,()\s\d]+/, a = {}, r = function(s) {
      return (s = +s) + (s > 68 ? 1900 : 2e3);
    }, l = function(s) {
      return function(p) {
        this[s] = +p;
      };
    }, u = [/[+-]\d\d:?(\d\d)?|Z/, function(s) {
      (this.zone || (this.zone = {})).offset = function(p) {
        if (!p || p === "Z") return 0;
        var h = p.match(/([+-]|\d\d)/g), b = 60 * h[1] + (+h[2] || 0);
        return b === 0 ? 0 : h[0] === "+" ? -b : b;
      }(s);
    }], d = function(s) {
      var p = a[s];
      return p && (p.indexOf ? p : p.s.concat(p.f));
    }, g = function(s, p) {
      var h, b = a.meridiem;
      if (b) {
        for (var _ = 1; _ <= 24; _ += 1) if (s.indexOf(b(_, 0, p)) > -1) {
          h = _ > 12;
          break;
        }
      } else h = s === (p ? "pm" : "PM");
      return h;
    }, w = { A: [x, function(s) {
      this.afternoon = g(s, !1);
    }], a: [x, function(s) {
      this.afternoon = g(s, !0);
    }], Q: [c, function(s) {
      this.month = 3 * (s - 1) + 1;
    }], S: [c, function(s) {
      this.milliseconds = 100 * +s;
    }], SS: [m, function(s) {
      this.milliseconds = 10 * +s;
    }], SSS: [/\d{3}/, function(s) {
      this.milliseconds = +s;
    }], s: [f, l("seconds")], ss: [f, l("seconds")], m: [f, l("minutes")], mm: [f, l("minutes")], H: [f, l("hours")], h: [f, l("hours")], HH: [f, l("hours")], hh: [f, l("hours")], D: [f, l("day")], DD: [m, l("day")], Do: [x, function(s) {
      var p = a.ordinal, h = s.match(/\d+/);
      if (this.day = h[0], p) for (var b = 1; b <= 31; b += 1) p(b).replace(/\[|\]/g, "") === s && (this.day = b);
    }], w: [f, l("week")], ww: [m, l("week")], M: [f, l("month")], MM: [m, l("month")], MMM: [x, function(s) {
      var p = d("months"), h = (d("monthsShort") || p.map(function(b) {
        return b.slice(0, 3);
      })).indexOf(s) + 1;
      if (h < 1) throw new Error();
      this.month = h % 12 || h;
    }], MMMM: [x, function(s) {
      var p = d("months").indexOf(s) + 1;
      if (p < 1) throw new Error();
      this.month = p % 12 || p;
    }], Y: [/[+-]?\d+/, l("year")], YY: [m, function(s) {
      this.year = r(s);
    }], YYYY: [/\d{4}/, l("year")], Z: u, ZZ: u };
    function v(s) {
      var p, h;
      p = s, h = a && a.formats;
      for (var b = (s = p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(y, O, $) {
        var N = $ && $.toUpperCase();
        return O || h[$] || n[$] || h[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, k, q) {
          return k || q.slice(1);
        });
      })).match(i), _ = b.length, E = 0; E < _; E += 1) {
        var M = b[E], C = w[M], R = C && C[0], F = C && C[1];
        b[E] = F ? { regex: R, parser: F } : M.replace(/^\[|\]$/g, "");
      }
      return function(y) {
        for (var O = {}, $ = 0, N = 0; $ < _; $ += 1) {
          var j = b[$];
          if (typeof j == "string") N += j.length;
          else {
            var k = j.regex, q = j.parser, D = y.slice(N), G = k.exec(D)[0];
            q.call(O, G), y = y.replace(G, "");
          }
        }
        return function(K) {
          var ee = K.afternoon;
          if (ee !== void 0) {
            var B = K.hours;
            ee ? B < 12 && (K.hours += 12) : B === 12 && (K.hours = 0), delete K.afternoon;
          }
        }(O), O;
      };
    }
    return function(s, p, h) {
      h.p.customParseFormat = !0, s && s.parseTwoDigitYear && (r = s.parseTwoDigitYear);
      var b = p.prototype, _ = b.parse;
      b.parse = function(E) {
        var M = E.date, C = E.utc, R = E.args;
        this.$u = C;
        var F = R[1];
        if (typeof F == "string") {
          var y = R[2] === !0, O = R[3] === !0, $ = y || O, N = R[2];
          O && (N = R[2]), a = this.$locale(), !y && N && (a = h.Ls[N]), this.$d = function(D, G, K, ee) {
            try {
              if (["x", "X"].indexOf(G) > -1) return new Date((G === "X" ? 1e3 : 1) * D);
              var B = v(G)(D), X = B.year, I = B.month, te = B.day, W = B.hours, Y = B.minutes, oe = B.seconds, me = B.milliseconds, A = B.zone, fe = B.week, ve = /* @__PURE__ */ new Date(), ae = te || (X || I ? 1 : ve.getDate()), ie = X || ve.getFullYear(), U = 0;
              X && !I || (U = I > 0 ? I - 1 : ve.getMonth());
              var Z, V = W || 0, H = Y || 0, ne = oe || 0, ce = me || 0;
              return A ? new Date(Date.UTC(ie, U, ae, V, H, ne, ce + 60 * A.offset * 1e3)) : K ? new Date(Date.UTC(ie, U, ae, V, H, ne, ce)) : (Z = new Date(ie, U, ae, V, H, ne, ce), fe && (Z = ee(Z).week(fe).toDate()), Z);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(M, F, C, h), this.init(), N && N !== !0 && (this.$L = this.locale(N).$L), $ && M != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (F instanceof Array) for (var j = F.length, k = 1; k <= j; k += 1) {
          R[1] = F[k - 1];
          var q = h.apply(this, R);
          if (q.isValid()) {
            this.$d = q.$d, this.$L = q.$L, this.init();
            break;
          }
          k === j && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else _.call(this, E);
      };
    };
  });
})(it);
var Ut = it.exports;
const Gt = /* @__PURE__ */ ut(Ut);
ge.extend(Gt);
const be = "DD/MM/YYYY", Kt = z(
  ({
    label: e,
    textAlignment: t = "left",
    inputSize: n = "lg",
    status: i = "neutral",
    isAutocomplete: c = !1,
    fullHeightOnOpen: m = !0,
    className: f,
    actionSheetFooter: x,
    datePickerProps: a = { selectRange: !1 },
    onSelectDate: r,
    onSearch: l,
    disabled: u,
    value: d,
    ...g
  }, w) => {
    const [v, s] = Q(), p = re(null), h = re(null), b = re(null), { isOpen: _, open: E, close: M } = pe([
      h,
      b
    ]), { isMobile: C } = Ee(), {
      selectRange: R,
      className: F,
      ...y
    } = a;
    J(() => {
      s(d);
    }, [d]);
    const O = (j) => {
      var k;
      c && _ && ((k = p.current) != null && k.contains(j.target)) || (_ ? M() : E());
    }, $ = (j) => {
      const k = j.target.value;
      l == null || l(k), (ge(k, be, !0).isValid() || k === "") && s(k);
    }, N = ye(e);
    return J(() => {
      var j;
      _ && ((j = p.current) == null || j.focus()), v && p.current && (ge(p.current.value, be, !0).isValid() || (p.current.value = v));
    }, [_]), /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: S(
          "datepicker__wrapper",
          _ && "datepicker__wrapper--open",
          u && "datepicker__wrapper--disabled"
        ),
        ref: h,
        children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              onClick: O,
              ref: w,
              "data-testid": "input-container",
              children: /* @__PURE__ */ o.jsx(
                xe,
                {
                  leftIcon: /* @__PURE__ */ o.jsx(
                    Dt,
                    {
                      iconSize: "sm",
                      fill: "var(--semantic-color-monochrome-textIcon-normal-high)"
                    }
                  ),
                  ref: p,
                  "data-testid": "calendar-input",
                  label: N,
                  dropdown: !0,
                  disabled: u,
                  textAlignment: t,
                  inputSize: n,
                  status: i,
                  isDropdownOpen: _,
                  readOnly: !c,
                  value: v,
                  className: S("datepicker__input", f),
                  onChange: $,
                  formatProps: {
                    format: "##/##/####",
                    mask: "_"
                  },
                  ...g
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: S(
                "datepicker-dropdown__menu",
                _ ? "datepicker-dropdown__menu--open" : "datepicker-dropdown__menu--close",
                `datepicker-dropdown__menu--${t}`
              ),
              children: C ? /* @__PURE__ */ o.jsx(
                T.Root,
                {
                  isOpen: _,
                  onClose: () => M(),
                  children: /* @__PURE__ */ o.jsxs(
                    T.Portal,
                    {
                      shouldCloseOnDrag: !0,
                      fullHeightOnOpen: m,
                      ref: b,
                      children: [
                        e && /* @__PURE__ */ o.jsx(T.Header, { title: e }),
                        /* @__PURE__ */ o.jsx(T.Content, { children: /* @__PURE__ */ o.jsx(
                          Ge,
                          {
                            "data-testid": "calendar",
                            value: v && ge(v, be).toDate(),
                            hasFixedWidth: !0,
                            onFormattedDate: (j) => {
                              s(j), r == null || r(
                                ge(
                                  j,
                                  be
                                ).toDate()
                              );
                            },
                            onChange: (j) => {
                              r == null || r(j), M();
                            },
                            className: S(
                              "datepicker__container",
                              F
                            ),
                            selectRange: R,
                            ...y
                          }
                        ) }),
                        /* @__PURE__ */ o.jsx(T.Footer, { ...x })
                      ]
                    }
                  )
                }
              ) : _ && /* @__PURE__ */ o.jsx(
                Ge,
                {
                  "data-testid": "calendar",
                  value: v && ge(v, be).toDate(),
                  hasFixedWidth: !0,
                  onFormattedDate: (j) => {
                    s(j), r == null || r(
                      ge(j, be).toDate()
                    );
                  },
                  onChange: (j) => {
                    r == null || r(j), M();
                  },
                  className: S(
                    "datepicker__container",
                    F
                  ),
                  selectRange: R,
                  ...y
                }
              )
            }
          )
        ]
      }
    );
  }
), $r = z(({ ...e }, t) => /* @__PURE__ */ o.jsx(Ce, { children: /* @__PURE__ */ o.jsx(Kt, { ref: t, ...e }) })), Xt = ({
  value: e,
  selectedText: t,
  ...n
}) => {
  const { isOpen: i, setSelectedValue: c } = pe(), m = re(null);
  return J(() => {
    e && c(e);
  }, [e]), J(() => {
    var f;
    i && ((f = m.current) == null || f.focus());
  }, [i]), /* @__PURE__ */ o.jsx(
    xe,
    {
      ref: m,
      isDropdownOpen: i,
      value: t,
      ...n
    }
  );
}, Zt = ({
  item: e,
  onSelectOption: t,
  setSelectedText: n,
  closeOnItemClick: i,
  ...c
}) => {
  const { selectedValue: m, setSelectedValue: f, close: x } = pe(), a = () => {
    e.value && (f(e.value), n(ye(e.text)), t == null || t(e.value), i && x());
  };
  return /* @__PURE__ */ o.jsx(
    rt,
    {
      selected: (m == null ? void 0 : m.toString()) === e.value,
      onClick: a,
      ...c
    }
  );
}, qr = z(
  ({
    disabled: e,
    label: t,
    options: n,
    textAlignment: i = "left",
    inputSize: c = "lg",
    status: m = "neutral",
    name: f,
    wrapperClassName: x,
    listHeight: a,
    onSearch: r,
    onSelectOption: l,
    value: u,
    isAutocomplete: d = !1,
    fullHeightOnOpen: g = !1,
    closeOnItemClick: w = !0,
    containerClassName: v,
    noActionSheet: s,
    actionSheetDropdown: p,
    ...h
  }, b) => {
    const [_, E] = Q(n), [M, C] = Q(""), { isMobile: R } = Ee();
    J(() => {
      E(n);
    }, [n]), J(() => {
      if (u) {
        const y = _.find((O) => O.value === u);
        y && C(ye(y.text));
      }
    }, [u]);
    const F = !R && !p ? S(
      "dropdown__container",
      a || "dropdown__container--height",
      `dropdown__container--size-${c}`
    ) : void 0;
    return /* @__PURE__ */ o.jsx(
      Ae,
      {
        className: S("dropdown__wrapper", x),
        fullHeightOnOpen: g,
        ref: b,
        isAutocomplete: d,
        containerClassName: v,
        noActionSheet: s,
        actionSheetDropdown: p,
        headComponent: /* @__PURE__ */ o.jsx(
          Xt,
          {
            "data-testid": "dropdown-input",
            disabled: e,
            label: ye(t),
            name: f,
            dropdown: !0,
            textAlignment: i,
            inputSize: c,
            status: m,
            onChange: (y) => {
              const O = y.target.value, $ = n.filter(
                (N) => {
                  var j;
                  return (j = N.value) == null ? void 0 : j.toLowerCase().includes(O.toLowerCase());
                }
              );
              E(
                $.length > 0 ? $ : n
              ), r == null || r(O);
            },
            readOnly: !d,
            type: "select",
            value: u,
            selectedText: M,
            ...h
          }
        ),
        children: /* @__PURE__ */ o.jsx("div", { className: F, children: _.map((y) => /* @__PURE__ */ o.jsx(
          Zt,
          {
            item: y,
            label: y.text,
            size: c,
            setSelectedText: C,
            textAlignment: i,
            onSelectOption: l,
            closeOnItemClick: w
          },
          y.value
        )) })
      }
    );
  }
), Qt = ({
  addOnVariant: e = "outline",
  addOnStatus: t = "neutral",
  codeIcon: n = !0,
  size: i = "md",
  codeLabel: c,
  disabled: m,
  fillAddonBorderColor: f
}) => {
  const { isOpen: x, selectedValue: a } = pe(), r = e === "fill" ? { borderColor: f } : {};
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: S(
        "quill-country-code",
        `quill-country-code__variant--${e}`,
        `quill-country-code__size--${i}`,
        x && "quill-country-code__opened",
        m && "quill-country-code__disabled"
      ),
      style: r,
      children: [
        n && /* @__PURE__ */ o.jsx(
          At,
          {
            className: "mobile-icon",
            iconSize: "sm"
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { children: [
          c && i === "lg" && /* @__PURE__ */ o.jsx(
            Oe,
            {
              className: S(
                "quill-country-code__label",
                `quill-country-code__label--${t}`
              ),
              children: c
            }
          ),
          /* @__PURE__ */ o.jsx(
            We,
            {
              className: S(
                "quill-country-code__value",
                x && "focus"
              ),
              size: i === "lg" ? "md" : i,
              children: a
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(
          Vt,
          {
            iconSize: "sm",
            "data-state": x ? "open" : "close",
            className: S(
              "dropdown__transform",
              x && "dropdown__transform-rotate"
            )
          }
        )
      ]
    }
  );
}, Jt = ({
  options: e,
  code: t,
  showFlags: n,
  containerRef: i,
  headcompRef: c,
  onItemClick: m
}) => {
  const [f, x] = Q(""), { isMobile: a } = Ee(), r = re(null), { isOpen: l, close: u } = pe();
  !a && l && Ct([c, r], u);
  const d = (s) => Be[s] ? Be[s] : Be.XX, g = f.toLowerCase(), w = e.filter(
    (s) => s.name.toLowerCase().includes(g) || s.short_code.toLowerCase().includes(g) || s.phone_code.includes(f)
  ), v = () => /* @__PURE__ */ o.jsx("div", { className: "dropdown-wrapper", children: w.map((s) => /* @__PURE__ */ o.jsx(
    rt,
    {
      label: `${s.name} (${s.phone_code})`,
      selected: s.short_code.toLowerCase() === t.toLowerCase(),
      onClick: () => {
        m(s), u();
      },
      leftIcon: n && d(s.short_code.toUpperCase())
    },
    s.short_code
  )) });
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: a ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "phone-code-search", children: /* @__PURE__ */ o.jsx(
      bt,
      {
        inputSize: "sm",
        variant: "fill",
        autoComplete: "off",
        value: f,
        onChange: (s) => {
          x(s.target.value);
        }
      }
    ) }),
    /* @__PURE__ */ o.jsx(v, {})
  ] }) : /* @__PURE__ */ o.jsx(
    xt,
    {
      size: "md",
      height: "md",
      portalContainer: i.current,
      className: "quill-custom-dropdown__content",
      ref: r,
      children: /* @__PURE__ */ o.jsx(v, {})
    }
  ) });
}, eo = z(
  ({
    inputSize: e = "lg",
    variant: t = "outline",
    status: n = "neutral",
    codeIcon: i = !0,
    codeLabel: c,
    fillAddonBorderColor: m,
    countryCodes: f,
    shortCode: x,
    placeholder: a = "00 0000 0000",
    formatProps: r = {
      format: "## #### ####",
      mask: ""
    },
    onCodeChange: l,
    onValueChange: u,
    showFlags: d = !0,
    value: g,
    disabled: w,
    onChange: v,
    ...s
  }, p) => {
    const { isOpen: h } = pe(), b = () => f.find(
      (N) => N.short_code.toLowerCase() === (x == null ? void 0 : x.toLowerCase())
    ) || f[0], [_, E] = Q(b().phone_code), [M, C] = Q(g || ""), R = re(null), F = re(null);
    x = b().short_code, J(() => {
      C(g || "");
    }, [g]), J(() => {
      u == null || u(`${_}${M}`);
    }, [_, M]);
    const y = (N) => {
      E(N.phone_code), l == null || l(N);
    }, O = (N) => {
      N.target.value = N.target.value.replace(/\s+/g, ""), C(N.target.value), v == null || v(N);
    }, $ = /* @__PURE__ */ o.jsx("div", { className: "quill-phone-input-addon", ref: F, children: /* @__PURE__ */ o.jsx(
      Ae,
      {
        value: _,
        label: c,
        headComponent: /* @__PURE__ */ o.jsx(
          Qt,
          {
            addOnVariant: t,
            codeIcon: i,
            size: e,
            codeLabel: c,
            addOnStatus: n,
            fillAddonBorderColor: m,
            disabled: w
          }
        ),
        noAutoClose: !0,
        withProvider: !1,
        disabled: w,
        children: /* @__PURE__ */ o.jsx(
          Jt,
          {
            options: f,
            code: x,
            showFlags: d,
            containerRef: R,
            headcompRef: F,
            onItemClick: y
          }
        )
      }
    ) });
    return /* @__PURE__ */ o.jsx("div", { ref: R, className: "quill-phone-input__container", children: /* @__PURE__ */ o.jsx(
      xe,
      {
        type: "tel",
        value: M,
        placeholder: a,
        addOn: $,
        inputSize: e,
        status: n,
        variant: t,
        formatProps: r,
        onChange: O,
        isDropdownOpen: h,
        disabled: w,
        ...s,
        ref: p
      }
    ) });
  }
), Lr = z(({ ...e }, t) => /* @__PURE__ */ o.jsx(Ce, { children: /* @__PURE__ */ o.jsx(eo, { ...e, ref: t }) })), Fr = z(
  ({
    status: e = "neutral",
    button_position: t = "right",
    inputSize: n = "md",
    value: i,
    buttonColor: c = "black",
    label: m,
    buttonIconPosition: f,
    buttonDisabled: x = !1,
    buttonLabel: a,
    disabled: r,
    buttonCallback: l,
    onChange: u,
    ...d
  }, g) => {
    const [w, v] = Q(!0);
    J(() => {
      v(!i);
    }, [i]);
    const s = e === "neutral" || r, p = `quill-input__wrapper-with_button-${t}--${n}${m ? ` quill-input__wrapper-with_button-${t}--${n}--has-label` : ` quill-input__wrapper-with_button-${t}--${n}--no-label`}`, h = /* @__PURE__ */ o.jsx(
      ue,
      {
        disabled: w || r || x,
        color: c,
        fullWidth: t === "bottom",
        variant: "primary",
        size: n,
        iconPosition: f,
        label: a,
        onClick: () => l == null ? void 0 : l()
      }
    );
    return /* @__PURE__ */ o.jsx(
      xe,
      {
        inputSize: n === "md" ? "lg" : n,
        className: p,
        label: m,
        status: e,
        disabled: r,
        button_position: t,
        showInputButton: s,
        inputButton: h,
        value: i,
        ref: g,
        onChange: (b) => {
          v(!b.target.value), u == null || u(b);
        },
        ...d
      }
    );
  }
), Sr = z((e, t) => {
  const {
    value: n,
    onChange: i,
    disabled: c,
    textAlignment: m,
    placeholder: f = 0,
    unitLeft: x = "",
    unitRight: a = "",
    inputSize: r = "md",
    decimals: l = 2,
    minusDisabled: u = !1,
    plusDisabled: d = !1,
    noStatusIcon: g,
    ...w
  } = e, v = () => /* @__PURE__ */ o.jsx(
    Pe,
    {
      onClick: () => {
        i == null || i({
          target: {
            value: ze(Number(n) - 1, l)
          }
        });
      },
      disabled: c || u,
      variant: "tertiary",
      icon: /* @__PURE__ */ o.jsx($t, {}),
      color: "black-white",
      size: r
    }
  ), s = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    m !== "center" && /* @__PURE__ */ o.jsx(v, {}),
    /* @__PURE__ */ o.jsx(
      Pe,
      {
        onClick: () => {
          i == null || i({
            target: {
              value: ze(Number(n) + 1, l)
            }
          });
        },
        disabled: c || d,
        variant: "tertiary",
        icon: /* @__PURE__ */ o.jsx(Lt, {}),
        color: "black-white",
        size: r
      }
    )
  ] });
  return /* @__PURE__ */ o.jsx(
    xe,
    {
      ...w,
      decimals: l,
      ref: t,
      disabled: c,
      inputSize: r === "md" ? "lg" : r,
      leftIcon: m === "center" && /* @__PURE__ */ o.jsx(v, {}),
      leftPlaceholder: x,
      onChange: i,
      placeholder: f.toLocaleString("en", {
        minimumFractionDigits: l
      }),
      rightPlaceholder: a,
      textAlignment: m,
      triggerActionIcon: s,
      allowDecimals: !0,
      value: n && ze(n, l),
      noStatusIcon: g
    }
  );
}), at = z(
  ({
    data: e,
    children: t,
    className: n,
    values: i = [],
    onClickDropdown: c,
    onValueChange: m,
    containerClassName: f,
    actionSheetFooter: x,
    label: a,
    leftIcon: r,
    rightIcon: l,
    wheelType: u = "Generic",
    is12Hour: d = !0,
    startTimeIn24Format: g,
    selectedTime: w = "00:00",
    container: v = nt,
    containerHeight: s = "100%",
    hoursInterval: p = 1,
    minutesInterval: h = 1,
    ...b
  }, _) => {
    const E = re(null), M = re(null), [C, R] = Q(i), [F, y] = Q(!1), [O, $] = Q(w);
    let N;
    const j = (I, te) => {
      u === "Generic" && R((W) => {
        const Y = [...W];
        return Y[I] = te, Y;
      });
    }, { isOpen: k, open: q, close: D, selectedValue: G, setSelectedValue: K } = pe([E, M]), { isMobile: ee } = Ee();
    u === "Generic" && (N = i.reduce(
      (I, te, W) => {
        if (!(e != null && e[W])) return I;
        const Y = e == null ? void 0 : e[W].find(
          (oe) => oe.value === te
        );
        return W === 0 ? ye(Y == null ? void 0 : Y.label) || (Y == null ? void 0 : Y.value) : `${I ?? ""} ${ye(Y == null ? void 0 : Y.label) || (Y == null ? void 0 : Y.value)}`;
      },
      ""
    )), u === "Time" && (N = (/* @__PURE__ */ new Date(
      `1/1/1 ${O}`
    )).toLocaleTimeString(b.locale || navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: d
    }));
    const B = (I) => {
      c == null || c(I), k ? D() : q();
    }, X = (I) => {
      I.key === ke.ARROW_DOWN && q();
    };
    return J(() => {
      u === "Generic" && (m == null || m(C)), u === "Time" && (m == null || m([G || ""]));
    }, [G]), /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: E,
        className: S(
          "quill-generic-picker__container",
          f
        ),
        children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              ref: _,
              onClick: B,
              onKeyDown: X,
              onMouseDown: () => y(!0),
              onMouseUp: () => y(!1),
              onMouseLeave: () => y(!1),
              children: /* @__PURE__ */ o.jsx(
                xe,
                {
                  dropdown: !0,
                  isDropdownOpen: k,
                  value: G ?? N,
                  autoFocus: !1,
                  autoComplete: "off",
                  readOnly: !0,
                  className: S(
                    "quill-generic-picker__input",
                    `quill-generic-picker__input--is-open-${k && !F}--${b.variant}--${b.status}`,
                    n
                  ),
                  type: "text",
                  label: a,
                  leftIcon: r,
                  rightIcon: l,
                  ...b
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: S(
                "quill-generic-picker__content--container",
                k && "quill-generic-picker__content--container__is-open"
              ),
              children: ee ? /* @__PURE__ */ o.jsx(T.Root, { isOpen: k, onClose: D, children: /* @__PURE__ */ o.jsxs(
                T.Portal,
                {
                  shouldCloseOnDrag: !0,
                  fullHeightOnOpen: !0,
                  ref: M,
                  children: [
                    a && /* @__PURE__ */ o.jsx(T.Header, { title: a }),
                    /* @__PURE__ */ o.jsx(T.Content, { className: "quill-generic-picker__content--hide-scrollbar", children: /* @__PURE__ */ o.jsx(
                      v,
                      {
                        data: e,
                        inputValues: C,
                        close: D,
                        setSelectedValue: K,
                        is12Hour: d,
                        setInputValues: (I, te) => j(
                          I,
                          te
                        ),
                        selectedTime: O,
                        startTimeIn24Format: g,
                        setSelectedTime: $,
                        containerHeight: s,
                        hoursInterval: p,
                        minutesInterval: h,
                        ...b,
                        children: t
                      }
                    ) }),
                    /* @__PURE__ */ o.jsx(
                      T.Footer,
                      {
                        ...x
                      }
                    )
                  ]
                }
              ) }) : /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: S(
                    "quill-generic-picker__content",
                    k && "quill-generic-picker__content__is-open"
                  ),
                  children: /* @__PURE__ */ o.jsx(
                    v,
                    {
                      data: e,
                      inputValues: C,
                      close: D,
                      setSelectedValue: K,
                      is12Hour: d,
                      setInputValues: (I, te) => j(I, te),
                      selectedTime: O,
                      startTimeIn24Format: g,
                      setSelectedTime: $,
                      containerHeight: s,
                      hoursInterval: p,
                      minutesInterval: h,
                      ...b,
                      children: t
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ) });
  }
), Ir = z(({ children: e, ...t }, n) => /* @__PURE__ */ o.jsx(Ce, { children: /* @__PURE__ */ o.jsx(at, { ref: n, ...t, container: nt, children: e }) })), Dr = z(({ children: e, ...t }, n) => /* @__PURE__ */ o.jsx(Ce, { children: /* @__PURE__ */ o.jsx(
  at,
  {
    ref: n,
    ...t,
    wheelType: "Time",
    container: _t,
    children: e
  }
) })), to = {
  sm: "sm",
  md: "sm",
  lg: "md",
  xl: "md"
}, oo = z(
  ({
    options: e,
    checkbox: t,
    closeContentOnClick: n,
    contentTitle: i,
    contentHeight: c = "sm",
    contentClass: m,
    actionSheetFooter: f,
    size: x = "md",
    onSelectionChange: a,
    onOpen: r,
    contentAlign: l,
    onClose: u,
    contentCenter: d = !1,
    ...g
  }, w) => {
    const [v, s] = Q(e);
    J(() => {
      s(e);
    }, [e]);
    const p = (h) => {
      t && s((b) => {
        const _ = b.map(
          (E) => E.id === h ? { ...E, selected: !E.selected } : E
        );
        return a == null || a(_), _;
      });
    };
    return /* @__PURE__ */ o.jsx(
      Ae,
      {
        headComponent: /* @__PURE__ */ o.jsx(Mt, { size: x, ...g, ref: w }),
        onOpen: r,
        onClose: u,
        contentAlign: l,
        actionSheetFooter: f,
        label: i,
        fullHeightOnOpen: !1,
        contentClassName: "quill__dropdown-button__content",
        children: /* @__PURE__ */ o.jsx(
          Et,
          {
            checkbox: t,
            closeContentOnClick: n,
            label: i,
            height: c,
            size: to[x],
            className: m,
            onItemClick: p,
            options: v,
            centered: d
          }
        )
      }
    );
  }
);
oo.displayName = "DropdownButton";
const ro = ({
  className: e,
  title: t,
  description: n,
  icon: i,
  iconPosition: c = "right",
  closeIcon: m,
  centered: f = !0,
  ...x
}) => {
  const { expandable: a } = Re($e), { handleClose: r } = Re($e);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: S(
        "quill-action-sheet--header",
        `quill-action-sheet--header__expandable--${a}`,
        e
      ),
      "data-testid": "action-sheet-header",
      ...x,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "quill-action-sheet--title", children: [
          i && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: S(
                "quill-action-sheet--title--icon",
                `quill-action-sheet--title--icon--${c}`
              ),
              children: i
            }
          ),
          t && /* @__PURE__ */ o.jsx(
            dt.H5,
            {
              centered: f,
              className: "quill-action-sheet--title-text",
              children: t
            }
          ),
          m && /* @__PURE__ */ o.jsx(
            Pe,
            {
              color: "black-white",
              icon: m,
              className: S(
                "quill-action-sheet--title--icon",
                "quill-action-sheet--title--icon--close"
              ),
              onClick: r,
              size: "md",
              variant: "tertiary"
            }
          )
        ] }),
        n && /* @__PURE__ */ o.jsx(
          We,
          {
            centered: f,
            className: "quill-action-sheet--description",
            children: n
          }
        )
      ]
    }
  );
}, no = ({
  primaryAction: e,
  secondaryAction: t,
  alignment: n,
  className: i,
  shouldCloseOnPrimaryButtonClick: c = !0,
  shouldCloseOnSecondaryButtonClick: m = !0,
  isPrimaryButtonDisabled: f,
  isSecondaryButtonDisabled: x,
  primaryButtonColor: a = "black-white",
  ...r
}) => {
  const { handleClose: l } = Re($e);
  if (!e && !t) return null;
  const u = () => {
    e == null || e.onAction(), c && (l == null || l());
  }, d = () => {
    t == null || t.onAction(), m && (l == null || l());
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: S(
        "quill-action-sheet--footer",
        `quill-action-sheet--footer__variant--${n}`,
        i
      ),
      ...r,
      children: [
        e && /* @__PURE__ */ o.jsx(
          ue,
          {
            onClick: u,
            color: a,
            size: "lg",
            label: e.content,
            fullWidth: !0,
            disabled: f
          }
        ),
        t && /* @__PURE__ */ o.jsx(
          ue,
          {
            onClick: d,
            variant: "secondary",
            color: "black-white",
            size: "lg",
            label: t.content,
            fullWidth: !0,
            disabled: x
          }
        )
      ]
    }
  );
}, st = ({
  iconComponent: e,
  iconClassName: t,
  ...n
}) => {
  const { handleOpen: i } = Re($e);
  return e ? /* @__PURE__ */ o.jsx(ue, { onClick: i, ...n, children: /* @__PURE__ */ o.jsx(
    e,
    {
      "data-testid": "dt-actionsheet-icon-button",
      className: t
    }
  ) }) : /* @__PURE__ */ o.jsx(ue, { onClick: i, ...n });
};
st.displayName = "Trigger";
const T = ({
  children: e
}) => /* @__PURE__ */ o.jsx(o.Fragment, { children: e });
T.Root = mt;
T.Header = ro;
T.Content = ft;
T.Footer = no;
T.HandleBar = vt;
T.Trigger = st;
T.Portal = ht;
const lt = (e) => {
  const {
    isOpened: t = !1,
    className: n,
    children: i,
    showCrossIcon: c = !0,
    showPrimaryButton: m = !0,
    showSecondaryButton: f = !1,
    shouldCloseOnPrimaryButtonClick: x = !1,
    shouldCloseOnSecondaryButtonClick: a = !1,
    shouldCloseModalOnSwipeDown: r = !1,
    toggleModal: l,
    disableCloseOnOverlay: u = !1,
    hasFooter: d = !0,
    portalId: g,
    primaryButtonLabel: w,
    isPrimaryButtonDisabled: v,
    isSecondaryButtonDisabled: s,
    primaryButtonCallback: p,
    secondaryButtonCallback: h,
    secondaryButtonLabel: b,
    showHandleBar: _,
    isMobile: E,
    isNonExpandable: M = !1,
    buttonColor: C = "black-white",
    handleBarIndex: R,
    ...F
  } = e, [y, O] = Q(t), $ = g && document.getElementById(g) || document.getElementById("modal-root") || document.body;
  J(() => {
    O(t);
  }, [t]);
  const N = () => {
    p == null || p(), x && k();
  }, j = () => {
    h == null || h(), a && k();
  }, k = () => {
    if (l && y) return l(!1);
    O(!1);
  }, q = () => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "quill-modal__content-wrapper", children: i }),
    d && /* @__PURE__ */ o.jsxs("div", { className: "quill-modal__button-wrapper", children: [
      m && /* @__PURE__ */ o.jsx(
        ue,
        {
          color: C,
          fullWidth: !0,
          size: "lg",
          label: w,
          disabled: v,
          onClick: N
        }
      ),
      f && /* @__PURE__ */ o.jsx(
        ue,
        {
          color: "black-white",
          fullWidth: !0,
          size: "lg",
          label: b,
          disabled: s,
          variant: "secondary",
          className: "quill-modal__button",
          onClick: j
        }
      )
    ] })
  ] });
  return !E && y ? ot.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ...F,
        className: "quill-modal__background",
        "data-testid": "dt_overlay",
        onClick: () => {
          u || k();
        },
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: S("quill-modal__container", n),
            onClick: (D) => D.stopPropagation(),
            children: [
              c && /* @__PURE__ */ o.jsx(
                Pe,
                {
                  variant: "tertiary",
                  color: "black-white",
                  size: "lg",
                  className: "quill-modal__close-icon",
                  onClick: k,
                  icon: /* @__PURE__ */ o.jsx(St, {})
                }
              ),
              /* @__PURE__ */ o.jsx(q, {})
            ]
          }
        )
      }
    ),
    $
  ) : /* @__PURE__ */ o.jsx(
    T.Root,
    {
      expandable: !M,
      isOpen: t,
      onClose: k,
      children: /* @__PURE__ */ o.jsx(
        T.Portal,
        {
          ...F,
          showHandlebar: _,
          handleBarPosition: "absolute",
          disableCloseOnOverlay: u,
          portalId: g,
          shouldCloseOnDrag: r,
          handleBarIndex: R,
          children: /* @__PURE__ */ o.jsx(q, {})
        }
      )
    }
  );
};
lt.Header = jt;
lt.Body = yt;
var He = {}, qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.PopoverPortal = void 0;
var io = we, ao = ot, so = function(e) {
  var t = e.container, n = e.element, i = e.scoutElement, c = e.children;
  return (0, io.useLayoutEffect)(function() {
    return t.appendChild(n), t.appendChild(i), function() {
      t.removeChild(n), t.removeChild(i);
    };
  }, [t, n, i]), (0, ao.createPortal)(c, n);
};
qe.PopoverPortal = so;
var Le = {};
(function(e) {
  var t = le && le.__assign || function() {
    return t = Object.assign || function(a) {
      for (var r, l = 1, u = arguments.length; l < u; l++) {
        r = arguments[l];
        for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && (a[d] = r[d]);
      }
      return a;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getNudgedPopoverRect = e.getNewPopoverRect = e.popoverRectForPosition = e.createContainer = e.rectsAreEqual = e.createRect = e.EMPTY_RECT = void 0, e.EMPTY_RECT = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
  var n = function(a) {
    var r = a.top, l = a.left, u = a.width, d = a.height;
    return {
      top: r,
      left: l,
      width: u,
      height: d,
      right: l + u,
      bottom: r + d
    };
  };
  e.createRect = n;
  var i = function(a, r) {
    return a === r || (a == null ? void 0 : a.bottom) === (r == null ? void 0 : r.bottom) && (a == null ? void 0 : a.height) === (r == null ? void 0 : r.height) && (a == null ? void 0 : a.left) === (r == null ? void 0 : r.left) && (a == null ? void 0 : a.right) === (r == null ? void 0 : r.right) && (a == null ? void 0 : a.top) === (r == null ? void 0 : r.top) && (a == null ? void 0 : a.width) === (r == null ? void 0 : r.width);
  };
  e.rectsAreEqual = i;
  var c = function(a) {
    var r = a.containerStyle, l = a.containerClassName, u = a.id, d = window.document.createElement("div");
    return d.id = u, l && (d.className = l), Object.assign(d.style, r), d;
  };
  e.createContainer = c;
  var m = function(a, r, l, u, d) {
    var g = r.left + r.width / 2, w = r.top + r.height / 2, v = l.width, s = l.height, p, h;
    switch (a) {
      case "left":
        p = w - s / 2, h = r.left - u - v, d === "start" && (p = r.top), d === "end" && (p = r.bottom - s);
        break;
      case "bottom":
        p = r.bottom + u, h = g - v / 2, d === "start" && (h = r.left), d === "end" && (h = r.right - v);
        break;
      case "right":
        p = w - s / 2, h = r.right + u, d === "start" && (p = r.top), d === "end" && (p = r.bottom - s);
        break;
      default:
        p = r.top - s - u, h = g - v / 2, d === "start" && (h = r.left), d === "end" && (h = r.right - v);
        break;
    }
    return (0, e.createRect)({ left: h, top: p, width: v, height: s });
  };
  e.popoverRectForPosition = m;
  var f = function(a, r) {
    var l = a.position, u = a.align, d = a.childRect, g = a.popoverRect, w = a.boundaryRect, v = a.padding, s = a.reposition, p = (0, e.popoverRectForPosition)(l, d, g, v, u), h = s && (l === "top" && p.top < w.top + r || l === "left" && p.left < w.left + r || l === "right" && p.right > w.right - r || l === "bottom" && p.bottom > w.bottom - r);
    return {
      rect: p,
      boundaryViolation: h
    };
  };
  e.getNewPopoverRect = f;
  var x = function(a, r, l) {
    var u = r.top + l, d = r.left + l, g = r.right - l, w = r.bottom - l, v = a.top < u ? u : a.top;
    v = v + a.height > w ? w - a.height : v;
    var s = a.left < d ? d : a.left;
    return s = s + a.width > g ? g - a.width : s, (0, e.createRect)(t(t({}, a), { top: v, left: s }));
  };
  e.getNudgedPopoverRect = x;
})(Le);
var Fe = {}, Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.useElementRef = void 0;
var Xe = we, lo = Le, co = function(e) {
  var t = e.containerClassName, n = e.containerStyle, i = e.id, c = (0, Xe.useRef)(), m = (0, Xe.useMemo)(function() {
    return (0, lo.createContainer)({ containerStyle: n, containerClassName: t, id: i });
  }, [t, n, i]);
  return c.current = m, c;
};
Se.useElementRef = co;
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.usePopover = void 0;
var uo = we, _e = Le, Ze = Se, po = {
  position: "fixed",
  overflow: "visible",
  top: "0px",
  left: "0px"
}, mo = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "0px",
  height: "0px",
  visibility: "hidden"
}, fo = function(e) {
  var t = e.isOpen, n = e.childRef, i = e.positions, c = e.containerClassName, m = e.parentElement, f = e.transform, x = e.transformMode, a = e.align, r = e.padding, l = e.reposition, u = e.boundaryInset, d = e.boundaryElement, g = e.onPositionPopover, w = (0, Ze.useElementRef)({ id: "react-tiny-popover-scout", containerStyle: mo }), v = (0, Ze.useElementRef)({
    id: "react-tiny-popover-container",
    containerClassName: c,
    containerStyle: po
  }), s = (0, uo.useCallback)(function(p) {
    var h, b, _ = p === void 0 ? {} : p, E = _.positionIndex, M = E === void 0 ? 0 : E, C = _.parentRect, R = C === void 0 ? m.getBoundingClientRect() : C, F = _.childRect, y = F === void 0 ? (h = n == null ? void 0 : n.current) === null || h === void 0 ? void 0 : h.getBoundingClientRect() : F, O = _.scoutRect, $ = O === void 0 ? (b = w == null ? void 0 : w.current) === null || b === void 0 ? void 0 : b.getBoundingClientRect() : O, N = _.popoverRect, j = N === void 0 ? v.current.getBoundingClientRect() : N, k = _.boundaryRect, q = k === void 0 ? d === m ? R : d.getBoundingClientRect() : k;
    if (!(!y || !R || !t)) {
      if (f && x === "absolute") {
        var D = typeof f == "function" ? f({
          childRect: y,
          popoverRect: j,
          parentRect: R,
          boundaryRect: q,
          padding: r,
          align: a,
          nudgedTop: 0,
          nudgedLeft: 0,
          boundaryInset: u,
          violations: _e.EMPTY_RECT,
          hasViolations: !1
        }) : f, G = D.top, K = D.left, ee = Math.round(R.left + K - $.left), B = Math.round(R.top + G - $.top);
        v.current.style.transform = "translate(".concat(ee, "px, ").concat(B, "px)"), g({
          childRect: y,
          popoverRect: (0, _e.createRect)({
            left: ee,
            top: B,
            width: j.width,
            height: j.height
          }),
          parentRect: R,
          boundaryRect: q,
          padding: r,
          align: a,
          transform: { top: G, left: K },
          nudgedTop: 0,
          nudgedLeft: 0,
          boundaryInset: u,
          violations: _e.EMPTY_RECT,
          hasViolations: !1
        });
        return;
      }
      var X = M === i.length, I = X ? i[0] : i[M], te = (0, _e.getNewPopoverRect)({
        childRect: y,
        popoverRect: j,
        boundaryRect: q,
        position: I,
        align: a,
        padding: r,
        reposition: l
      }, u), W = te.rect, Y = te.boundaryViolation;
      if (Y && l && !X) {
        s({
          positionIndex: M + 1,
          childRect: y,
          popoverRect: j,
          parentRect: R,
          boundaryRect: q
        });
        return;
      }
      var oe = W.top, me = W.left, A = W.width, fe = W.height, ve = l && !X, ae = (0, _e.getNudgedPopoverRect)(W, q, u), ie = ae.left, U = ae.top, Z = oe, V = me;
      ve && (Z = U, V = ie), Z = Math.round(Z - $.top), V = Math.round(V - $.left), v.current.style.transform = "translate(".concat(V, "px, ").concat(Z, "px)");
      var H = {
        top: q.top + u - Z,
        left: q.left + u - V,
        right: V + A - q.right + u,
        bottom: Z + fe - q.bottom + u
      }, ne = {
        childRect: y,
        popoverRect: (0, _e.createRect)({ left: V, top: Z, width: A, height: fe }),
        parentRect: R,
        boundaryRect: q,
        position: I,
        align: a,
        padding: r,
        nudgedTop: U - oe,
        nudgedLeft: ie - me,
        boundaryInset: u,
        violations: {
          top: H.top <= 0 ? 0 : H.top,
          left: H.left <= 0 ? 0 : H.left,
          right: H.right <= 0 ? 0 : H.right,
          bottom: H.bottom <= 0 ? 0 : H.bottom
        },
        hasViolations: H.top > 0 || H.left > 0 || H.right > 0 || H.bottom > 0
      };
      if (f) {
        g(ne);
        var ce = typeof f == "function" ? f(ne) : f, se = ce.top, L = ce.left;
        v.current.style.transform = "translate(".concat(Math.round(V + (L ?? 0)), "px, ").concat(Math.round(Z + (se ?? 0)), "px)"), ne.nudgedLeft += L ?? 0, ne.nudgedTop += se ?? 0, ne.transform = { top: se, left: L };
      }
      g(ne);
    }
  }, [
    m,
    n,
    w,
    v,
    d,
    t,
    f,
    x,
    i,
    a,
    r,
    l,
    u,
    g
  ]);
  return { positionPopover: s, popoverRef: v, scoutRef: w };
};
Fe.usePopover = fo;
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.useMemoizedArray = void 0;
var Qe = we, vo = function(e) {
  var t = (0, Qe.useRef)(e), n = (0, Qe.useMemo)(function() {
    if (t.current === e)
      return t.current;
    if (t.current.length !== e.length)
      return t.current = e, e;
    for (var i = 0; i < e.length; i += 1)
      if (e[i] !== t.current[i])
        return t.current = e, e;
    return t.current;
  }, [e]);
  return n;
};
Ie.useMemoizedArray = vo;
var Ne = {}, Ve = le && le.__assign || function() {
  return Ve = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Ve.apply(this, arguments);
};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.useArrowContainer = void 0;
var Je = we, ho = function(e) {
  var t = e.childRect, n = e.popoverRect, i = e.position, c = e.arrowSize, m = e.arrowColor, f = (0, Je.useMemo)(function() {
    return {
      padding: c
    };
  }, [c]), x = (0, Je.useMemo)(function() {
    return Ve({ position: "absolute" }, function() {
      var a = c * 2, r = t.top - n.top + t.height / 2 - a / 2, l = t.left - n.left + t.width / 2 - a / 2, u = c, d = n.width - c, g = n.height - c;
      switch (l = l < u ? u : l, l = l + a > d ? d - a : l, r = r < u ? u : r, r = r + a > g ? g - a : r, r = Number.isNaN(r) ? 0 : r, l = Number.isNaN(l) ? 0 : l, i) {
        case "right":
          return {
            borderTop: "".concat(c, "px solid transparent"),
            borderBottom: "".concat(c, "px solid transparent"),
            borderRight: "".concat(c, "px solid ").concat(m),
            left: 0,
            top: r
          };
        case "left":
          return {
            borderTop: "".concat(c, "px solid transparent"),
            borderBottom: "".concat(c, "px solid transparent"),
            borderLeft: "".concat(c, "px solid ").concat(m),
            right: 0,
            top: r
          };
        case "bottom":
          return {
            borderLeft: "".concat(c, "px solid transparent"),
            borderRight: "".concat(c, "px solid transparent"),
            borderBottom: "".concat(c, "px solid ").concat(m),
            top: 0,
            left: l
          };
        case "top":
          return {
            borderLeft: "".concat(c, "px solid transparent"),
            borderRight: "".concat(c, "px solid transparent"),
            borderTop: "".concat(c, "px solid ").concat(m),
            bottom: 0,
            left: l
          };
        default:
          return {
            display: "hidden"
          };
      }
    }());
  }, [
    m,
    c,
    t.height,
    t.left,
    t.top,
    t.width,
    n.height,
    n.left,
    n.top,
    n.width,
    i
  ]);
  return {
    arrowContainerStyle: f,
    arrowStyle: x
  };
};
Ne.useArrowContainer = ho;
var De = {}, je = le && le.__assign || function() {
  return je = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, je.apply(this, arguments);
};
Object.defineProperty(De, "__esModule", { value: !0 });
De.ArrowContainer = void 0;
var et = o, tt = we, go = Ne, wo = function(e) {
  var t = e.childRect, n = e.popoverRect, i = e.position, c = e.arrowColor, m = e.arrowSize, f = e.arrowClassName, x = e.arrowStyle, a = e.className, r = e.children, l = e.style, u = (0, go.useArrowContainer)({
    childRect: t,
    popoverRect: n,
    position: i,
    arrowColor: c,
    arrowSize: m
  }), d = u.arrowContainerStyle, g = u.arrowStyle, w = (0, tt.useMemo)(function() {
    return je(je({}, d), l);
  }, [d, l]), v = (0, tt.useMemo)(function() {
    return je(je({}, g), x);
  }, [g, x]);
  return (0, et.jsxs)("div", { className: a, style: w, children: [(0, et.jsx)("div", { style: v, className: f }), r] });
};
De.ArrowContainer = wo;
(function(e) {
  var t = le && le.__assign || function() {
    return t = Object.assign || function(d) {
      for (var g, w = 1, v = arguments.length; w < v; w++) {
        g = arguments[w];
        for (var s in g) Object.prototype.hasOwnProperty.call(g, s) && (d[s] = g[s]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Popover = e.usePopover = e.ArrowContainer = e.useArrowContainer = void 0;
  var n = o, i = we, c = qe, m = Le, f = Fe;
  Object.defineProperty(e, "usePopover", { enumerable: !0, get: function() {
    return f.usePopover;
  } });
  var x = Ie, a = Ne;
  Object.defineProperty(e, "useArrowContainer", { enumerable: !0, get: function() {
    return a.useArrowContainer;
  } });
  var r = De;
  Object.defineProperty(e, "ArrowContainer", { enumerable: !0, get: function() {
    return r.ArrowContainer;
  } });
  var l = ["top", "left", "right", "bottom"], u = (0, i.forwardRef)(function(d, g) {
    var w = d.isOpen, v = d.children, s = d.content, p = d.positions, h = p === void 0 ? l : p, b = d.align, _ = b === void 0 ? "center" : b, E = d.padding, M = E === void 0 ? 0 : E, C = d.reposition, R = C === void 0 ? !0 : C, F = d.parentElement, y = F === void 0 ? window.document.body : F, O = d.boundaryElement, $ = O === void 0 ? y : O, N = d.containerClassName, j = d.containerStyle, k = d.transform, q = d.transformMode, D = q === void 0 ? "absolute" : q, G = d.boundaryInset, K = G === void 0 ? 0 : G, ee = d.onClickOutside, B = d.clickOutsideCapture, X = B === void 0 ? !1 : B, I = (0, x.useMemoizedArray)(Array.isArray(h) ? h : [h]), te = (0, i.useRef)(!1), W = (0, i.useRef)(), Y = (0, i.useRef)(R), oe = (0, i.useRef)(), me = (0, i.useState)({
      align: _,
      nudgedLeft: 0,
      nudgedTop: 0,
      position: I[0],
      padding: M,
      childRect: m.EMPTY_RECT,
      popoverRect: m.EMPTY_RECT,
      parentRect: m.EMPTY_RECT,
      boundaryRect: m.EMPTY_RECT,
      boundaryInset: K,
      violations: m.EMPTY_RECT,
      hasViolations: !1
    }), A = me[0], fe = me[1], ve = (0, i.useCallback)(function(L) {
      return fe(L);
    }, []), ae = (0, f.usePopover)({
      isOpen: w,
      childRef: oe,
      containerClassName: N,
      parentElement: y,
      boundaryElement: $,
      transform: k,
      transformMode: D,
      positions: I,
      align: _,
      padding: M,
      boundaryInset: K,
      reposition: R,
      onPositionPopover: ve
    }), ie = ae.positionPopover, U = ae.popoverRef, Z = ae.scoutRef;
    (0, i.useLayoutEffect)(function() {
      var L = !0, de = function() {
        var he, Te;
        if (w && L) {
          var Ue = (he = oe == null ? void 0 : oe.current) === null || he === void 0 ? void 0 : he.getBoundingClientRect(), Ye = (Te = U == null ? void 0 : U.current) === null || Te === void 0 ? void 0 : Te.getBoundingClientRect();
          Ue != null && Ye != null && (!(0, m.rectsAreEqual)(Ue, A.childRect) || Ye.width !== A.popoverRect.width || Ye.height !== A.popoverRect.height || A.padding !== M || A.align !== _ || I !== W.current || R !== Y.current) && ie(), I !== W.current && (W.current = I), R !== Y.current && (Y.current = R), L && window.requestAnimationFrame(de);
        }
        te.current = w;
      };
      return window.requestAnimationFrame(de), function() {
        L = !1;
      };
    }, [
      _,
      w,
      M,
      U,
      A.align,
      A.childRect,
      A.padding,
      A.popoverRect.height,
      A.popoverRect.width,
      ie,
      I,
      R
    ]), (0, i.useEffect)(function() {
      var L = U.current;
      return Object.assign(L.style, j), function() {
        Object.keys(j ?? {}).forEach(function(de) {
          return delete L.style[de];
        });
      };
    }, [j, w, U]);
    var V = (0, i.useCallback)(function(L) {
      var de, he;
      w && !(!((de = U.current) === null || de === void 0) && de.contains(L.target)) && !(!((he = oe.current) === null || he === void 0) && he.contains(L.target)) && (ee == null || ee(L));
    }, [w, ee, U]), H = (0, i.useCallback)(function() {
      oe.current && window.requestAnimationFrame(function() {
        return ie();
      });
    }, [ie]);
    (0, i.useEffect)(function() {
      var L = y.ownerDocument.body;
      return L.addEventListener("click", V, X), L.addEventListener("contextmenu", V, X), L.addEventListener("resize", H), function() {
        L.removeEventListener("click", V, X), L.removeEventListener("contextmenu", V, X), L.removeEventListener("resize", H);
      };
    }, [X, V, H, y]);
    var ne = (0, i.useCallback)(function(L) {
      oe.current = L, g != null && (typeof g == "object" ? g.current = L : typeof g == "function" && g(L));
    }, [g]), ce = function() {
      return (0, i.cloneElement)(v, { ref: ne });
    }, se = function() {
      return w ? (0, n.jsx)(c.PopoverPortal, { element: U.current, scoutElement: Z.current, container: y, children: typeof s == "function" ? s(A) : s }) : null;
    };
    return (0, n.jsxs)(n.Fragment, { children: [ce(), se()] });
  });
  e.Popover = (0, i.forwardRef)(function(d, g) {
    return typeof window > "u" ? d.children : (0, n.jsx)(u, t({}, d, { ref: g }));
  });
})(He);
const ct = ({
  as: e,
  tooltipContent: t,
  shouldCloseToolTipOnMouseLeave: n = !0,
  tooltipPosition: i,
  variant: c = "base",
  popoverAlign: m = "center",
  title: f,
  actionText: x,
  tooltipColor: a = "var(--component-textIcon-normal-prominent)",
  tooltipAction: r = "link",
  tooltipActionProps: l,
  hasArrow: u = !0,
  children: d,
  ...g
}) => {
  const [w, v] = Q(!1), s = () => v(!0), p = () => v(!1), h = e || "div";
  return /* @__PURE__ */ o.jsx(
    He.Popover,
    {
      isOpen: w,
      positions: i,
      align: m,
      content: ({ position: b, childRect: _, popoverRect: E }) => {
        const M = /* @__PURE__ */ o.jsx(
          "div",
          {
            style: { backgroundColor: a },
            className: S(
              "tooltip-content",
              `tooltip-content__variant-${c}`
            ),
            children: c === "rich" ? /* @__PURE__ */ o.jsxs("div", { className: "tooltip-content__variant-rich-content", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "tooltip-content__variant-rich-text", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "tooltip-content__variant-rich-header", children: [
                  /* @__PURE__ */ o.jsx(
                    Oe,
                    {
                      color: "var(--component-textIcon-inverse-prominent)",
                      bold: !0,
                      className: "tooltip-content__variant-rich-title",
                      children: f
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    Pe,
                    {
                      icon: /* @__PURE__ */ o.jsx(kt, { fill: "var(--component-textIcon-inverse-prominent)" }),
                      onClick: () => v(!1),
                      className: "tooltip-content__variant-rich-icon",
                      size: "sm",
                      color: "white-black",
                      variant: "tertiary"
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx(Oe, { color: "var(--component-textIcon-inverse-default)", children: t })
              ] }),
              r === "link" ? /* @__PURE__ */ o.jsx(
                pt,
                {
                  color: "white",
                  hasChevron: !0,
                  children: x,
                  ...l
                }
              ) : /* @__PURE__ */ o.jsx(
                ue,
                {
                  color: "white-black",
                  variant: "secondary",
                  ...l,
                  label: x
                }
              )
            ] }) : /* @__PURE__ */ o.jsx(Oe, { color: "var(--component-textIcon-inverse-default)", children: t })
          }
        );
        return u ? /* @__PURE__ */ o.jsx(
          He.ArrowContainer,
          {
            position: b,
            childRect: _,
            popoverRect: E,
            arrowColor: a,
            arrowSize: 4,
            children: M
          }
        ) : M;
      },
      children: /* @__PURE__ */ o.jsx(
        h,
        {
          onMouseEnter: s,
          onMouseLeave: n && p,
          ...g,
          children: d
        }
      )
    }
  );
};
ct.displayName = "Tooltip";
const Tr = z(
  ({
    checked: e = !1,
    disabled: t = !1,
    indeterminate: n = !1,
    infoIconMessage: i,
    infoIconClassName: c,
    size: m = "sm",
    label: f,
    labelClassName: x,
    name: a,
    onChange: r,
    className: l,
    checkboxPosition: u = "left",
    ...d
  }, g) => {
    const [w, v] = Q(e), [s, p] = Q(n);
    J(() => {
      v(e);
    }, [e]), J(() => {
      p(n);
    }, [n]);
    const h = (C) => {
      s ? (p(!s), v(!1)) : v(!w), r == null || r(C);
    }, b = (C) => {
      C.stopPropagation(), h(C);
    }, _ = (C) => {
      C.stopPropagation(), C.key === ke.SPACE && C.preventDefault(), (C.key === ke.ENTER || C.key === ke.SPACE) && h(C);
    }, E = w ? /* @__PURE__ */ o.jsx(
      wt,
      {
        iconSize: "sm",
        className: "quill-checkbox__box-icon"
      }
    ) : /* @__PURE__ */ o.jsx(
      Yt,
      {
        iconSize: "sm",
        className: S(
          "quill-checkbox__box-icon",
          "quill-checkbox__box-icon--pale"
        )
      }
    ), M = m === "sm" ? Rt : Pt;
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: S(
          "quill-checkbox",
          {
            "quill-checkbox--disabled": t
          },
          l
        ),
        children: [
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: S(
                "quill-checkbox__wrapper",
                `quill-checkbox__wrapper--${u}`
              ),
              children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ...d,
                    id: d.id ?? a,
                    className: "quill-checkbox__box",
                    type: "checkbox",
                    checked: w,
                    disabled: t,
                    ref: g,
                    name: a,
                    onChange: b,
                    onKeyDown: _
                  }
                ),
                s ? /* @__PURE__ */ o.jsx(
                  Bt,
                  {
                    iconSize: "sm",
                    className: "quill-checkbox__box-icon"
                  }
                ) : E
              ]
            }
          ),
          /* @__PURE__ */ o.jsx("label", { htmlFor: d.id ?? a, children: /* @__PURE__ */ o.jsx(
            We,
            {
              size: m,
              as: "span",
              className: S(
                "quill-checkbox__label",
                x
              ),
              children: f
            }
          ) }),
          i && /* @__PURE__ */ o.jsx(
            ct,
            {
              shouldCloseToolTipOnMouseLeave: !0,
              tooltipContent: i,
              children: /* @__PURE__ */ o.jsx(
                M,
                {
                  className: S(
                    "quill-checkbox__info-icon",
                    c
                  )
                }
              )
            }
          )
        ]
      }
    );
  }
);
export {
  T as A,
  Ae as C,
  oo as D,
  kt as F,
  Ir as G,
  ro as H,
  qr as I,
  lt as M,
  Sr as T,
  at as W,
  $r as a,
  Lr as b,
  Fr as c,
  Dr as d,
  Tr as e,
  ct as f,
  Qt as g,
  Jt as h,
  no as i,
  st as j
};
