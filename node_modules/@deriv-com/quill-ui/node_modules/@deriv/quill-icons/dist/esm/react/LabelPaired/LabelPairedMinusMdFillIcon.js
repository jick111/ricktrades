import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 12c0 .563-.469 1-1 1h-11c-.562 0-1-.437-1-1 0-.531.438-1 1-1h11c.531 0 1 .469 1 1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e008c42ced82a87719b3779605fb7056__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusMdFillIcon);
export default ForwardRef;
