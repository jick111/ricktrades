import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowUpRightLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.75 10.5v8.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5.703l-7.89 7.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.851-7.891H3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h8.75c.664 0 1.25.586 1.25 1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '06a2618edc74a5b1b1a82d903da56cad__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgFillIcon);
export default ForwardRef;
