import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronUpLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.531 10.07a.66.66 0 0 1 .899 0l7.5 7.5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L10 11.399l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '81e1fd4c443ec0b3034284e6fb70d1ac__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronUpLgRegularIcon);
export default ForwardRef;
