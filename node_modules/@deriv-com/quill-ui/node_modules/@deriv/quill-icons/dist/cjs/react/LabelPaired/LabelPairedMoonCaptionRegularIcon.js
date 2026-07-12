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
const LabelPairedMoonCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.453 5.07A4.505 4.505 0 0 0 .75 9.5c0 2.508 1.992 4.5 4.477 4.5a4.66 4.66 0 0 0 2.203-.562c-2.485-.211-4.453-2.32-4.453-4.876 0-1.359.562-2.601 1.476-3.492M6 4.578a.335.335 0 0 1-.164.399 4.116 4.116 0 0 0 2.016 7.71c.234 0 .468 0 .703-.046.164-.024.328.046.398.187.07.164.047.328-.07.445a5.21 5.21 0 0 1-3.656 1.477C2.344 14.75 0 12.406 0 9.5c0-2.883 2.344-5.25 5.227-5.25.14 0 .304.023.445.023.164.024.305.141.328.305' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4752236039da46983ef8b729310615b0__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoonCaptionRegularIcon);
exports.default = ForwardRef;
