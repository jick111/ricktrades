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
const LabelPairedLockPatternSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.219 5.5c0-.82.683-1.531 1.531-1.531.602 0 1.121.383 1.367.875h2.488A1.57 1.57 0 0 1 9 3.969c.602 0 1.121.383 1.367.875h2.488a1.57 1.57 0 0 1 1.395-.875c.82 0 1.531.71 1.531 1.531a1.546 1.546 0 0 1-2.05 1.45l-3.31 3.308c.056.164.11.328.11.492a1.546 1.546 0 0 1-2.05 1.45l-3.172 3.144h2.296A1.57 1.57 0 0 1 9 14.469c.602 0 1.121.383 1.367.875h2.488a1.57 1.57 0 0 1 1.395-.875c.82 0 1.531.71 1.531 1.531 0 .848-.71 1.531-1.531 1.531a1.52 1.52 0 0 1-1.395-.875h-2.488c-.246.52-.765.875-1.367.875a1.52 1.52 0 0 1-1.395-.875H5.117c-.246.52-.765.875-1.367.875A1.53 1.53 0 0 1 2.219 16c0-.82.683-1.531 1.531-1.531.164 0 .328.054.492.11l3.309-3.31A1.546 1.546 0 0 1 9 9.22c.163 0 .327.054.491.11l3.172-3.173h-2.297c-.246.52-.765.875-1.367.875a1.52 1.52 0 0 1-1.395-.875H5.117c-.246.52-.765.875-1.367.875A1.53 1.53 0 0 1 2.219 5.5m0 5.25c0 .574.273 1.066.765 1.34a1.531 1.531 0 1 0 0-2.652 1.47 1.47 0 0 0-.765 1.312m10.5 0c0 .574.273 1.066.765 1.34a1.531 1.531 0 1 0 0-2.652 1.47 1.47 0 0 0-.765 1.312' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '036832b413a4d104d142a8d495d175be__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLockPatternSmBoldIcon);
exports.default = ForwardRef;
