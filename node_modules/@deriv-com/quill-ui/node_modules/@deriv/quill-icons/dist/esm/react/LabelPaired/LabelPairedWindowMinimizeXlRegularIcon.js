import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedWindowMinimizeXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 27h22.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cdb92433042bad1b8ab3ca5e1b6e40e2__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedWindowMinimizeXlRegularIcon);
export default ForwardRef;
