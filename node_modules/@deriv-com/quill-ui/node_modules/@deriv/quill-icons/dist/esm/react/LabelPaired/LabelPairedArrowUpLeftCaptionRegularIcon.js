import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowUpLeftCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 5.75h5.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-4.36l6.118 6.117c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L1.5 7.038v4.336c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-5.25c0-.187.164-.375.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6b77b50532cb7da02b688fa3d66640c1__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionRegularIcon);
export default ForwardRef;
