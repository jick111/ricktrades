import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyReportsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#7c6cc651982687ca6f1a8c3335060b0a__a)' },
        React.createElement("path", { fill: '#333', d: 'M13 8v7h1a1 1 0 0 0 1-1V8zM9 0l4 4v3h3v7a2 2 0 0 1-2 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-.414 1H1v14h11V4.414zM6.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm3-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7c6cc651982687ca6f1a8c3335060b0a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyReportsIcon);
export default ForwardRef;
