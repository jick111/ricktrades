import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 18c0-.797.656-1.5 1.5-1.5h27c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-27A1.48 1.48 0 0 1 0 18' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f452c9919f20c4a28d9a26f240ffac39__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleXlFillIcon);
export default ForwardRef;
