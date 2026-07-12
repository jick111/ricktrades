import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsRightSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.852 11.379-5.25 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.649-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l5.25 5.25a.843.843 0 0 1 0 1.23m-10.5 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.649-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l5.25 5.25a.843.843 0 0 1 0 1.23z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '366822ac5d6ed2733b1bfe9ea7a18082__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsRightSmFillIcon);
export default ForwardRef;
