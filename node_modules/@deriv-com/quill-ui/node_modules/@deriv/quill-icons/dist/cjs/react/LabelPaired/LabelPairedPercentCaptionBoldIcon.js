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
const LabelPairedPercentCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.648 6.148-7.523 7.5a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l7.5-7.477c.21-.234.562-.234.796 0 .211.21.211.563 0 .773M2.625 6.5c0 .422-.234.773-.562.984-.352.211-.797.211-1.126 0a1.122 1.122 0 0 1 0-1.945c.329-.21.774-.21 1.126 0 .328.211.562.563.562.961m6 6c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.126 0 1.122 1.122 0 0 1 0-1.945 1.08 1.08 0 0 1 1.125 0c.329.211.563.563.563.961' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2d83a2a210c6cbf561aee1e14629a8b9__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentCaptionBoldIcon);
exports.default = ForwardRef;
