import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedArrowDownRightMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 17H3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h4.563L1.28 8.719a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L9 13.593V9c0-.531.438-1 1-1 .531 0 1 .469 1 1v7c0 .563-.469 1-1 1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a7508bc8ad2d1be2bf42f6782bd5f6b5__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdFillIcon);
export default ForwardRef;
