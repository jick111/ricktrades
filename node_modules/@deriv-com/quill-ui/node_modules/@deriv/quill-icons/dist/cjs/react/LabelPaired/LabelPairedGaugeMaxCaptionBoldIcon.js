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
const LabelPairedGaugeMaxCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m.75 2.625c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75M6 13.063a1.31 1.31 0 0 1-1.312-1.313c0-.703.585-1.312 1.312-1.312.234 0 .445.07.656.187l2.578-1.758a.54.54 0 0 1 .774.14.54.54 0 0 1-.14.774l-2.579 1.781c0 .07.024.118.024.188 0 .727-.61 1.313-1.313 1.313M9 7.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-6.375 1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75M4.5 7.25c0 .422-.352.75-.75.75A.74.74 0 0 1 3 7.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '57ef8200852c8016195bfe8f0dc2b4d5__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGaugeMaxCaptionBoldIcon);
exports.default = ForwardRef;
