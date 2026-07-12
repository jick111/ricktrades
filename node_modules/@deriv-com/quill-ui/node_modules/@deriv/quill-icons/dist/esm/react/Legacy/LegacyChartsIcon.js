import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyChartsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#346ab079e7fa69173f006e8bab9c7aea__a)' },
        React.createElement("path", { fill: '#333', d: 'M2 0v13.999L16 14v1l-14-.001V16H1l-.001-1.001L0 15v-1l.999-.001L1 0zm10.528 2.002 2.605 7.814-.95.316-1.71-5.134-2.74 7.302L5.68 9.26l-1.955 3.91-.895-.446L5.321 7.74 9.266 10.7z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '346ab079e7fa69173f006e8bab9c7aea__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyChartsIcon);
export default ForwardRef;
