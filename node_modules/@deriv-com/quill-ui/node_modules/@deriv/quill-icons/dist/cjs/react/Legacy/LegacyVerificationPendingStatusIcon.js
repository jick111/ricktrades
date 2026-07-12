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
exports.LegacyVerificationPendingStatusIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVerificationPendingStatusIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#dc51301e6510f20c35fd56523e4cfee5__a)' },
        React.createElement("path", { fill: '#FFAD3A', d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M8 5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8V5.75A.75.75 0 0 1 8 5', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dc51301e6510f20c35fd56523e4cfee5__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyVerificationPendingStatusIcon = LegacyVerificationPendingStatusIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVerificationPendingStatusIcon);
exports.default = ForwardRef;
