import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronLeftCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.46 8.984 4.5-4.5a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L2.055 9.5l3.96 3.984a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.055' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2dd337cfea69dfb3e08fd4ce444a4880__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionFillIcon);
export default ForwardRef;
