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
exports.LegacyShare2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyShare2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#e88866316a15b5d19f8bcb03218b1d3e__a)' },
        React.createElement("path", { d: 'M8.287.307q.134.054.243.163l3 3a.75.75 0 0 1-1.06 1.06L8.75 2.81V9a.75.75 0 0 1-1.5 0V2.81L5.53 4.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .817-.163' }),
        React.createElement("path", { d: 'M2 8a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2H4v6h8V8h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e88866316a15b5d19f8bcb03218b1d3e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyShare2pxIcon = LegacyShare2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyShare2pxIcon);
exports.default = ForwardRef;
