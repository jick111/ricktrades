import { DropdownContext as u } from "../../providers/dropdown/dropdownContext.js";
import { useContext as c } from "react";
import { a as i } from "../../index-EY1gwl5O.js";
const a = (e, t) => {
  const { isOpen: n, close: o, open: r, selectedValue: s, setSelectedValue: p } = c(u);
  return !t && e && i(e, o), { selectedValue: s, isOpen: n, open: r, close: o, setSelectedValue: p };
};
export {
  a as useDropdown
};
