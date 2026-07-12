import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.188 10.75c0 .492-.41.875-.876.875H1.688a.864.864 0 0 1-.875-.875c0-.465.382-.875.875-.875h9.625a.9.9 0 0 1 .874.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ce9807c3fd5efaa5977ee32e6df48bcd__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusSmFillIcon);
export default ForwardRef;
