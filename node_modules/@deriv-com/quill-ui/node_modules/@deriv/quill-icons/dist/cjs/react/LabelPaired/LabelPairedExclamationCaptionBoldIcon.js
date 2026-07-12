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
const LabelPairedExclamationCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 2, height: 18, viewBox: '0 0 2 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.563 4.813v6.75a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-6.75c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563M1 14.75A.74.74 0 0 1 .25 14c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a498b3d6e7b19feda00fcbf1295473be__a' },
            React.createElement("path", { d: 'M0 0h2v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationCaptionBoldIcon);
exports.default = ForwardRef;
