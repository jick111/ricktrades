import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedHorizontalRuleXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 18c0-.375.328-.75.75-.75h28.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 18' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ac77b0adce0440a1679eadca5f32893c__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedHorizontalRuleXlRegularIcon);
export default ForwardRef;
