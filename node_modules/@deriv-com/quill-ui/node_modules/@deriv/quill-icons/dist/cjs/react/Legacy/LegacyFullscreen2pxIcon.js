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
exports.LegacyFullscreen2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyFullscreen2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#9e6f2d5652e5fbf17e8a98141564369e__a)' },
        React.createElement("path", { d: 'M2 3a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v2a1 1 0 0 0 2 0zM11 0a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 1 0 2 0V3a3 3 0 0 0-3-3zM1 10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M16 11a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1h-2a1 1 0 1 0 0 2h2a3 3 0 0 0 3-3z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9e6f2d5652e5fbf17e8a98141564369e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyFullscreen2pxIcon = LegacyFullscreen2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyFullscreen2pxIcon);
exports.default = ForwardRef;
