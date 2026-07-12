import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyHomeNewIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#0087a4a05e69efeca0bce469895c171c__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M7.673.372a.5.5 0 0 1 .654 0l7.5 6.5a.5.5 0 0 1-.655.756L14 6.612v7.638a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.612L.827 7.628a.5.5 0 1 1-.654-.756zM3 5.745v8.505a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5.745L8 1.412z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0087a4a05e69efeca0bce469895c171c__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacyHomeNewIcon);
export default ForwardRef;
