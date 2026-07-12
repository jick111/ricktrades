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
const LabelPairedGripDotsVerticalCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 18, viewBox: '0 0 6 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5.75a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375A.385.385 0 0 0 1.5 5.75m-1.5 0c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.125 0A1.12 1.12 0 0 1 0 5.75M1.5 9.5a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375A.385.385 0 0 0 1.5 9.5M0 9.5c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0A1.12 1.12 0 0 1 0 9.5m1.125 4.125a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375m0-1.5c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563M5.25 5.75a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375m-1.5 0c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.125 0a1.12 1.12 0 0 1-.563-.984m1.125 4.125A.385.385 0 0 0 5.25 9.5a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375m0-1.5c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563m.375 4.875a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375m-1.5 0c0-.398.21-.75.563-.96a1.08 1.08 0 0 1 1.125 0c.328.21.562.562.562.96 0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.12 1.12 0 0 1-.563-.984' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6dc0fc72de96d481b165ec801d2d14ad__a' },
            React.createElement("path", { d: 'M0 0h6v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalCaptionRegularIcon);
exports.default = ForwardRef;
