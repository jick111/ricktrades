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
const LabelPairedChevronsRightSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.05 16.328a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l4.95-4.949-4.95-4.922a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0l5.25 5.25a.463.463 0 0 1 0 .63zm5.25 0a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l4.95-4.949-4.95-4.922a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0l5.25 5.25a.463.463 0 0 1 0 .63z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '406690903c0d9ee8b9777bc2770d52ad__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsRightSmRegularIcon);
exports.default = ForwardRef;
