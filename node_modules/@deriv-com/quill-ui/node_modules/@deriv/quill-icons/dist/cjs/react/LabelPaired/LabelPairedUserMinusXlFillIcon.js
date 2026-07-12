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
const LabelPairedUserMinusXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 12a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12M0 28.64c0-4.64 3.703-8.39 8.344-8.39h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64m22.125-13.265h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4f8bed6c345e46bdb0b4c0384007d2ae__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserMinusXlFillIcon);
exports.default = ForwardRef;
