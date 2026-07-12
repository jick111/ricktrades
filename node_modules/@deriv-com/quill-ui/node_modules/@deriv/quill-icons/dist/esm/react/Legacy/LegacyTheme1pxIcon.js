import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTheme1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#46383b7567b2f4d5fbf18fff6a33a653__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 15A7 7 0 1 0 8 1v14m0 1a7.98 7.98 0 0 1-6.1-2.823A8 8 0 1 1 8 16' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '46383b7567b2f4d5fbf18fff6a33a653__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyTheme1pxIcon);
export default ForwardRef;
