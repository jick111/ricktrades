import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyInfo2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#6f334f7282eb038dab3e55c961be3caa__a)' },
        React.createElement("path", { d: 'M8 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6f334f7282eb038dab3e55c961be3caa__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyInfo2pxIcon);
export default ForwardRef;
