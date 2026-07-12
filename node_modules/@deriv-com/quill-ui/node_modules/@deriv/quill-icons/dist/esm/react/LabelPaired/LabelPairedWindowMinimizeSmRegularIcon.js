import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedWindowMinimizeSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.438 16h13.125a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.438A.43.43 0 0 1 0 16.438.45.45 0 0 1 .438 16' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '50a684d49861367570550f07c5ee0575__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedWindowMinimizeSmRegularIcon);
export default ForwardRef;
