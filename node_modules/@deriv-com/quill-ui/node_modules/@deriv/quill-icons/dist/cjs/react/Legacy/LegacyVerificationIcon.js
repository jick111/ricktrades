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
exports.LegacyVerificationIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVerificationIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#40ea27799c0d87b31167d1d7fa0fcdb2__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a1 1 0 0 1 .73.28l.224.207A6.8 6.8 0 0 0 13.36 2.18 1.71 1.71 0 0 1 15 3.84v.5l.031.5a16.9 16.9 0 0 1-.771 5.92 8 8 0 0 1-2 3A10.6 10.6 0 0 1 8.38 16H8l-.23-.1h-.16a10.5 10.5 0 0 1-3.89-2.24 8.1 8.1 0 0 1-2-3A16.9 16.9 0 0 1 1 4.33v-.5a1.71 1.71 0 0 1 1.68-1.66A6.8 6.8 0 0 0 7.29.27L7.392.19C7.569.066 7.782 0 8 0m0 1-.23.212a7.8 7.8 0 0 1-5.08 1.959.71.71 0 0 0-.69.68v.53a16.1 16.1 0 0 0 .68 5.98A7 7 0 0 0 4.41 13a9.5 9.5 0 0 0 3.52 2h.17a9.4 9.4 0 0 0 3.48-2 7.1 7.1 0 0 0 1.68-2.65c.594-1.941.818-3.977.66-6v-.51a.71.71 0 0 0-.69-.68A7.8 7.8 0 0 1 8 1m2.1 4.91a.5.5 0 1 1 .8.6l-3 4a.5.5 0 0 1-.754.054l-2-2a.5.5 0 0 1 .708-.707L7.446 9.45z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '40ea27799c0d87b31167d1d7fa0fcdb2__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyVerificationIcon = LegacyVerificationIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVerificationIcon);
exports.default = ForwardRef;
