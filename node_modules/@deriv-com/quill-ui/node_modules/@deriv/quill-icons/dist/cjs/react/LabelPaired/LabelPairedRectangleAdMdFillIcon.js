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
const LabelPairedRectangleAdMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 5h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m5.156 4.438A.71.71 0 0 0 6.5 9a.77.77 0 0 0-.687.438l-2.25 4.5a.74.74 0 0 0 .343 1 .74.74 0 0 0 1-.344l.157-.344h2.843l.157.344c.187.375.656.531 1 .344a.74.74 0 0 0 .343-1zm-.656 2 .656 1.312H5.813zm5.75.562a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m.75-1.344a2.2 2.2 0 0 0-.75-.156A2.26 2.26 0 0 0 10 12.75C10 14 11 15 12.25 15c.344 0 .656-.062.969-.219.125.156.312.219.531.219a.74.74 0 0 0 .75-.75v-4.5a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '53ae09b19b3d2e4a2a7dc2fb35ca436a__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRectangleAdMdFillIcon);
exports.default = ForwardRef;
