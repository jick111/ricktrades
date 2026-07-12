import { j as f } from "../../../jsx-runtime-DmTjM30f.js";
import { c as g } from "../../../clsx-OuTLNxxd.js";
import { Typography as n } from "../base.js";
import { getTextDecoration as x, getTextWeight as y } from "../../../utils/typography-utils.js";
const j = ({
  children: e,
  className: o,
  as: r = "p",
  size: a = "md",
  italic: s = !1,
  color: t,
  underlined: i = !1,
  bold: p = !1,
  centered: l = !1,
  ...m
}) => {
  const c = x(s, i), _ = y(p);
  return /* @__PURE__ */ f.jsx(
    n,
    {
      as: r,
      className: g(
        `quill-typography__body-text__size--${a}__weight--${_}__decoration--${c}`,
        t || "quill-typography__color--default",
        l && "quill-typography-centered",
        o
      ),
      ...m,
      children: e
    }
  );
};
export {
  j as Text
};
