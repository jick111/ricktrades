import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMobileScreenButtonCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-5.25a1.48 1.48 0 0 1-1.5-1.5zm3 9c0 .21.164.375.375.375h1.5A.385.385 0 0 0 5.625 14a.4.4 0 0 0-.375-.375h-1.5a.385.385 0 0 0-.375.375m3.75-9h-5.25v7.5h5.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24ecc98391d5005257f7151203934df3__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionFillIcon);
export default ForwardRef;
