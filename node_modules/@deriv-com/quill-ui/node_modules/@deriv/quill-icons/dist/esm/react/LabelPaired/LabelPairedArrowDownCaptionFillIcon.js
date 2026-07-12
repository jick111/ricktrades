import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowDownCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.96 14.54.21 10.79a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.056 0l2.484 2.461V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.195l2.46-2.46a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054l-3.75 3.75a.723.723 0 0 1-1.055 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1f80fec19799ed540164527dbd5c0070__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionFillIcon);
export default ForwardRef;
