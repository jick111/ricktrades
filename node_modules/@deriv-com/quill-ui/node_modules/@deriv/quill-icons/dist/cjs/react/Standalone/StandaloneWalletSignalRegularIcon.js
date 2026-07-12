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
exports.StandaloneWalletSignalRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneWalletSignalRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 10.875A3.11 3.11 0 0 1 6.625 7.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C5.57 9 4.75 9.86 4.75 10.875v11.25C4.75 23.18 5.57 24 6.625 24H17.25v1.25H6.625c-1.758 0-3.125-1.367-3.125-3.125zm3.75 0c0-.312.273-.625.625-.625h12.5a3.134 3.134 0 0 1 3.125 3.125v2.734c-.43-.195-.82-.312-1.25-.468v-2.227c0-1.055-.86-1.875-1.875-1.875h-12.5a.64.64 0 0 1-.625-.625zm11.25 6.25c0-.312.273-.625.625-.625 5.156 0 9.375 4.219 9.375 9.375a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-4.453-3.672-8.125-8.125-8.125a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625 3.086 0 5.625 2.54 5.625 5.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-2.383-1.992-4.375-4.375-4.375a.617.617 0 0 1-.625-.625m0 4.375c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' })));
exports.StandaloneWalletSignalRegularIcon = StandaloneWalletSignalRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneWalletSignalRegularIcon);
exports.default = ForwardRef;
