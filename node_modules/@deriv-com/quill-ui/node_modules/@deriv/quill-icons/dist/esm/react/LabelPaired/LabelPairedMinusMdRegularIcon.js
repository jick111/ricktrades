import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 12c0 .281-.25.5-.5.5H1a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h12c.25 0 .5.25.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ae531203d343a847fa6124d87f1de532__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusMdRegularIcon);
export default ForwardRef;
