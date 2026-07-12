import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChartTrendSidewaySmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.469 10.75c0-.355.273-.656.656-.656h15.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H1.125a.63.63 0 0 1-.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0f45716bb64313b0fdb216ce523d27bf__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedChartTrendSidewaySmBoldIcon);
export default ForwardRef;
