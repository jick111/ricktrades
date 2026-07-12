import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacySmartphoneIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#291680fca0e029b435e8abcaacf30b57__a)' },
        React.createElement("path", { fill: '#000', fillRule: 'evenodd', d: 'M5.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1H6a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 10 1h.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '291680fca0e029b435e8abcaacf30b57__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacySmartphoneIcon);
export default ForwardRef;
