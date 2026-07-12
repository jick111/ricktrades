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
const LabelPairedInfoXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 36, viewBox: '0 0 9 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.625 9.375c0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.875 0-.61-.328-.938-.937-.938-1.64m-1.875 6c0-.61.469-1.125 1.125-1.125H4.5c.61 0 1.125.516 1.125 1.125V27.75h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.875 30h-6.75C.469 30 0 29.531 0 28.875c0-.61.469-1.125 1.125-1.125h2.25V16.5h-1.5c-.656 0-1.125-.469-1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fcfa11b3c6d7fc0952120587a5df79e9__a' },
            React.createElement("path", { d: 'M0 0h9v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedInfoXlBoldIcon);
exports.default = ForwardRef;
