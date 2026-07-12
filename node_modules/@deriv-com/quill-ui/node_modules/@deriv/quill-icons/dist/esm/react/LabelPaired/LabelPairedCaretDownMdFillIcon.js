import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCaretDownMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4.281 15.719-4-4a1.01 1.01 0 0 1-.219-1.094C.22 10.25.595 10 1 10h8c.406 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094l-4 4a.964.964 0 0 1-1.406 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '94ad50640d8a2c46aa078c8867a08fa7__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedCaretDownMdFillIcon);
export default ForwardRef;
