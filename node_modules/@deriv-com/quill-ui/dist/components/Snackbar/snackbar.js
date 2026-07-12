import { j as r } from "../../jsx-runtime-DmTjM30f.js";
import _, { useRef as h, useEffect as T } from "react";
import { c } from "../../clsx-OuTLNxxd.js";
import "../Typography/base.js";
import "../Typography/heading/index.js";
import { Text as $ } from "../Typography/text/index.js";
import { Button as j } from "../Button/base/index.js";
import { F as z } from "../../snackbar-controller-CDe1DIbw.js";
import "../Button/social/index.js";
import "../Button/icon-button/index.js";
import { useSnackbar as F } from "../../hooks/useSnackbar.js";
import { a as O } from "../../index-EY1gwl5O.js";
const W = ({
  icon: a,
  id: e,
  isVisible: m,
  message: u,
  actionText: f,
  onActionClick: s,
  onCloseAction: o,
  onSnackbarRemove: i,
  hasCloseButton: v = !0,
  hasFixedHeight: q = !0,
  delay: y,
  standalone: R = !0,
  status: t = "neutral",
  ...w
}) => {
  const { removeSnackbar: p } = F(), l = h(null), d = ({
    id: n,
    onSnackbarRemove: N,
    delay: g = 4e3
  }) => setTimeout(() => {
    p(n, N);
  }, g), b = h(null);
  T(() => (e && (l.current = d({
    id: e,
    onSnackbarRemove: i
  })), () => {
    clearTimeout(l.current ?? "");
  }), [u]);
  const k = (n = 100) => {
    o == null || o(), l && clearTimeout(l.current ?? ""), e && d({ id: e, onSnackbarRemove: i, delay: n });
  }, E = () => {
    s == null || s(), k();
  };
  if (e && O(b, () => p(e, i)), R && !m) return null;
  const x = {
    neutral: "white-black",
    fail: "white"
  }[t];
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ...w,
      className: c(
        "quill-snackbar",
        `quill-snackbar__status--${t}`,
        m ? "slide-up" : "slide-up slide-down"
      ),
      ref: b,
      children: [
        a && /* @__PURE__ */ r.jsx("div", { className: c("quill-snackbar__icon--container"), children: _.isValidElement(a) && _.cloneElement(a, {
          fill: `var(--component-snackbar-icon-${t})`,
          ...a.props
        }) }),
        /* @__PURE__ */ r.jsx("div", { className: "quill-snackbar__message--container", children: /* @__PURE__ */ r.jsx(
          $,
          {
            className: c(
              "quill-snackbar__message",
              q && "quill-snackbar__message--has-fix-height"
            ),
            size: "sm",
            style: {
              color: `var(--component-snackbar-label-color-${t})`
            },
            children: u
          }
        ) }),
        f && /* @__PURE__ */ r.jsx(
          j,
          {
            variant: "tertiary",
            label: f,
            color: x,
            onClick: E
          }
        ),
        v && /* @__PURE__ */ r.jsx(
          j,
          {
            variant: "tertiary",
            iconPosition: "start",
            icon: /* @__PURE__ */ r.jsx(z, {}),
            color: x,
            size: "md",
            onClick: () => k(y),
            "data-testid": "close-button"
          }
        )
      ]
    }
  );
};
export {
  W as Snackbar
};
