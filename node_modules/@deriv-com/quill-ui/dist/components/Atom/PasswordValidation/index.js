import { j as c } from "../../../jsx-runtime-DmTjM30f.js";
import '../../../assets/password-validation.css';/* empty css                                    */
import { CaptionText as o } from "../../Typography/caption/index.js";
import * as e from "react";
import { forwardRef as n } from "react";
import "../../Typography/base.js";
import "../../Typography/heading/index.js";
const i = ({ title: a, titleId: t, ...l }, r) => e.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 18, viewBox: "0 0 12 18", role: "img", ref: r, "aria-labelledby": t, ...l },
  a ? e.createElement("title", { id: t }, a) : null,
  e.createElement(
    "g",
    null,
    e.createElement("path", { d: "M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M4.102 7.602c-.235.234-.235.585 0 .796L5.203 9.5l-1.101 1.102c-.235.234-.235.585 0 .796.21.235.562.235.773 0l1.102-1.101 1.101 1.101c.234.235.586.235.797 0 .234-.21.234-.562 0-.796L6.773 9.5l1.102-1.102c.234-.21.234-.562 0-.796-.21-.211-.562-.211-.797 0L5.977 8.703 4.875 7.602a.55.55 0 0 0-.773 0" })
  ),
  e.createElement(
    "defs",
    null,
    e.createElement(
      "clipPath",
      { id: "a8e142bc4515d1bdee94a065724dd2ae__a" },
      e.createElement("path", { d: "M0 0h12v18H0z" })
    )
  )
), m = n(i), s = ({ title: a, titleId: t, ...l }, r) => e.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 18, viewBox: "0 0 12 18", role: "img", ref: r, "aria-labelledby": t, ...l },
  a ? e.createElement("title", { id: t }, a) : null,
  e.createElement(
    "g",
    null,
    e.createElement("path", { d: "M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m2.648-7.102h-.023c.234-.21.234-.562 0-.796a.55.55 0 0 0-.773 0L5.25 10.227 4.148 9.125c-.234-.234-.585-.234-.796 0a.513.513 0 0 0 0 .773l1.5 1.5c.21.235.562.235.796 0z" })
  ),
  e.createElement(
    "defs",
    null,
    e.createElement(
      "clipPath",
      { id: "c3b63daa3db7fbf2efe2f6c3cc9b1e0d__a" },
      e.createElement("path", { d: "M0 0h12v18H0z" })
    )
  )
), d = n(s), h = ({ title: a, titleId: t, ...l }, r) => e.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 18, viewBox: "0 0 12 18", role: "img", ref: r, "aria-labelledby": t, ...l },
  a ? e.createElement("title", { id: t }, a) : null,
  e.createElement(
    "g",
    null,
    e.createElement("path", { d: "M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3" })
  ),
  e.createElement(
    "defs",
    null,
    e.createElement(
      "clipPath",
      { id: "84074b2462446e419b5dcf0b35469daf__a" },
      e.createElement("path", { d: "M0 0h12v18H0z" })
    )
  )
), p = n(h), x = ({
  status: a,
  validationMessage: t
}) => /* @__PURE__ */ c.jsxs("div", { className: "validation_message", children: [
  a === "success" ? /* @__PURE__ */ c.jsx(d, { fill: "var(--component-textIcon-statusNormal-success)" }) : a === "error" ? /* @__PURE__ */ c.jsx(m, { fill: "var(--component-textIcon-statusNormal-danger)" }) : /* @__PURE__ */ c.jsx(p, { fill: "var(--component-textIcon-normal-default)" }),
  /* @__PURE__ */ c.jsx(o, { className: `validation_message__status--${a}`, children: t })
] });
export {
  x as PasswordStrengthValidation,
  x as default
};
