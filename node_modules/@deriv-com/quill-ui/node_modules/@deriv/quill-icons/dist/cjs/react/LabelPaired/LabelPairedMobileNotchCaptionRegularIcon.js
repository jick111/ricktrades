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
const LabelPairedMobileNotchCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 4.25v.375c0 .422-.352.75-.75.75h-1.5a.74.74 0 0 1-.75-.75V4.25h-.75A.755.755 0 0 0 1.5 5v9c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75zm-.75 0h-1.5v.375h1.5zM.75 5c0-.82.656-1.5 1.5-1.5h4.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-4.5A1.48 1.48 0 0 1 .75 14z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '58323c67b0e2238c1eae09fa62d6fde1__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchCaptionRegularIcon);
exports.default = ForwardRef;
