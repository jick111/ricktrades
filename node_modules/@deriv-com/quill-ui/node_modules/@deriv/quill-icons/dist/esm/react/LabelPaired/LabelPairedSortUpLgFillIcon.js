import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedSortUpLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.36 7.14 5 5c.35.352.468.9.273 1.368s-.664.781-1.133.781h-10a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l5-5a1.205 1.205 0 0 1 1.757 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '61799fc6cddff6493d29e8008d807e7a__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedSortUpLgFillIcon);
export default ForwardRef;
