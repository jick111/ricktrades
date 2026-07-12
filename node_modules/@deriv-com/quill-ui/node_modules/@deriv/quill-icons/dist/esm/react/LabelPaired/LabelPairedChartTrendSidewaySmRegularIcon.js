import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChartTrendSidewaySmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.688 10.75a.45.45 0 0 1 .437-.437h15.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H1.125a.43.43 0 0 1-.437-.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4a80efc27d617eee8873da811bcdcb87__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedChartTrendSidewaySmRegularIcon);
export default ForwardRef;
