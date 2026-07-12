import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.125 15.5c0 .703-.586 1.25-1.25 1.25H2.125c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h13.75c.664 0 1.25.586 1.25 1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c5b509687945288871f8dcac0e380cc7__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusLgFillIcon);
export default ForwardRef;
