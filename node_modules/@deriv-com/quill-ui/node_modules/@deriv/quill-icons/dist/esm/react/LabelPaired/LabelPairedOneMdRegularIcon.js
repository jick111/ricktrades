import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedOneMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 24, viewBox: '0 0 8 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 5.5V18h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3V6.438l-2.25 1.5a.48.48 0 0 1-.687-.157.48.48 0 0 1 .156-.687l3-2a.57.57 0 0 1 .5-.032c.156.094.281.282.281.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3e5c6b05f5850e3f4a87dad8b6155213__a' },
            React.createElement("path", { d: 'M0 0h8v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedOneMdRegularIcon);
export default ForwardRef;
