import * as React from 'react';
import { forwardRef } from 'react';
const LabelPairedChevronsDownXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.438 9.563c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L12 16.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079l-9 9c-.282.28-.797.28-1.078 0zm0 9c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L12 25.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-9 9c-.282.282-.797.282-1.078 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd25671eeafb280e1f85808d9c374899c__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = forwardRef(LabelPairedChevronsDownXlRegularIcon);
export default ForwardRef;
