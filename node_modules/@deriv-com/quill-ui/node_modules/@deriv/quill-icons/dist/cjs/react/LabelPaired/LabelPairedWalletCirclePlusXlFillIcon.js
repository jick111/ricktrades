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
const LabelPairedWalletCirclePlusXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 10.5c0-1.64 1.313-3 3-3h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H21c1.64 0 3 1.36 3 3v.047c-.281 0-.516-.047-.75-.047A8.23 8.23 0 0 0 15 23.25c0 2.016.703 3.844 1.875 5.25H3c-1.687 0-3-1.312-3-3zm16.5 12.75c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m3 0c0 .422.328.75.75.75h2.25v2.25c0 .422.328.75.75.75.375 0 .75-.328.75-.75V24h2.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H24v-2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v2.25h-2.25c-.422 0-.75.375-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aeccd71bba54e9c5f1ce2f40e562475f__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCirclePlusXlFillIcon);
exports.default = ForwardRef;
