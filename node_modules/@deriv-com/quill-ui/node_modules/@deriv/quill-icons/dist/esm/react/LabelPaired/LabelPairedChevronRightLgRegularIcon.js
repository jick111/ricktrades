import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronRightLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.93 15.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '269a6b3050b6d5e5df39363a8505f6f2__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronRightLgRegularIcon);
export default ForwardRef;
