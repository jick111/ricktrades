import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsLeftCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.219 9.242 4.5-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L2.016 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-4.5-4.5a.397.397 0 0 1 0-.54m9-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L6.516 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-4.5-4.5a.397.397 0 0 1 0-.54z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c235c47a1e6646181ec24c1ab0597470__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionRegularIcon);
export default ForwardRef;
