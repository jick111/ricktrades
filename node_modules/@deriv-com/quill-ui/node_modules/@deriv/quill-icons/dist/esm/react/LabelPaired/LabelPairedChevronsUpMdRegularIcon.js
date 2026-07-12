import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsUpMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.344 5.656 6 6a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 6.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0m6 12a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 12.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd9d128a19b4e43135b815f341b8697ce__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsUpMdRegularIcon);
export default ForwardRef;
