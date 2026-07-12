import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronRightCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.516 8.984a.723.723 0 0 1 0 1.055l-4.5 4.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L5.92 9.5l-3.96-3.96a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '740ddae8eb1276d04f55427067673ad4__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionFillIcon);
export default ForwardRef;
