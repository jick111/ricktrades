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
const LabelPairedArrowRotateRightLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M18.438 14.25h-5.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.515l-1.055-1.25c-1.289-1.523-3.164-2.5-5.273-2.5A6.86 6.86 0 0 0 3.125 15.5 6.836 6.836 0 0 0 10 22.375a6.8 6.8 0 0 0 4.102-1.367.94.94 0 0 1 1.328.195.94.94 0 0 1-.196 1.328C13.79 23.625 11.954 24.25 10 24.25a8.736 8.736 0 0 1-8.75-8.75c0-4.805 3.906-8.75 8.75-8.75 2.695 0 5.117 1.25 6.719 3.164l.781.938V7.687c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v5.625c0 .546-.43.937-.937.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c53a6691cf97fa688de4619bc15188d2__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightLgBoldIcon);
exports.default = ForwardRef;
