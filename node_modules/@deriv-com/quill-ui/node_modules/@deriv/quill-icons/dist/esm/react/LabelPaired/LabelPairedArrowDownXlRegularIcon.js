import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowDownXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.438 28.313-8.25-8.25c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L8.25 25.97V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l6.938-6.985c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-8.25 8.25c-.282.282-.797.282-1.078 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c30f25fbcd9a46fb071f182c0ecdb7b9__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowDownXlRegularIcon);
export default ForwardRef;
