import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCaretDownCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm3.46 12.29-3-3a.76.76 0 0 1-.163-.821A.77.77 0 0 1 1 8h6c.305 0 .563.188.68.469a.76.76 0 0 1-.164.82l-3 3a.723.723 0 0 1-1.055 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cca66ee7222cf14f4f47f5828525c369__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionFillIcon);
export default ForwardRef;
