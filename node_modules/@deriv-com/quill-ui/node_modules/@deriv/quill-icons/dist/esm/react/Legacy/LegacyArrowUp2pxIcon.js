import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyArrowUp2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#c84f173ac6d7051e7e64d7cd8366953f__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L9 3.414V15a1 1 0 1 1-2 0V3.414L1.707 8.707A1 1 0 0 1 .293 7.293z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c84f173ac6d7051e7e64d7cd8366953f__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyArrowUp2pxIcon);
export default ForwardRef;
