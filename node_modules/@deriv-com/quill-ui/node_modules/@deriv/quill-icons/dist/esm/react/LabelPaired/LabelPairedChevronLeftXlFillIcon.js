import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronLeftXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.422 16.969 9-9a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L3.608 18l7.922 7.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ac7e89d537bc42290665dcf82fbf0203__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronLeftXlFillIcon);
export default ForwardRef;
