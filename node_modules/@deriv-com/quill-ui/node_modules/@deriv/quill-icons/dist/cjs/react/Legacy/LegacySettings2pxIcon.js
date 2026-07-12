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
exports.LegacySettings2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySettings2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#187800246584e14848e6d1caa6671547__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M8 4.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M6.25 8a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0' }),
        React.createElement("path", { d: 'M9.06 0H6.94L5.656 1.58a7 7 0 0 0-.538.223l-2.026-.209-1.497 1.498.208 2.026a7 7 0 0 0-.223.538L0 6.94V9.06l1.58 1.285q.1.275.223.538l-.208 2.026 1.497 1.498 2.026-.209q.263.123.538.223L6.94 16H9.06l1.286-1.58a7 7 0 0 0 .537-.223l2.026.209 1.498-1.498-.209-2.026q.123-.263.224-.538L16 9.06V6.94l-1.58-1.285a7 7 0 0 0-.223-.538l.208-2.026-1.498-1.498-2.026.209a7 7 0 0 0-.537-.223zM6.835 3.298 7.5 2h1l.664 1.298.287.09q.41.129.784.325l.267.14 1.387-.45.707.708-.448 1.387.14.267q.196.375.325.785l.09.286L14 7.5v1l-1.297.664-.09.286a5 5 0 0 1-.326.785l-.14.267.45 1.387-.708.707-1.387-.448-.267.139q-.376.196-.784.325l-.287.09L8.5 14h-1l-.664-1.298-.286-.09a5 5 0 0 1-.785-.325l-.266-.14-1.388.45-.707-.708.449-1.388-.14-.266q-.196-.375-.325-.785l-.09-.286L2 8.5v-1l1.298-.664.09-.286q.13-.41.325-.785l.14-.267-.45-1.387.708-.707 1.388.448.266-.139q.375-.196.785-.325z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '187800246584e14848e6d1caa6671547__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacySettings2pxIcon = LegacySettings2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySettings2pxIcon);
exports.default = ForwardRef;
