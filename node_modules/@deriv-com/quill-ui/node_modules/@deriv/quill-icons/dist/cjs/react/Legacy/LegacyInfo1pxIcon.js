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
exports.LegacyInfo1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyInfo1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#0eee7d15c402bbaac87499846cf37004__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 7m0-2.5A.75.75 0 1 1 8 6a.75.75 0 0 1 0-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0eee7d15c402bbaac87499846cf37004__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyInfo1pxIcon = LegacyInfo1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyInfo1pxIcon);
exports.default = ForwardRef;
