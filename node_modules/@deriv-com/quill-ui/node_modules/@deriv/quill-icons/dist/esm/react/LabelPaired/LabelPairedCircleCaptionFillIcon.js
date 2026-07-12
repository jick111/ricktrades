import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCircleCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3bf37b7e99d6e3206bc33db10b168c84__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedCircleCaptionFillIcon);
export default ForwardRef;
