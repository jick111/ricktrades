import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 15.5c0-.312.273-.625.625-.625h23.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f2ffbd3f021e498b9fc65ebd0180d727__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleLgRegularIcon);
export default ForwardRef;
