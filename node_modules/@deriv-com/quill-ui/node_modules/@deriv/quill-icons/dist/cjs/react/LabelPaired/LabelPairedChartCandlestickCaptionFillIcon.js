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
const LabelPairedChartCandlestickCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m6-.375V5.75c.398 0 .75.352.75.75v2.25c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.5A.74.74 0 0 1 6 8.75V6.5c0-.398.328-.75.75-.75V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M9 8.75c0-.398.328-.75.75-.75V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375V8c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.74.74 0 0 1-.75-.75zM3.75 6.5V5.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V6.5c.398 0 .75.352.75.75v3c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.74.74 0 0 1-.75-.75v-3c0-.398.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '42c0d8699e07894cbdf5a1a0392784ab__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartCandlestickCaptionFillIcon);
exports.default = ForwardRef;
