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
const LabelPairedYoutubeMdIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.156 7.906c.375 1.313.375 4.125.375 4.125s0 2.781-.375 4.125a2.08 2.08 0 0 1-1.5 1.5C14.312 18 9 18 9 18s-5.344 0-6.687-.344a2.08 2.08 0 0 1-1.5-1.5c-.375-1.343-.375-4.125-.375-4.125s0-2.812.375-4.125a2.13 2.13 0 0 1 1.5-1.531C3.656 6 9 6 9 6s5.313 0 6.656.375a2.13 2.13 0 0 1 1.5 1.531M7.25 14.563l4.438-2.532L7.25 9.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bd0bab2e994f3ea1de23cb166d5913e8__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedYoutubeMdIcon);
exports.default = ForwardRef;
