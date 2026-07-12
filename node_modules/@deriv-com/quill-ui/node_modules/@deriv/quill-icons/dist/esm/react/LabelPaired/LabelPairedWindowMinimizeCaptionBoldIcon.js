import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedWindowMinimizeCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.563 13.625h10.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.563A.54.54 0 0 1 0 14.188c0-.305.234-.563.563-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ae8e6ea1a72dde020c94d69a930678ad__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedWindowMinimizeCaptionBoldIcon);
export default ForwardRef;
