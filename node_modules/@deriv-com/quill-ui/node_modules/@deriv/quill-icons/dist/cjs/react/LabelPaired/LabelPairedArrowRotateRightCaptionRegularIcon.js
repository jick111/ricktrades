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
const LabelPairedArrowRotateRightCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.875 8h-3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.016A4.5 4.5 0 0 0 6 5a4.501 4.501 0 0 0 0 9c1.57 0 2.977-.82 3.773-2.04.07-.116.211-.21.352-.21.281 0 .469.305.305.563C9.516 13.789 7.852 14.75 6 14.75A5.24 5.24 0 0 1 .75 9.5 5.256 5.256 0 0 1 6 4.25c1.898 0 3.563 1.031 4.5 2.555v-2.18c0-.187.164-.375.375-.375.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0dcb200e94294cbe047c51557c8e73c1__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightCaptionRegularIcon);
exports.default = ForwardRef;
