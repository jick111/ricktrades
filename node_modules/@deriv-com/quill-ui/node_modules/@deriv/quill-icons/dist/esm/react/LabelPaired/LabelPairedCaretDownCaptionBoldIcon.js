import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCaretDownCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4 11.234 2.086-2.109H1.89zm.516 1.055a.723.723 0 0 1-1.055 0l-3-3a.76.76 0 0 1-.164-.82A.77.77 0 0 1 1 8h6a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9cdc026f50f2409fcf293c5fc66e8498__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionBoldIcon);
export default ForwardRef;
