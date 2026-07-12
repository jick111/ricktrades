import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTimeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#8c1074d8618dc397f0bb4de4b2df3670__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 2a.5.5 0 0 1 .5.5V8h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 8 3' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8c1074d8618dc397f0bb4de4b2df3670__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyTimeIcon);
export default ForwardRef;
