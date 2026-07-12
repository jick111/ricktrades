import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 9.5c0-.305.234-.562.563-.562h13.875A.57.57 0 0 1 15 9.5a.555.555 0 0 1-.562.563H.563A.54.54 0 0 1 0 9.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8aef720d4588b2743edf7b87ca2bdaf8__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleCaptionBoldIcon);
export default ForwardRef;
