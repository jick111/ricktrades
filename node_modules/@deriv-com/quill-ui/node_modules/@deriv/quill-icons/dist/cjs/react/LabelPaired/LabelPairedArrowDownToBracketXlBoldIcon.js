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
const LabelPairedArrowDownToBracketXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.297 16.172-6 6c-.469.469-1.172.469-1.594 0l-6-6a1.027 1.027 0 0 1 0-1.547 1.026 1.026 0 0 1 1.547 0l4.078 4.078V7.125c0-.61.516-1.125 1.125-1.125a1.11 1.11 0 0 1 1.125 1.125v11.578l4.078-4.078c.469-.469 1.172-.469 1.594 0a1.027 1.027 0 0 1 0 1.547zM2.25 22.125v3.75c0 1.078.797 1.875 1.875 1.875h12.75a1.85 1.85 0 0 0 1.875-1.875v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3.75A4.13 4.13 0 0 1 16.875 30H4.125A4.1 4.1 0 0 1 0 25.875v-3.75C0 21.515.469 21 1.125 21c.61 0 1.125.516 1.125 1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f70f3527de4b2c93110047c6a1776065__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketXlBoldIcon);
exports.default = ForwardRef;
