import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyShare2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#e88866316a15b5d19f8bcb03218b1d3e__a)' },
        React.createElement("path", { d: 'M8.287.307q.134.054.243.163l3 3a.75.75 0 0 1-1.06 1.06L8.75 2.81V9a.75.75 0 0 1-1.5 0V2.81L5.53 4.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .817-.163' }),
        React.createElement("path", { d: 'M2 8a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2H4v6h8V8h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e88866316a15b5d19f8bcb03218b1d3e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyShare2pxIcon);
export default ForwardRef;
