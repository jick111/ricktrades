import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChartTrendSidewayLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 15.5c0-.664.547-1.25 1.25-1.25h22.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H1.25C.547 16.75 0 16.203 0 15.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd5d99960c8f5a020211cfb0853c50007__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayLgFillIcon);
export default ForwardRef;
