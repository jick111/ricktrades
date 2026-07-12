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
const LabelPairedWalletSignalCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5.75c0-.82.656-1.5 1.5-1.5h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375H10.5c.82 0 1.5.68 1.5 1.5v1.266a6.1 6.1 0 0 0-2.437-.516c-.727 0-1.313.61-1.313 1.313v4.687H1.5a1.48 1.48 0 0 1-1.5-1.5zm9 4.313c0-.305.234-.563.563-.563 3 0 5.437 2.438 5.437 5.438a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562c0-2.368-1.945-4.313-4.312-4.313A.54.54 0 0 1 9 10.063m0 2.25c0-.305.234-.563.563-.563a3.19 3.19 0 0 1 3.187 3.188.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562 2.08 2.08 0 0 0-2.062-2.063.54.54 0 0 1-.563-.562m0 2.437c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd58c587d58a01915fcbf7af4e8d0a6e4__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletSignalCaptionFillIcon);
exports.default = ForwardRef;
