"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const DerivDarkPayUserIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 96 96', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#389606849808d3e205599ea79d102c28__a)' },
        React.createElement("mask", { id: '389606849808d3e205599ea79d102c28__b', width: 96, height: 96, x: 0, y: 0, maskUnits: 'userSpaceOnUse', style: {
                maskType: 'luminance',
            } },
            React.createElement("path", { fill: '#fff', d: 'M96 0H0v96h96z' })),
        React.createElement("g", { mask: 'url(#389606849808d3e205599ea79d102c28__b)' },
            React.createElement("path", { fill: '#EBECEF', d: 'M66.34 82.68H29.66c-9.02 0-16.35-7.33-16.35-16.35V29.66c0-9.02 7.33-16.35 16.35-16.35h36.67c9.02 0 16.35 7.33 16.35 16.35v36.67c0 9.02-7.33 16.35-16.35 16.35zM29.66 19.31c-5.71 0-10.35 4.64-10.35 10.35v36.67c0 5.71 4.64 10.35 10.35 10.35h36.67c5.71 0 10.35-4.64 10.35-10.35V29.66c0-5.71-4.64-10.35-10.35-10.35z' }),
            React.createElement("path", { fill: '#FF444F', d: 'M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20' }),
            React.createElement("path", { fill: '#fff', d: 'M26.86 23.66c0-2.97-1.56-4.64-5.72-5.8-2.98-.84-3.64-1.38-3.64-2.6 0-.86.51-1.91 2.3-1.91 2.13 0 2.49 1.25 2.69 2.02h3.95c-.21-2.17-1.44-4.31-4.9-4.83V8.75h-3.31v1.81c-2.64.5-4.71 2.25-4.71 5.07 0 2.62 1.37 4.35 6.07 5.7 2.58.74 3.3 1.4 3.3 2.77 0 1.11-.66 2.1-2.72 2.1-1.66 0-2.77-.91-3.09-2.34h-3.95c.22 2.69 2.06 4.65 5.28 5.14v2.24h3.33V29c3.05-.46 5.12-2.2 5.12-5.34' }),
            React.createElement("path", { fill: '#CED0D6', d: 'M88 51.01H56.52a8 8 0 0 0-8 8V88a8 8 0 0 0 8 8H88a8 8 0 0 0 8-8V59.01a8 8 0 0 0-8-8' }),
            React.createElement("path", { fill: '#5C616D', d: 'M80.05 66.63a7.947 7.947 0 0 1-9.34 9.33c-3.12-.59-5.64-3.11-6.23-6.23a7.947 7.947 0 0 1 9.34-9.33c3.12.59 5.64 3.11 6.23 6.23M64.77 78.31h14.97c3.71 0 6.71 3 6.71 6.71V96H58.06V85.02c0-3.71 3-6.71 6.71-6.71' }))),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '389606849808d3e205599ea79d102c28__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h96v96H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkPayUserIcon);
exports.default = ForwardRef;
