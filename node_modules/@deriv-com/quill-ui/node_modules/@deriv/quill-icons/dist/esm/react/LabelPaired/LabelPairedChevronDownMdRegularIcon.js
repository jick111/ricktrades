import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronDownMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.344 16.375a.53.53 0 0 1-.719 0l-6-6a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L8 15.312l5.625-5.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0ea504676b2e7bcc0366580d461a788c__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronDownMdRegularIcon);
export default ForwardRef;
