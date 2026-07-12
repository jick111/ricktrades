import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedWindowMaximizeMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 5h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m1 2c-.562 0-1 .469-1 1 0 .563.438 1 1 1h10c.531 0 1-.437 1-1 0-.531-.469-1-1-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6243b29e72b7490c461ce1ca4163729d__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedWindowMaximizeMdFillIcon);
export default ForwardRef;
