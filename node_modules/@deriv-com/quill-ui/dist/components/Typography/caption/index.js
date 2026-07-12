import { j as c } from "../../../jsx-runtime-DmTjM30f.js";
import { c as l } from "../../../clsx-OuTLNxxd.js";
import { Typography as x } from "../base.js";
import { getTextDecoration as g, getTextWeight as _ } from "../../../utils/typography-utils.js";
const T = ({
  children: o,
  className: e,
  color: t,
  as: r = "p",
  italic: i = !1,
  underlined: p = !1,
  bold: a = !1,
  ...s
}) => {
  const n = g(i, p), m = _(a);
  return /* @__PURE__ */ c.jsx(
    x,
    {
      as: r,
      className: l(
        `quill-typography__caption-text__weight--${m}__decoration--${n}`,
        t || "quill-typography__color--prominent",
        e
      ),
      ...s,
      children: o
    }
  );
};
export {
  T as CaptionText
};
