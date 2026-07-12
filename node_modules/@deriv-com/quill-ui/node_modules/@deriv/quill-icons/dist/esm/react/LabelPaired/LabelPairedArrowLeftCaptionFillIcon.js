import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowLeftCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.46 8.984 3.75-3.75a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L2.805 8.75H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.805l2.46 2.484a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L.46 10.04a.723.723 0 0 1 0-1.055' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '00973b613273778eb70e5c3b531bb3b4__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionFillIcon);
export default ForwardRef;
