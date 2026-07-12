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
const LabelPairedGripDotsVerticalCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 18, viewBox: '0 0 6 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 6.875c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562m0 3.75c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563M2.25 13.25c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.122 1.122 0 0 1 0-1.945 1.08 1.08 0 0 1 1.125 0c.328.211.562.563.562.961m2.625-6.375c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562M6 9.5c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.122 1.122 0 0 1 0-1.945c.328-.21.773-.21 1.125 0 .328.211.562.563.562.961m-1.125 4.875c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c5100a580692b66b06d4666a5cbf32ac__a' },
            React.createElement("path", { d: 'M0 0h6v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalCaptionFillIcon);
exports.default = ForwardRef;
