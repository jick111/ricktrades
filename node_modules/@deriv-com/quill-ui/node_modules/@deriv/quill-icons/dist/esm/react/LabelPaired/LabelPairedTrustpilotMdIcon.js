import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedTrustpilotMdIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.656 15.281 10 16.25 15.188 20zm4.75-5.156L10 16.25 4.781 20l2-6.094-5.218-3.781H8L10 4l1.969 6.125z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1cfbc1448d69dbd8050e086fea0522fd__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = forwardRef(LabelPairedTrustpilotMdIcon);
export default ForwardRef;
