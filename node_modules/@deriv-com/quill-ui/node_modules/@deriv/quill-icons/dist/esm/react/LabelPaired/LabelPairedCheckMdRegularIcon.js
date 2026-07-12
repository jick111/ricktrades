import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCheckMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.844 7.156a.53.53 0 0 1 0 .719l-8.5 8.5a.53.53 0 0 1-.719 0l-4.5-4.5a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L5 15.312l8.125-8.156a.53.53 0 0 1 .719 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3f758c68a07858f5c23c3e12209460b1__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedCheckMdRegularIcon);
export default ForwardRef;
