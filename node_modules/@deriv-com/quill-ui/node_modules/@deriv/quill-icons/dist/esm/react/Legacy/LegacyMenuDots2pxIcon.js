import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyMenuDots2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#b90443972b7ea38ab460b84b9634ecc3__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b90443972b7ea38ab460b84b9634ecc3__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyMenuDots2pxIcon);
export default ForwardRef;
