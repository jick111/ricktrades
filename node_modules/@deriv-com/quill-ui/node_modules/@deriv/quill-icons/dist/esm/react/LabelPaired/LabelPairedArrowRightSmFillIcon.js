import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowRightSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.352 11.379-4.375 4.375a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l2.87-2.899H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h8.367l-2.87-2.871a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l4.375 4.374a.843.843 0 0 1 0 1.23' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9f5e458bfb54e3a715692c435e9f86fd__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowRightSmFillIcon);
export default ForwardRef;
