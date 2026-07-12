import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronRightXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.531 16.969c.61.562.61 1.547 0 2.11l-9 9c-.562.608-1.547.608-2.11 0a1.445 1.445 0 0 1 0-2.11L11.345 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1fef01a2ffe71c03edff9141dd75389a__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronRightXlFillIcon);
export default ForwardRef;
