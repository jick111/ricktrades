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
const LabelPairedBarcodeXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 7.5c.61 0 1.125.516 1.125 1.125v18.75A1.11 1.11 0 0 1 1.125 28.5C.469 28.5 0 28.031 0 27.375V8.625C0 8.015.469 7.5 1.125 7.5m4.125 0c.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75m3.375 0c.61 0 1.125.516 1.125 1.125v18.75A1.11 1.11 0 0 1 8.625 28.5c-.656 0-1.125-.469-1.125-1.125V8.625c0-.61.469-1.125 1.125-1.125m5.25 0c.61 0 1.125.516 1.125 1.125v18.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125V8.625c0-.61.469-1.125 1.125-1.125m7.875 1.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v18.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125zm-3-.375c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cf8ce83193d223a1376d1e738d3290a0__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBarcodeXlBoldIcon);
exports.default = ForwardRef;
