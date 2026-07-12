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
const LabelPairedOneXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 36, viewBox: '0 0 12 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.125 8.625V26.25h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-9.75C.469 28.5 0 28.031 0 27.375c0-.61.469-1.125 1.125-1.125h3.75V10.64l-3.187 1.97c-.516.328-1.22.14-1.547-.376-.328-.515-.141-1.218.375-1.546l4.875-3c.328-.235.797-.235 1.125-.047.375.234.609.609.609.984' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb965813b313b65f6180f6550417340e__a' },
            React.createElement("path", { d: 'M0 0h12v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneXlBoldIcon);
exports.default = ForwardRef;
