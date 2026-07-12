import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedSquareLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 9.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a57b542e2bc3c21ca3cea54cd0cecbba__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedSquareLgFillIcon);
export default ForwardRef;
