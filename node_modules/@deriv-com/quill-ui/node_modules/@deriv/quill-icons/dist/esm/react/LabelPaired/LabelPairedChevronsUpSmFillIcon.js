import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsUpSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.602 4.898 5.25 5.25a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7 6.759l-4.648 4.62a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l5.25-5.25a.843.843 0 0 1 1.23 0m5.25 10.5a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7 12.009l-4.648 4.62a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l5.25-5.25a.843.843 0 0 1 1.23 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb3449d184bf75c1ac0682a9b3ee1fe8__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsUpSmFillIcon);
export default ForwardRef;
