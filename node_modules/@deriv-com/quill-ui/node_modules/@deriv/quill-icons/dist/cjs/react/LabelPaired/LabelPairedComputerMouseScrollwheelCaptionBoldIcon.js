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
const LabelPairedComputerMouseScrollwheelCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.875 11.75v-4.5c0-1.43-1.195-2.625-2.625-2.625h-1.5A2.636 2.636 0 0 0 1.125 7.25v4.5a2.62 2.62 0 0 0 2.625 2.625h1.5a2.636 2.636 0 0 0 2.625-2.625M0 7.25A3.746 3.746 0 0 1 3.75 3.5h1.5A3.76 3.76 0 0 1 9 7.25v4.5a3.746 3.746 0 0 1-3.75 3.75h-1.5A3.73 3.73 0 0 1 0 11.75zm4.5-1.5c.398 0 .75.352.75.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7e9700d42667627b723edbfc7f8a7b3b__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelCaptionBoldIcon);
exports.default = ForwardRef;
