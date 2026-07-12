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
const LabelPairedSquareListCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5a.755.755 0 0 0-.75.75v7.5c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75v-7.5A.77.77 0 0 0 9.25 5zm-1.5.75c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm2.438 1.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m2.062 0c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375m0 2.25c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3A.37.37 0 0 1 4.75 9.5m0 2.25c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375m-1.5-1.687a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563m-.562 1.687c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f66c33917e0e6e616a4f1aa4a5eaa836__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListCaptionRegularIcon);
exports.default = ForwardRef;
