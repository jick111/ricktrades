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
const LabelPairedMicrophoneXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.25 10.5c0-1.219-1.031-2.25-2.25-2.25a2.25 2.25 0 0 0-2.25 2.25V18c0 1.266.984 2.25 2.25 2.25A2.25 2.25 0 0 0 11.25 18zm-6.75 0a4.501 4.501 0 0 1 9 0V18a4.501 4.501 0 0 1-9 0zM3 16.125V18c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125V18c0 4.219-3.14 7.64-7.125 8.203v1.547h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12.375 30h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h2.25v-1.547A8.25 8.25 0 0 1 .75 18v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b4c3853551f9c499b36082c1d758fd2d__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMicrophoneXlBoldIcon);
exports.default = ForwardRef;
