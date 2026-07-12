import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowUpMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.344 5.156 5.5 5.5a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L6.5 6.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6.719L.844 11.375a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l5.5-5.5a.53.53 0 0 1 .719 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2bca37adaf147af8c7dfb10095bfc1f1__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowUpMdRegularIcon);
export default ForwardRef;
