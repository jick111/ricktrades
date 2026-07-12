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
const LabelPairedPaperclipCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.156 5.094a1.74 1.74 0 0 0-2.46 0l-4.5 4.5a2.787 2.787 0 0 0 0 3.96 2.787 2.787 0 0 0 3.96 0L9.72 9.993c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-3.563 3.562a3.58 3.58 0 0 1-5.039 0c-1.383-1.406-1.383-3.656 0-5.04l4.5-4.5a2.533 2.533 0 0 1 3.54 0c.96.985.96 2.555 0 3.54l-4.313 4.312c-.656.656-1.758.586-2.344-.14a1.575 1.575 0 0 1 .117-2.086L6.72 6.617c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-3.563 3.562a.795.795 0 0 0-.07 1.078c.305.375.89.422 1.219.07l4.312-4.312a1.74 1.74 0 0 0 0-2.461' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '789b2e73b46185b02c8a2457119a088b__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperclipCaptionRegularIcon);
exports.default = ForwardRef;
