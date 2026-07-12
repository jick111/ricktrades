import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowLeftToLineMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 17.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5m3.125-5.844 4-4a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L4.687 11.5H13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H4.688l3.156 3.156a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-4-4a.53.53 0 0 1 0-.719' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '81962498b5b37feaac60f34352dbaf53__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdRegularIcon);
export default ForwardRef;
