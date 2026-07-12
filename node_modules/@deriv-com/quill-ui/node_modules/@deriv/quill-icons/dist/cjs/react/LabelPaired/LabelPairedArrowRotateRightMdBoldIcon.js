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
const LabelPairedArrowRotateRightMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.75 11h-4.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.813l-.844-1c-1.031-1.219-2.531-2-4.219-2A5.49 5.49 0 0 0 2.5 12c0 3.063 2.438 5.5 5.5 5.5a5.45 5.45 0 0 0 3.281-1.094.75.75 0 0 1 1.063.157.75.75 0 0 1-.156 1.062C11.03 18.5 9.562 19 8 19c-3.875 0-7-3.125-7-7 0-3.844 3.125-7 7-7 2.156 0 4.094 1 5.375 2.531l.625.75V5.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v4.5a.74.74 0 0 1-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '501dda9e8a5b8b5f19ce5f3f5e9586e1__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightMdBoldIcon);
exports.default = ForwardRef;
