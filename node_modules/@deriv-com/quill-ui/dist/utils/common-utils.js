import { isValidElement as e } from "react";
const p = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  ENTER: "Enter",
  SPACE: " ",
  TAB: "Tab",
  ESCAPE: "Escape"
}, s = (t) => {
  let r = "";
  return typeof t == "string" ? r = t : typeof t == "number" ? r = t.toString() : t instanceof Array ? t.forEach((n) => {
    r += s(n);
  }) : e(t) && (r += s(t.props.children)), r;
}, E = (t, r) => {
  if (!t) return t;
  const i = t.toString().split(".");
  if (i.length < 2 || i[1].length < r) return t;
  const o = Number(t);
  return isNaN(o) ? t : o.toFixed(r);
};
export {
  p as KEY,
  E as getFormatValue,
  s as reactNodeToString
};
