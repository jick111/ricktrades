import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedTrustpilotSmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.2 13.621 9 14.47l4.54 3.281zm4.156-4.512L9 14.47 4.434 17.75l1.75-5.332-4.567-3.309H7.25L9 3.75l1.723 5.36z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4c149fa5e0895345abbd3e9800c3d669__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedTrustpilotSmIcon);
export default ForwardRef;
