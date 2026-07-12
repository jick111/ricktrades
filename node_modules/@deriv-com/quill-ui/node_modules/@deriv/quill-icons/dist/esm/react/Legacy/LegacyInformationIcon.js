import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyInformationIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#040d00844e06ca6d096c148835cce02c__a)' },
        React.createElement("path", { fill: '#377CFC', fillRule: 'evenodd', d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7 4V7a1 1 0 0 0-1-1H6a1 1 0 0 0 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0-1-1m0-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '040d00844e06ca6d096c148835cce02c__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyInformationIcon);
export default ForwardRef;
