import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.125 15.5a.64.64 0 0 1-.625.625h-15a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h15c.313 0 .625.313.625.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '259724256e7f4cbaacb2519aab462bc7__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusLgRegularIcon);
export default ForwardRef;
