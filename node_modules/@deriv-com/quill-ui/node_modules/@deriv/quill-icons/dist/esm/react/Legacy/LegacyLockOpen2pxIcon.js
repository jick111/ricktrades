import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyLockOpen2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#8e37754bae32b34203a543d7b99c057b__a)' },
        React.createElement("path", { d: 'M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M6 4a2 2 0 1 1 4 0v2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-2-2.83V4a4 4 0 0 0-8 0 1 1 0 0 0 2 0m5 4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8e37754bae32b34203a543d7b99c057b__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyLockOpen2pxIcon);
export default ForwardRef;
