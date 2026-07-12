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
exports.LegacyPaste2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyPaste2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#4a0daebe23cc488f393d615cd7eabdf0__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M7.75 7.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M7.75 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M7.75 12.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75' }),
        React.createElement("path", { d: 'M2.762 1.01A2 2 0 0 1 4.5 0h2a2 2 0 0 1 1.738 1.01A3 3 0 0 1 11 4h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-2.83-2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 2.762-2.99M5 12V7a3 3 0 0 1 3-3h1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm3-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4a0daebe23cc488f393d615cd7eabdf0__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyPaste2pxIcon = LegacyPaste2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyPaste2pxIcon);
exports.default = ForwardRef;
