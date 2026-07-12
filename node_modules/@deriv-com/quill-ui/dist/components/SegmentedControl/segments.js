import { j as n } from "../../jsx-runtime-DmTjM30f.js";
import i from "react";
import { Segment as f } from "./segment.js";
const a = ({
  disabled: o,
  onClick: r,
  selected: e,
  selectedRef: s,
  ...m
}) => {
  const t = i.useRef(null);
  return /* @__PURE__ */ n.jsx(
    f,
    {
      isDisabled: o,
      isSelected: e,
      onClick: () => r(t),
      ref: e ? s : t,
      ...m
    }
  );
};
export {
  a as Segments
};
