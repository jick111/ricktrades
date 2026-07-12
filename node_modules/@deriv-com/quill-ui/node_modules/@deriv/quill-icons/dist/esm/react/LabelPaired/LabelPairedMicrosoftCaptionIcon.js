import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMicrosoftCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 4.25h5.016v5.04H.25zm5.46 0h5.04v5.04H5.71zM.25 9.734h5.016v5.016H.25zm5.46 0h5.04v5.016H5.71z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6bd30fb1ac455d308b5b9bc19479a645__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedMicrosoftCaptionIcon);
export default ForwardRef;
