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
exports.LegacyArchive2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyArchive2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#9dcfc778399338113c01cf600cfabb99__a)' },
        React.createElement("path", { d: 'M8 7.25a.75.75 0 0 1 .75.75v2.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V8A.75.75 0 0 1 8 7.25' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M1.574 1.336A3 3 0 0 1 4.07 0h7.86a3 3 0 0 1 2.496 1.336l.734 1.102A5 5 0 0 1 16 5.21V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5.211a5 5 0 0 1 .84-2.773zM4.07 2a1 1 0 0 0-.832.445l-.734 1.102A3 3 0 0 0 2.255 4h11.49a3 3 0 0 0-.249-.453l-.734-1.102A1 1 0 0 0 11.93 2zM14 6H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9dcfc778399338113c01cf600cfabb99__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyArchive2pxIcon = LegacyArchive2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyArchive2pxIcon);
exports.default = ForwardRef;
