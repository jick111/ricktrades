import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyMaximize2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#752d1938d1952a5ca16019b76ffc8e27__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M0 0h16v16H0zm2 2v12h12V2z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '752d1938d1952a5ca16019b76ffc8e27__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyMaximize2pxIcon);
export default ForwardRef;
