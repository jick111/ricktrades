import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCaretUpCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4.516 6.734 3 3c.21.211.28.54.164.82a.76.76 0 0 1-.68.47H1a.77.77 0 0 1-.703-.47.76.76 0 0 1 .164-.82l3-3a.723.723 0 0 1 1.055 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '70b4d48165c3ca7993d217df9e14e86e__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionFillIcon);
export default ForwardRef;
