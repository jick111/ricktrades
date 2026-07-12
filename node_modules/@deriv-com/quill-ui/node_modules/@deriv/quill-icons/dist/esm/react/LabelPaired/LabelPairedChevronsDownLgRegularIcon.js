import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsDownLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.031 8.469a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L10 14.64l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0zm0 7.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L10 22.14l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ddbfcdaaf123e800e5eb3c9e0fd492f8__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsDownLgRegularIcon);
export default ForwardRef;
