import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyMenuHamburger2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1' }))));
const ForwardRef = forwardRef(LegacyMenuHamburger2pxIcon);
export default ForwardRef;
