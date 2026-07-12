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
exports.LegacyOpenPositionIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyOpenPositionIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#e6d952259d16ba9242e3e11e228d686c__a)' },
        React.createElement("path", { fill: '#333', d: 'M10.5 0A1.5 1.5 0 0 1 12 1.5V3h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v1.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0zm0 1h-9a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V13H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.5a.5.5 0 0 0-.5-.5M15 4H4v8h11zm-4.146 1.146 2.5 2.5.011.013.033.039-.044-.052A.5.5 0 0 1 13.5 8v.02l-.005.052L13.5 8a.5.5 0 0 1-.146.354l-2.5 2.5a.5.5 0 0 1-.708-.708L11.791 8.5H5.5a.5.5 0 0 1 0-1h6.293l-1.647-1.646a.5.5 0 0 1 .708-.708' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e6d952259d16ba9242e3e11e228d686c__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyOpenPositionIcon = LegacyOpenPositionIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyOpenPositionIcon);
exports.default = ForwardRef;
