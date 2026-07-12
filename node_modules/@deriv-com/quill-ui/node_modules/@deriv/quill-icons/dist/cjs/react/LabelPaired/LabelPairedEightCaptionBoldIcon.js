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
const LabelPairedEightCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.375 7.156c0 .89-.398 1.688-1.031 2.227a2.87 2.87 0 0 1 1.406 2.46 2.906 2.906 0 0 1-2.906 2.907H3.156A2.89 2.89 0 0 1 .25 11.844c0-1.031.54-1.969 1.383-2.461A2.9 2.9 0 0 1 .625 7.156 2.906 2.906 0 0 1 3.531 4.25h.938a2.92 2.92 0 0 1 2.906 2.906m-2.906 2.907H3.156a1.78 1.78 0 1 0 0 3.562h1.688a1.78 1.78 0 1 0 0-3.562zm0-1.126a1.78 1.78 0 1 0 0-3.562H3.53a1.78 1.78 0 1 0 0 3.563z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f559241771ab4fbd891d8f8d8397bf3b__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightCaptionBoldIcon);
exports.default = ForwardRef;
