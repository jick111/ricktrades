import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronLeftLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.031 15.969a.66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L2.36 15.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'db74f9366fd690e4cd2118cf44916099__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronLeftLgRegularIcon);
export default ForwardRef;
