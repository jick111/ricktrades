import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChartOhlcMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 4c.25 0 .5.25.5.5V6H12c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1.5v10.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V16H8a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.5V4.5c0-.25.219-.5.5-.5m6.5 2c.25 0 .5.25.5.5V13h1.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H17v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V9h-1.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H16V6.5c0-.25.219-.5.5-.5m-13 4c.25 0 .5.25.5.5V17h1.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H4v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V13H1.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H3v-1.5c0-.25.219-.5.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '34a3e4b529806bd0904c7a0bec692654__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChartOhlcMdRegularIcon);
export default ForwardRef;
