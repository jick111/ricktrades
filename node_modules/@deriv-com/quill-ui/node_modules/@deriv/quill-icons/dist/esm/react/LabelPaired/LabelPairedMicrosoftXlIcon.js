import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedMicrosoftXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 7.5h10.031v10.078H0zm10.922 0H21v10.078H10.922zM0 18.469h10.031V28.5H0zm10.922 0H21V28.5H10.922z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '295784d06c7a31578da7ca91189be3ff__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedMicrosoftXlIcon);
export default ForwardRef;
