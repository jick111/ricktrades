import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowDownLeftLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.25 20.5v-8.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5.742l7.852-7.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757L5.508 19.25h5.742c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H2.5c-.703 0-1.25-.547-1.25-1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8eff8b056eee8a4c835e61c7d9ee5bb4__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgFillIcon);
export default ForwardRef;
