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
const LabelPairedFileChartColumnXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 27c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75zM3 6h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m7.125 13.125v6A1.11 1.11 0 0 1 9 26.25c-.656 0-1.125-.469-1.125-1.125v-6C7.875 18.515 8.344 18 9 18c.61 0 1.125.516 1.125 1.125m4.125 1.5v4.5a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-4.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M6 22.125v3a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '139586c7703a790501e5e490c3005c0f__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileChartColumnXlBoldIcon);
exports.default = ForwardRef;
