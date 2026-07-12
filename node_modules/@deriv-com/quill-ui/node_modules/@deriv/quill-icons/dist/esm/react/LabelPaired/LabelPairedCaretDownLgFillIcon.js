import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCaretDownLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm5.602 20.148-5-5a1.26 1.26 0 0 1-.274-1.367A1.28 1.28 0 0 1 1.5 13h10c.508 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367l-5 5a1.205 1.205 0 0 1-1.757 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f2a0dd2299e0e375a95787e1ae05fef1__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedCaretDownLgFillIcon);
export default ForwardRef;
