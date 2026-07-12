import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronLeftCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.719 9.781a.397.397 0 0 1 0-.539l4.5-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L1.516 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cf0bffbe214def1faab7c3a61b213357__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionRegularIcon);
export default ForwardRef;
