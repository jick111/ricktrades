import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedWindowMinimizeMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 17.5h14.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ad64bf877614fc34a376cfa00f96e186__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedWindowMinimizeMdBoldIcon);
export default ForwardRef;
