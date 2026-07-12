import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedZeroXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5v6c0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21zm7.5-6c-3.328 0-6 2.719-6 6v6c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6v-6c0-3.281-2.719-6-6-6' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99daa0655356b99a0b41fa036abfe236__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedZeroXlRegularIcon);
export default ForwardRef;
