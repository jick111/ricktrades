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
const LabelPairedEuroSignCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.375 9.125H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.656A5.09 5.09 0 0 1 6.438 4.25H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.562c-1.36 0-2.555.773-3.141 1.875H6.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.875v.75H6.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H3.297a3.53 3.53 0 0 0 3.14 1.875H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.562c-2.204 0-4.102-1.406-4.782-3.375H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.375v-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '558e015b132e0a07a444a0b024e2b775__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEuroSignCaptionFillIcon);
exports.default = ForwardRef;
