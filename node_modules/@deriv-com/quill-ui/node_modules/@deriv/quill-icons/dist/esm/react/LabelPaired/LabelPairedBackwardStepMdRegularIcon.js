import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedBackwardStepMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 6.5v4.25l5.563-4.531A.9.9 0 0 1 8.124 6c.469 0 .875.406.875.875v10.281c0 .469-.406.844-.875.844a.87.87 0 0 1-.562-.187L2 13.28V17.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m6 .656L2.031 12 8 16.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b01003b6aa58aa6c17113c448a9a4aaf__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedBackwardStepMdRegularIcon);
export default ForwardRef;
