import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowUpLeftMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 7v.031h7.5a.74.74 0 0 1 .75.75.76.76 0 0 1-.75.75H3.531l7.219 7.219a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0L2.5 9.563v5.687a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-7.5A.74.74 0 0 1 1.75 7' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1b4b2088a3b0b6b265f9afb5e111386b__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdBoldIcon);
export default ForwardRef;
