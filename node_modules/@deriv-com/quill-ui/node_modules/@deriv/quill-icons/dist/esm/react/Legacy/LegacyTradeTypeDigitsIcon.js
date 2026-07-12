import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTradeTypeDigitsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3c9cfaaff7b3841ffe48b27beb9e2771__a)' },
        React.createElement("path", { fill: '#333', d: 'M15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm0 1H1v14h14zm-4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3c9cfaaff7b3841ffe48b27beb9e2771__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyTradeTypeDigitsIcon);
export default ForwardRef;
