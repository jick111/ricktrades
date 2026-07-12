import { j as p } from "../../../../jsx-runtime-DmTjM30f.js";
import { useRef as k, useState as h, useMemo as T, useEffect as d } from "react";
import { c as f } from "../../../../clsx-OuTLNxxd.js";
import { D as $ } from "../../../../index-C1BOoRZp.js";
import '../../../../assets/wheel-picker-base.css';import '../../../../assets/divider.css';/* empty css                           */
import "../../dropdown/title/index.js";
import "../../dropdown/item-container/index.js";
/* empty css                                     */
const P = ({
  data: s,
  selectedValue: i,
  setSelectedValue: b,
  handleKeyDown: I,
  isFocused: g,
  dropDownItemClassName: D,
  containerClassName: M,
  listClassName: j,
  position: q,
  containerHeight: E = "100%",
  ...a
}) => {
  const c = k([]), [l, y] = h([]), [N, v] = h(i), u = T(
    () => s.reduce(
      (e, n, r) => e.set(n.value, r),
      /* @__PURE__ */ new Map()
    ),
    [s]
  ), [m, S] = h(
    u.get(i) ?? 0
  ), t = k(null), x = (e) => {
    var o;
    if (!e.target) return;
    const n = Math.max(
      e.target.scrollTop,
      0
    ), r = Math.min(
      Math.max(Math.floor(n / 48), 0),
      l.length - 1
    );
    (o = c.current[r]) == null || o.focus({
      preventScroll: !0
    }), b(l[r].value), v(l[r].value);
  }, w = new ResizeObserver(() => {
    const e = Number(m);
    if (!(t != null && t.current)) return;
    const n = t == null ? void 0 : t.current.clientHeight;
    t.current.style.paddingTop = `${n * 0.5}px`, t.current.style.paddingBottom = `${n * 0.5}px`, c.current[e] && c.current[e].scrollIntoView({
      block: "center"
    });
  });
  return d(() => {
    var e, n;
    if (t.current)
      return b((e = l[m]) == null ? void 0 : e.value), v((n = l[m]) == null ? void 0 : n.value), w.observe(t.current), t.current.addEventListener("scroll", x), () => {
        var r;
        w.disconnect(), (r = t.current) == null || r.removeEventListener(
          "scroll",
          x
        );
      };
  }, [l]), d(() => {
    y(s), S(u.get(i) ?? 0);
  }, [s]), d(() => {
    var e;
    g && ((e = c.current[u.get(i)]) == null || e.focus());
  }, [g]), l.length > 0 ? /* @__PURE__ */ p.jsx(
    "div",
    {
      className: f(
        "quill-wheel-picker__container",
        (a == null ? void 0 : a.disabled) && "quill-wheel-picker__container-disabled",
        M
      ),
      style: { height: E },
      children: /* @__PURE__ */ p.jsx(
        "ul",
        {
          className: f(
            "quill-wheel-picker__data-items",
            `quill-wheel-picker__data-items-${q}`,
            j
          ),
          role: "listbox",
          ref: t,
          ...a,
          children: l.map(({ value: e, label: n }, r) => /* @__PURE__ */ p.jsx(
            $,
            {
              className: f(
                "quill-wheel-picker__data-item",
                D
              ),
              tabIndex: 0,
              label: n ?? e,
              role: "option",
              textAlignment: "center",
              ref: (o) => c.current[r] = o,
              onKeyDown: I,
              onClick: () => {
                var o, _;
                (o = c.current[r]) == null || o.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                  inline: "nearest"
                }), (_ = c.current[r]) == null || _.focus();
              },
              disabled: l[r].value !== N,
              children: e
            },
            e
          ))
        }
      )
    }
  ) : null;
};
export {
  P as WheelPicker,
  P as default
};
