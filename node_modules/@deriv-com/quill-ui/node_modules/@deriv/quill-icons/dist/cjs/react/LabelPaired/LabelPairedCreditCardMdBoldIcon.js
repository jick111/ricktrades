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
const LabelPairedCreditCardMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16 6.5H2c-.281 0-.5.25-.5.5v1h15V7c0-.25-.25-.5-.5-.5m.5 4.5h-15v6c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5zM2 5h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m1.75 9.5h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m4 0h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7d0a227c2503ef4bfbf45844524b8c0b__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCreditCardMdBoldIcon);
exports.default = ForwardRef;
