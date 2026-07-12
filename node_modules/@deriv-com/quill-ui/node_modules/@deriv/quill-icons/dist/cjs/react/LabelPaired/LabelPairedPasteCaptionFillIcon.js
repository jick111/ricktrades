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
const LabelPairedPasteCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 3.5c.54 0 1.031.305 1.29.75h1.335c.61 0 1.125.516 1.125 1.125v.375H6.375A1.866 1.866 0 0 0 4.5 7.625V14H1.125A1.11 1.11 0 0 1 0 12.875v-7.5c0-.61.492-1.125 1.125-1.125h1.313c.257-.445.75-.75 1.312-.75m2.625 3h2.906c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.515.352.797v5.156c0 .633-.516 1.125-1.125 1.125h-4.5a1.11 1.11 0 0 1-1.125-1.125v-6.75c0-.61.492-1.125 1.125-1.125M3.75 4.438A.555.555 0 0 0 3.188 5c0 .328.234.563.562.563A.555.555 0 0 0 4.313 5a.57.57 0 0 0-.563-.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e85788e05c159f0454111b03aee6e741__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPasteCaptionFillIcon);
exports.default = ForwardRef;
