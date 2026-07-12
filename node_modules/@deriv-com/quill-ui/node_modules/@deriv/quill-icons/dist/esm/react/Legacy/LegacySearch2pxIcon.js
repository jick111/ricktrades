import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacySearch2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#2e2a902b401fd184ddc9d425a9344dc7__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M10.335 11.749a6.5 6.5 0 1 1 1.414-1.414l3.958 3.958a1 1 0 0 1-1.414 1.414zM11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2e2a902b401fd184ddc9d425a9344dc7__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacySearch2pxIcon);
export default ForwardRef;
