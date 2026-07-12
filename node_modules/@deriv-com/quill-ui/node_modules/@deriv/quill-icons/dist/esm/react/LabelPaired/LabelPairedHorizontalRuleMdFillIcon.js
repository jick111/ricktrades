import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 12c0-.531.438-1 1-1h18c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2e4c39dd7e358277d8714b198b1272ca__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleMdFillIcon);
export default ForwardRef;
