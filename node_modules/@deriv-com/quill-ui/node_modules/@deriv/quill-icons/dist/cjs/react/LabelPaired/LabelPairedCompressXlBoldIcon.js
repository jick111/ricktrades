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
const LabelPairedCompressXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 8.625v5.25A1.11 1.11 0 0 1 6.375 15h-5.25C.469 15 0 14.531 0 13.875c0-.61.469-1.125 1.125-1.125H5.25V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M1.125 21h5.25c.61 0 1.125.516 1.125 1.125v5.25A1.11 1.11 0 0 1 6.375 28.5c-.656 0-1.125-.469-1.125-1.125V23.25H1.125C.469 23.25 0 22.781 0 22.125 0 21.515.469 21 1.125 21M15.75 8.625v4.125h4.125c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 19.875 15h-5.25c-.656 0-1.125-.469-1.125-1.125v-5.25c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M14.625 21h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H15.75v4.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-5.25c0-.61.469-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bb32ccf8de30b1e43224a3c0db055486__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCompressXlBoldIcon);
exports.default = ForwardRef;
