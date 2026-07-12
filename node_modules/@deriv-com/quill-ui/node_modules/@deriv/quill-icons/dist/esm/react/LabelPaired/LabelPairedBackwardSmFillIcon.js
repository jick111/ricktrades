import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedBackwardSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.55 15.809-4.675-3.91v-2.27l4.676-3.91a.89.89 0 0 1 .93-.137c.3.164.519.465.519.793v8.75a.88.88 0 0 1-.52.793c-.3.164-.656.11-.93-.11M7 13.375v1.75a.88.88 0 0 1-.52.793c-.3.164-.656.11-.93-.11L.3 11.435a.89.89 0 0 1-.3-.684c0-.246.11-.492.3-.656l5.25-4.375a.89.89 0 0 1 .93-.137c.301.164.52.465.52.793v7' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e2f1c205017a2a0f2637d09576d33d84__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedBackwardSmFillIcon);
export default ForwardRef;
