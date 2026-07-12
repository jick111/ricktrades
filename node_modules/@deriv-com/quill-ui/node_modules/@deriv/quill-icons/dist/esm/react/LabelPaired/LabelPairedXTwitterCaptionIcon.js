import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedXTwitterCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.117 4.625h1.64L7.149 8.773l4.266 5.602H8.086L5.46 10.977l-2.977 3.398H.82l3.868-4.406L.609 4.625h3.422l2.344 3.117zm-.586 8.766h.914L3.54 5.563h-.984z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5c5e96cfaff9e691f7fc47cf65dbba3f__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = forwardRef(LabelPairedXTwitterCaptionIcon);
export default ForwardRef;
