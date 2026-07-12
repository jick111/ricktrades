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
const LabelPairedChartOhlcCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 3.5c.398 0 .75.352.75.75V5H9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v6.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.75H6a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75V4.25c0-.398.328-.75.75-.75M2.625 8c.398 0 .75.352.75.75v3.75h.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V11h-.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75v-.75c0-.398.328-.75.75-.75m9.75-3c.398 0 .75.352.75.75V9.5h.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V8h-.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75v-.75c0-.398.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9fe2637918e50d46bd77cbcba416709f__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcCaptionFillIcon);
exports.default = ForwardRef;
