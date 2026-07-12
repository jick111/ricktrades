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
const LabelPairedArrowUpArrowDownSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm14.59 14.059-2.625 2.625c-.274.273-.684.273-.93 0L8.41 14.059a.6.6 0 0 1 0-.903c.246-.273.656-.273.93 0l1.504 1.504V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.38l1.504-1.505c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903M4.965 4.816l2.598 2.625c.273.274.273.684 0 .93-.247.274-.657.274-.93 0L5.129 6.867v9.352a.63.63 0 0 1-.656.656.65.65 0 0 1-.657-.656V6.867L2.313 8.371a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l2.625-2.625c.246-.246.656-.246.93 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '339af690376d2c71ea53bbba3d8aecff__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownSmBoldIcon);
exports.default = ForwardRef;
