import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedSevenLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 7.375c0-.312.273-.625.625-.625h11.25c.195 0 .43.156.547.352a.7.7 0 0 1-.04.625l-10 16.25a.62.62 0 0 1-.859.195c-.273-.195-.39-.547-.195-.86L10.992 8H.875a.617.617 0 0 1-.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b69d467a0e769ce7076994f9a6731715__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedSevenLgRegularIcon);
export default ForwardRef;
