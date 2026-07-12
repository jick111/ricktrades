import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsLeftMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.281 11.313 6-6a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.406L3.406 12l5.281 5.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-6-6a.964.964 0 0 1 0-1.406m12-6a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L9.407 12l5.28 5.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-6-6a.964.964 0 0 1 0-1.406z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4e3f5dc4428ab964cb358de669bd35cc__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdFillIcon);
export default ForwardRef;
