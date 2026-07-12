import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMinusSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.188 10.75a.45.45 0 0 1-.438.438H1.25a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437h10.5a.47.47 0 0 1 .438.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '59a9b97b8be1a74a4e76b590c5e41bed__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedMinusSmRegularIcon);
export default ForwardRef;
