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
const LabelPairedArrowUpRightFromSquareMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.5 4.75a.74.74 0 0 1 .75-.75h4.969a.74.74 0 0 1 .75.75v5c0 .438-.313.75-.75.75a.74.74 0 0 1-.75-.75V6.563L7.5 13.53a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062L13.438 5.5H10.25a.72.72 0 0 1-.75-.75M2.25 5h4a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4a.74.74 0 0 0-.75.75v10.5c0 .438.313.75.75.75h10.5a.74.74 0 0 0 .75-.75v-4a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v4A2.26 2.26 0 0 1 12.75 20H2.25C1 20 0 19 0 17.75V7.25C0 6.031 1 5 2.25 5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '602dac5fbda80e4648bc599f954af29f__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareMdBoldIcon);
exports.default = ForwardRef;
