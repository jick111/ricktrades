import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsRightCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.898 9.102c.211.234.211.585 0 .796l-4.5 4.5c-.234.235-.585.235-.796 0a.513.513 0 0 1 0-.773l4.101-4.102-4.101-4.125a.513.513 0 0 1 0-.773.513.513 0 0 1 .773 0zm-9-4.5 4.5 4.5c.211.234.211.585 0 .796l-4.5 4.5c-.234.235-.585.235-.796 0a.513.513 0 0 1 0-.773l4.101-4.102-4.101-4.125a.513.513 0 0 1 0-.773.513.513 0 0 1 .773 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c1ba3a68b266cf6db6b8a7c4831bc9d5__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionBoldIcon);
export default ForwardRef;
