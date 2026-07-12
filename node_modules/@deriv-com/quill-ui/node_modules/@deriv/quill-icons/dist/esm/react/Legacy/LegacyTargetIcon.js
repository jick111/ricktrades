import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTargetIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#cedd8d077a075d61ecd178c87df710a5__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 0M8 11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 11M11 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 11 8M0 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 8' }),
        React.createElement("path", { d: 'M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 1A7 7 0 1 0 8 1a7 7 0 0 0 0 14' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cedd8d077a075d61ecd178c87df710a5__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyTargetIcon);
export default ForwardRef;
