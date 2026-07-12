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
const LabelPairedQrcodeXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 14.25zm3 .75v3h3v-3zM0 21.75a2.25 2.25 0 0 1 2.25-2.25h4.5C7.969 19.5 9 20.531 9 21.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25zm3 .75v3h3v-3zm11.25-15h4.5C19.969 7.5 21 8.531 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 14.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m3.75 3h-3v3h3zm-6 9.75c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75 0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v3c0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75zm5.25 8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75m3 0a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '53492203f1c106b5aa0e55abd3ecbae2__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQrcodeXlFillIcon);
exports.default = ForwardRef;
