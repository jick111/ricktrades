import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 12a.74.74 0 0 1-.75.75H1.25A.72.72 0 0 1 .5 12a.74.74 0 0 1 .75-.75h11.5a.76.76 0 0 1 .75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1f11f5a5f61bf0c59232ff808029d90c__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusMdBoldIcon);
export default ForwardRef;
