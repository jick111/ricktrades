import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedTabletScreenLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 8c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v15c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23zM6.5 23c0 .352.273.625.625.625h3.75A.64.64 0 0 0 11.5 23c0-.312-.312-.625-.625-.625h-3.75A.64.64 0 0 0 6.5 23m8.75-15H2.75v12.5h12.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2ab7e72c8db540cd89d4f0bfecaf2a7f__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedTabletScreenLgFillIcon);
export default ForwardRef;
