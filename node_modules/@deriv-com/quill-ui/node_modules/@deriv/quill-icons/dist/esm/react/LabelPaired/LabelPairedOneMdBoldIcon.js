import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedOneMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 24, viewBox: '0 0 8 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.75 5.75V17.5h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5V7.094L1.125 8.406c-.344.219-.812.094-1.031-.25S0 7.344.344 7.125l3.25-2a.72.72 0 0 1 .75-.031c.25.156.406.406.406.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '71436bdd72473564d3fcd3410bd7ba08__a' },
            React.createElement("path", { d: 'M0 0h8v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedOneMdBoldIcon);
export default ForwardRef;
