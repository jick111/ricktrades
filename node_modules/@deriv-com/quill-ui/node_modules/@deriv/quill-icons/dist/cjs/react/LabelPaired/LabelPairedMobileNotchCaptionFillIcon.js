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
const LabelPairedMobileNotchCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 5h-.75a.385.385 0 0 0-.375.375v8.25c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375v-8.25A.4.4 0 0 0 6.75 5H6v.375c0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3 5.375zm-.75-1.5h4.5a1.88 1.88 0 0 1 1.875 1.875v8.25A1.866 1.866 0 0 1 6.75 15.5h-4.5a1.85 1.85 0 0 1-1.875-1.875v-8.25c0-1.031.82-1.875 1.875-1.875M3 12.875c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3 12.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0d02ca924da0baa63a05fb19e8180a67__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchCaptionFillIcon);
exports.default = ForwardRef;
