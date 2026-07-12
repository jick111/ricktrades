import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 12c0-.25.219-.5.5-.5h19c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5A.494.494 0 0 1 0 12' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'db3c8aa4bc0daf73337d223de0627888__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleMdRegularIcon);
export default ForwardRef;
