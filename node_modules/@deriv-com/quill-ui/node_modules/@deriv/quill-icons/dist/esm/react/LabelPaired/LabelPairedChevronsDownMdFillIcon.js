import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsDownMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.688 18.719a.964.964 0 0 1-1.407 0l-6-6a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L8 16.593l5.281-5.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406zm6-12-6 6a.964.964 0 0 1-1.407 0l-6-6a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0L8 10.595l5.281-5.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '693b374b27ac36d2320cabdc1c3422c2__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsDownMdFillIcon);
export default ForwardRef;
