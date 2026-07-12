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
const LabelPairedSquareListXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 9.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75zm-3 .75c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.5 3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m4.875 0c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 14.625h-4.5c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 19.125h-4.5c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 23.625h-4.5c-.656 0-1.125-.469-1.125-1.125M6 19.5A1.48 1.48 0 0 1 4.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m-1.5 3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '59dec8dee05581747a81810d52df858e__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListXlBoldIcon);
exports.default = ForwardRef;
