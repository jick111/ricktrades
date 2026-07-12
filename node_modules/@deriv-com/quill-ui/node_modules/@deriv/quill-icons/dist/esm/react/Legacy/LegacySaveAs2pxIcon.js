import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacySaveAs2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#9bb14263d423924b3564807a00726a85__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M1 4a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879L14.415 4 13 5.414l-2-2V5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1v-3a2 2 0 0 1 2-2h4v2H6v5H4a3 3 0 0 1-3-3zm5-1v2h3V3zM15.707 7.293a1 1 0 0 1 0 1.414L8.414 16H7v-1.414l7.293-7.293a1 1 0 0 1 1.414 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9bb14263d423924b3564807a00726a85__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
const ForwardRef = forwardRef(LegacySaveAs2pxIcon);
export default ForwardRef;
