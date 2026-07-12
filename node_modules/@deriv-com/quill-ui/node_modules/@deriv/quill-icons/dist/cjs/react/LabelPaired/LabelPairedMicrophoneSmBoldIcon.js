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
const LabelPairedMicrophoneSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.813 6.375A1.33 1.33 0 0 0 5.5 5.063c-.738 0-1.312.601-1.312 1.312v4.375c0 .738.574 1.313 1.312 1.313.71 0 1.313-.575 1.313-1.313zm-3.938 0a2.626 2.626 0 0 1 5.25 0v4.375a2.626 2.626 0 0 1-5.25 0zM2 9.656v1.094a3.49 3.49 0 0 0 3.5 3.5c1.914 0 3.5-1.559 3.5-3.5V9.656C9 9.301 9.273 9 9.656 9c.356 0 .656.3.656.656v1.094c0 2.46-1.832 4.457-4.156 4.785v.902H7.47c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H3.53a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h1.313v-.902A4.814 4.814 0 0 1 .688 10.75V9.656C.688 9.301.96 9 1.344 9c.355 0 .656.3.656.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'faee49dfe66fc7d27c0d9b09213e9cf5__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMicrophoneSmBoldIcon);
exports.default = ForwardRef;
