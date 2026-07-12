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
exports.IllustrativeStockIndicesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeStockIndicesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M24.665 14h-1.333c-1.107 0-2 .893-2 2v9.333c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2V16c0-1.107-.893-2-2-2m.667 11.333a.66.66 0 0 1-.667.667h-1.333a.66.66 0 0 1-.667-.667V16a.66.66 0 0 1 .667-.667h1.333a.66.66 0 0 1 .667.667zM16.665 18h-1.333c-1.107 0-2 .893-2 2v5.333c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2V20c0-1.107-.893-2-2-2m.667 7.333a.66.66 0 0 1-.667.667h-1.333a.66.66 0 0 1-.667-.667V20a.66.66 0 0 1 .667-.667h1.333a.66.66 0 0 1 .667.667zM8.665 20.667H7.332c-1.107 0-2 .893-2 2v2.666c0 1.107.893 2 2 2h1.333c1.107 0 2-.893 2-2v-2.666c0-1.107-.893-2-2-2m.667 4.666a.66.66 0 0 1-.667.667H7.332a.66.66 0 0 1-.667-.667v-2.666A.66.66 0 0 1 7.332 22h1.333a.66.66 0 0 1 .667.667zM27.959 5.133s0-.04-.014-.066c0-.027-.026-.04-.04-.067a.6.6 0 0 0-.106-.147.3.3 0 0 1-.067-.04.6.6 0 0 0-.147-.093.5.5 0 0 0-.146-.027c-.04 0-.067-.026-.107-.026h-4a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h2.347a40 40 0 0 1-9.32 6.747 40.1 40.1 0 0 1-11.8 3.933.667.667 0 0 0-.547.773.67.67 0 0 0 .653.56h.107a41 41 0 0 0 12.2-4.066c3.573-1.854 6.813-4.227 9.693-7.027v2.427a.66.66 0 0 0 .667.666.66.66 0 0 0 .667-.666v-4a.4.4 0 0 0-.04-.187z' }))));
exports.IllustrativeStockIndicesIcon = IllustrativeStockIndicesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeStockIndicesIcon);
exports.default = ForwardRef;
