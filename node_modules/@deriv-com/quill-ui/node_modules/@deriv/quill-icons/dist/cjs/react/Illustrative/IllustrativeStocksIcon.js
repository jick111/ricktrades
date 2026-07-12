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
exports.IllustrativeStocksIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeStocksIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.333 10h-.666V8.053A.66.66 0 0 0 8 7.387a.66.66 0 0 0-.667.666V10h-.666c-1.107 0-2 .893-2 2v8c0 1.107.893 2 2 2h.666v2a.66.66 0 0 0 .667.667.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2v-8c0-1.107-.893-2-2-2M10 20a.66.66 0 0 1-.667.667H6.667A.66.66 0 0 1 6 20v-8a.66.66 0 0 1 .667-.667h2.666A.66.66 0 0 1 10 12zM17.333 6h-.666V4A.66.66 0 0 0 16 3.333a.66.66 0 0 0-.667.667v2h-.666c-1.107 0-2 .893-2 2v16c0 1.107.893 2 2 2h.666v2a.66.66 0 0 0 .667.667.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2V8c0-1.107-.893-2-2-2M18 24a.66.66 0 0 1-.667.667h-2.666A.66.66 0 0 1 14 24V8a.66.66 0 0 1 .667-.667h2.666A.66.66 0 0 1 18 8zM25.333 11.333h-.666V8A.66.66 0 0 0 24 7.333a.66.66 0 0 0-.667.667v3.333h-.666c-1.107 0-2 .894-2 2v8c0 1.107.893 2 2 2h.666v2A.66.66 0 0 0 24 26a.66.66 0 0 0 .667-.667v-2h.666c1.107 0 2-.893 2-2v-8c0-1.106-.893-2-2-2m.667 10a.66.66 0 0 1-.667.667h-2.666a.66.66 0 0 1-.667-.667v-8a.66.66 0 0 1 .667-.666h2.666a.66.66 0 0 1 .667.666z' }))));
exports.IllustrativeStocksIcon = IllustrativeStocksIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeStocksIcon);
exports.default = ForwardRef;
