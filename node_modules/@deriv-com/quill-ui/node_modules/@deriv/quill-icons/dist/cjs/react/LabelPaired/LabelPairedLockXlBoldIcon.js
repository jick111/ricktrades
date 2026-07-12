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
const LabelPairedLockXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.75 12v3h7.5v-3a3.76 3.76 0 0 0-3.75-3.75A3.73 3.73 0 0 0 6.75 12M4.5 15v-3c0-3.281 2.672-6 6-6 3.281 0 6 2.719 6 6v3H18c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-9c0-1.64 1.313-3 3-3zm-2.25 3v9c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-9c0-.375-.375-.75-.75-.75H3c-.422 0-.75.375-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '74cfbd31f6ab83dd8d95c6b4cb0d93a8__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLockXlBoldIcon);
exports.default = ForwardRef;
