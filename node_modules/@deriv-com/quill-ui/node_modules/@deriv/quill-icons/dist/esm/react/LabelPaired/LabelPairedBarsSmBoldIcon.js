import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedBarsSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 6.156c0-.355.273-.656.656-.656H11.97c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.03a.63.63 0 0 1-.656-.657m0 4.375c0-.355.273-.656.656-.656H11.97c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656m12.25 4.375c0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656H11.97c.355 0 .656.3.656.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '88d99f54e2cfd264b5312d46cfdc8138__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = forwardRef(LabelPairedBarsSmBoldIcon);
export default ForwardRef;
