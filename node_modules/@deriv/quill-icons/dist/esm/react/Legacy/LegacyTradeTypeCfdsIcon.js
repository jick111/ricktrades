import * as React from 'react';
import { forwardRef } from 'react';
import { sizes } from '../../types';
export const LegacyTradeTypeCfdsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', ...sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0' }))));
const ForwardRef = forwardRef(LegacyTradeTypeCfdsIcon);
export default ForwardRef;
