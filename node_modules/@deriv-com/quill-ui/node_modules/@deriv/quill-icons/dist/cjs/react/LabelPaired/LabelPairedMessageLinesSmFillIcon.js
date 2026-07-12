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
const LabelPairedMessageLinesSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5.5c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v7.875c0 .984-.793 1.75-1.75 1.75h-3.8l-3.391 2.543c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41v-2.188H1.75c-.984 0-1.75-.766-1.75-1.75zm4.156 2.188c-.383 0-.656.3-.656.656 0 .383.273.656.656.656h5.688a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H7.22a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '056a6bafc45584fc00a17af5850a4fbc__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesSmFillIcon);
exports.default = ForwardRef;
