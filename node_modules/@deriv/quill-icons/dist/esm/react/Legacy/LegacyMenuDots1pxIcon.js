import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyMenuDots1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0' }))));
const ForwardRef = forwardRef(LegacyMenuDots1pxIcon);
export default ForwardRef;
