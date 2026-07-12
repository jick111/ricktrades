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
exports.LegacyReportsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyReportsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#7c6cc651982687ca6f1a8c3335060b0a__a)' },
        React.createElement("path", { fill: '#333', d: 'M13 8v7h1a1 1 0 0 0 1-1V8zM9 0l4 4v3h3v7a2 2 0 0 1-2 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-.414 1H1v14h11V4.414zM6.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm3-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7c6cc651982687ca6f1a8c3335060b0a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyReportsIcon = LegacyReportsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyReportsIcon);
exports.default = ForwardRef;
