import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowLeftLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.602 14.64 6.25-6.25a1.205 1.205 0 0 1 1.757 0c.508.47.508 1.29 0 1.758L4.508 14.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.508l4.101 4.14c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-6.25-6.25a1.205 1.205 0 0 1 0-1.757' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f796e300fee5dbed1cf03df1f607e5ab__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowLeftLgFillIcon);
export default ForwardRef;
