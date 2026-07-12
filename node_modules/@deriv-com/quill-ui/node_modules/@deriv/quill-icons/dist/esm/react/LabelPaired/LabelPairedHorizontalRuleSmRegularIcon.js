import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 10.75a.45.45 0 0 1 .438-.437h16.625a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H.688a.43.43 0 0 1-.438-.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '92f92597b4d23982d67bc6142b1402f2__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleSmRegularIcon);
export default ForwardRef;
