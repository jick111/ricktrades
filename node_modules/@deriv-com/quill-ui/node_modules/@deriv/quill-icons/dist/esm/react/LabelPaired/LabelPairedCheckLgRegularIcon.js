import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCheckLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.555 9.445a.66.66 0 0 1 0 .899L6.93 20.969a.66.66 0 0 1-.899 0L.406 15.344a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L6.5 19.641 16.656 9.445a.66.66 0 0 1 .899 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '22ad652d6792704256792ecba352cfcb__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedCheckLgRegularIcon);
export default ForwardRef;
