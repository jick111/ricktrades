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
exports.LegacyRefresh2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyRefresh2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#86c9f40ecc7af0340145e8b05b56430a__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M3 0a1 1 0 0 1 1 1v1.255A7 7 0 0 1 15 8a1 1 0 1 1-2 0 5 5 0 0 0-8-4h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1M2 7a1 1 0 0 1 1 1 5 5 0 0 0 8 4H9a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.255A7 7 0 0 1 1 8a1 1 0 0 1 1-1', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '86c9f40ecc7af0340145e8b05b56430a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyRefresh2pxIcon = LegacyRefresh2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyRefresh2pxIcon);
exports.default = ForwardRef;
