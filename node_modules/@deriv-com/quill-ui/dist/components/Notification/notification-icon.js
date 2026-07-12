import { j as s } from "../../jsx-runtime-DmTjM30f.js";
import { TYPE as o } from "../../utils/notification-utils.js";
import { F as a, a as c } from "../../StandaloneCircleInfoBoldIcon-G7lZfb4e.js";
import { a as i, F as m } from "../../StandaloneTriangleExclamationBoldIcon-DbjkWWdj.js";
const e = {
  [o.INFO]: {
    component: a,
    fillColor: "var(--component-textIcon-statusInverse-information)"
  },
  [o.ERROR]: {
    component: c,
    fillColor: "var(--component-textIcon-statusInverse-danger)"
  },
  [o.SUCCESS]: {
    component: i,
    fillColor: "var(--component-textIcon-statusInverse-success)"
  },
  [o.WARNING]: {
    component: m,
    fillColor: "var(--component-textIcon-statusInverse-warning)"
  }
}, u = ({ type: n }) => {
  var r;
  const t = (r = e[n]) == null ? void 0 : r.component;
  return t ? /* @__PURE__ */ s.jsx(
    t,
    {
      fill: e[n].fillColor,
      iconSize: "sm"
    }
  ) : null;
};
export {
  u as NotificationIcon
};
