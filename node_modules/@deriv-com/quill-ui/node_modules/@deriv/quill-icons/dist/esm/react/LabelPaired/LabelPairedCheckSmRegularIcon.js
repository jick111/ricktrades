import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedCheckSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.488 6.512a.463.463 0 0 1 0 .629l-7.437 7.437a.463.463 0 0 1-.63 0L.485 10.641a.463.463 0 0 1 0-.63.463.463 0 0 1 .63 0l3.636 3.637 7.11-7.136a.463.463 0 0 1 .628 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd6f19a10b9a8bb8d9b5ddd155ae0212d__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedCheckSmRegularIcon);
export default ForwardRef;
