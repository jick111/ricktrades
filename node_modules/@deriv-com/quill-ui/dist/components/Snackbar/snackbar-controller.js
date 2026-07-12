import { j as o } from "../../jsx-runtime-DmTjM30f.js";
import { Snackbar as n } from "./snackbar.js";
import { useSnackbar as s } from "../../hooks/useSnackbar.js";
import { createPortal as c } from "react-dom";
import "../../snackbar-controller-CDe1DIbw.js";
const d = () => {
  const { queue: t } = s();
  return c(
    /* @__PURE__ */ o.jsx("div", { className: "snackbar--container", children: t.slice(0, 1).map((a) => {
      const { id: r, ...e } = a;
      return /* @__PURE__ */ o.jsx(n, { id: r, standalone: !1, ...e }, r);
    }) }),
    document.body
  );
};
export {
  d as SnackbarController
};
