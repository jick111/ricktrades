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
const LabelPairedChevronsLeftMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.469 11.469 6-5.969c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031L3.031 12 8.5 17.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-6-6c-.313-.281-.313-.75 0-1.062m12-6V5.5c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031l-5.5 5.5L14.5 17.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-6-6c-.313-.281-.313-.75 0-1.062z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e0bdec0e894bb2053f1c1189abcb24ba__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsLeftMdBoldIcon);
exports.default = ForwardRef;
