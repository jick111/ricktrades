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
const LabelPairedBriefcaseCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 4.625V5.75h4.5V4.625a.4.4 0 0 0-.375-.375h-3.75a.385.385 0 0 0-.375.375M3 5.75V4.625c0-.61.492-1.125 1.125-1.125h3.75C8.485 3.5 9 4.016 9 4.625V5.75h1.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5zm5.625.75H1.5a.755.755 0 0 0-.75.75V9.5h10.5V7.25a.77.77 0 0 0-.75-.75zm2.625 3.75H7.875v1.125c0 .422-.352.75-.75.75h-2.25a.74.74 0 0 1-.75-.75V10.25H.75v3c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75zm-6.375 0v1.125h2.25V10.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9a72ca77e3792b6cff742acf987daffc__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBriefcaseCaptionRegularIcon);
exports.default = ForwardRef;
