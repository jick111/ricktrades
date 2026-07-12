import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTheme2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#5321acaced4ed03087ff5c30ace8ba18__a)' },
        React.createElement("path", { d: 'M8 15A7 7 0 1 0 8 1v14m0 1a7.98 7.98 0 0 1-6.1-2.823A8 8 0 1 1 8 16', opacity: 0.1 }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M8 14A6 6 0 0 0 8 2v12m0 2A8 8 0 1 0 8 0a8 8 0 0 0 0 16', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5321acaced4ed03087ff5c30ace8ba18__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyTheme2pxIcon);
export default ForwardRef;
