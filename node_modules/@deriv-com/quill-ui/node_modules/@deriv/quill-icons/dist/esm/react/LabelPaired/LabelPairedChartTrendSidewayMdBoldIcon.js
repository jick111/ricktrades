import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChartTrendSidewayMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 12a.74.74 0 0 1 .75-.75h18a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H1A.72.72 0 0 1 .25 12' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '00e2480dbb850755b56b55de3c5dc787__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayMdBoldIcon);
export default ForwardRef;
