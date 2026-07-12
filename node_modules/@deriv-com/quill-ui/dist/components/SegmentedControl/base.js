import { j as f } from "../../jsx-runtime-DmTjM30f.js";
import A, { useState as p, useEffect as k } from "react";
import { KEY as c } from "../../utils/common-utils.js";
import { Segments as v } from "./segments.js";
import '../../assets/segmented-control.css';/* empty css                               */
const w = ({
  className: E,
  hasAnimation: d,
  options: i = [],
  onChange: u,
  size: y = "md"
}) => {
  const [I, x] = p(!0), [n, O] = p(
    null
  ), r = A.useRef(null), T = (s, t) => {
    var e;
    if (d && (t != null && t.current)) {
      const l = (r == null ? void 0 : r.current) === null ? "0%" : ((e = r == null ? void 0 : r.current) == null ? void 0 : e.offsetLeft) - t.current.offsetLeft + "px";
      (r == null ? void 0 : r.current) !== null && r.current.style.removeProperty("--x"), t.current.style.setProperty("--x", l), O(s);
    }
  }, b = (s, t) => {
    const e = i.findIndex(
      (l) => l.selected
    );
    if (x([c.TAB, c.ENTER, c.SPACE].includes(s.key)), !i[t].disabled && [c.ENTER, c.SPACE].includes(s.key) && (u == null || u(t)), s.key === c.ARROW_LEFT) {
      const l = i.findLastIndex(
        (m, o) => o < e && !m.disabled
      );
      l !== -1 && (u == null || u(l));
    }
    if (s.key === c.ARROW_RIGHT) {
      const l = i.findIndex(
        (m, o) => o > e && !m.disabled
      );
      l !== -1 && (u == null || u(l));
    }
  };
  return k(() => {
    let s;
    return r != null && r.current && d && (s = setTimeout(() => {
      var t;
      (t = r.current) == null || t.style.removeProperty("--x");
    }, 150)), () => s && clearTimeout(s);
  }, [i]), /* @__PURE__ */ f.jsx("div", { className: E, children: i.map((s, t) => /* @__PURE__ */ f.jsx(
    v,
    {
      allowFocus: I,
      isAnimated: s.selected && n === t && d,
      onClick: (e) => {
        T(t, e), u == null || u(t), x(!1);
      },
      onKeyDown: (e) => b(e, t),
      selectedRef: r,
      size: y,
      ...s
    },
    t
  )) });
};
export {
  w as SegmentedControl
};
