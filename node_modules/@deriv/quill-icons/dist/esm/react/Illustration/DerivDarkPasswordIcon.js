import * as React from 'react';
import { forwardRef } from 'react';
const DerivDarkPasswordIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', stroke: '#323738', d: 'M22 7.5H2A1.5 1.5 0 0 0 .5 9v6A1.5 1.5 0 0 0 2 16.5h20a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 22 7.5Z' }),
    React.createElement("path", { fill: '#6E6E6E', fillRule: 'evenodd', d: 'M3.295 12.118 2.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L4 12.698l-.528.802-.753-.508zm4 0L6.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L8 12.698l-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257zm4.795.268-.795-.268.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508-.528-.802-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257z', clipRule: 'evenodd' })));
const ForwardRef = forwardRef(DerivDarkPasswordIcon);
export default ForwardRef;
