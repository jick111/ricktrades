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
const LabelPairedChartLineCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m9.516 2.04-3 3a.723.723 0 0 1-1.055 0L5.625 8.702l-2.11 2.086a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055L5.086 7.11a.723.723 0 0 1 1.055 0L7.5 8.445l2.46-2.46a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bd08341e9a43e344f08da8429597e04f__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineCaptionFillIcon);
exports.default = ForwardRef;
