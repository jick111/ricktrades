import * as React from 'react';
import { forwardRef } from 'react';
const DerivLightIcBlockIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 128', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { stroke: '#FF444F', strokeWidth: 8 },
        React.createElement("path", { fill: '#fff', d: 'M64 26c20.986 0 38 17.014 38 38s-17.014 38-38 38-38-17.014-38-38 17.014-38 38-38Z' }),
        React.createElement("path", { d: 'm38.906 89.094 50.188-50.188' }))));
const ForwardRef = forwardRef(DerivLightIcBlockIcon);
export default ForwardRef;
