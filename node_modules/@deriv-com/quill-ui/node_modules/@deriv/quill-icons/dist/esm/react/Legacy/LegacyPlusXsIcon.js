import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyPlusXsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 8 8', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#23295238f7e4e1e54f9fadfee3616421__a)' },
        React.createElement("path", { fill: '#333', d: 'M4 0a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 4 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '23295238f7e4e1e54f9fadfee3616421__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h8v8H0z' })))));
const ForwardRef = forwardRef(LegacyPlusXsIcon);
export default ForwardRef;
