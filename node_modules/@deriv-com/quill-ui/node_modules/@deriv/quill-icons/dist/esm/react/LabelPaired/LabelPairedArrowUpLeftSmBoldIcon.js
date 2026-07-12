import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowUpLeftSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.781 6.375v.027h6.563c.355 0 .656.274.656.657 0 .355-.3.656-.656.656H3.34l6.316 6.316a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0L2.438 8.617v4.977c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V7.03c0-.355.273-.656.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '880c9ffcfedc3f796ef3282a2156bb22__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmBoldIcon);
export default ForwardRef;
